//
// Imports
//

import crypto from "node:crypto";

import { formatDate } from "../utilities/format-date.js";

//
// Class
//

/** A response from Amazon's OAuth2 endpoint. */
export interface AccessTokenResponse
{
	/** The access token. */
	access_token : string;

	/** The refresh token. */
	refresh_token : string;

	/** The token type. */
	token_type : string;

	/** The amount of time, in seconds, the access token is valid for. */
	expires_in : number;
}

/** Options passed to the Client constructor. */
export interface Options
{
	/** A refresh token from an Amazon Seller Central app. */
	refreshToken : string;

	/** A client identifier from an Amazon Seller Central app. */
	clientIdentifier : string;

	/** A client secret from an Amazon Seller Central app. */
	clientSecret : string;

	/** An access key for the IAM user associated with the Amazon Seller Central app. */
	iamUserAccessKey : string;

	/** A secret access key for the IAM user associated with the Amazon Seller Central app. */
	iamUserSecretAccessKey : string;

	/**
	 * An Amazon Seller Partner API Endpoint to use.
	 *
	 * @see https://developer-docs.amazon.com/sp-api/docs/sp-api-endpoints
	 */
	apiEndpoint : string;

	/**
	 * The AWS region to use. This should correspond to the region of the API endpoint.
	 *
	 * @see https://developer-docs.amazon.com/sp-api/docs/sp-api-endpoints
	 */
	awsRegion : string;
}

/** Options passed to a Client's connect method. */
export interface RequestOptions
{
	/** An access token to use. You can use this to override the default access token, useful for accessing restricted data. */
	accessToken? : string;

	/** The HTTP method to use. */
	method : "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

	/** The path to the API you want to call. */
	path : string;

	/** The query parameters to use, if any. */
	searchParams? : URLSearchParams;

	/** The body of the request, if any. */
	body? : string;
}

/** The core client that handles actually connecting to the Selling Partner API. */
export class AmazonSellingPartnerAPIClient
{
	/** The refresh token from an Amazon Seller Central app. */
	refreshToken : string;

	/** The client identifier from an Amazon Seller Central app. */
	clientIdentifier : string;

	/** The client secret from an Amazon Seller Central app. */
	clientSecret : string;

	/** The access key for the IAM user associated with the Amazon Seller Central app. */
	iamUserAccessKey : string;

	/** The secret access key for the IAM user associated with the Amazon Seller Central app. */
	iamUserSecretAccessKey : string;

	/** The Amazon Seller Partner API Endpoint to use. */
	apiEndpoint : string;

	/** The AWS region to use. */
	awsRegion : string;

	/** The current access token. */
	accessToken : string | null;

	/** A unix timestamp representing when the current access token expires. */
	accessTokenExpiresTimestamp : number;

	/** Constructs a new client. */
	constructor(options : Options)
	{
		this.refreshToken = options.refreshToken;

		this.clientIdentifier = options.clientIdentifier;

		this.clientSecret = options.clientSecret;

		this.iamUserAccessKey = options.iamUserAccessKey;

		this.iamUserSecretAccessKey = options.iamUserSecretAccessKey;

		this.apiEndpoint = options.apiEndpoint;

		this.awsRegion = options.awsRegion;

		this.accessToken = null;

		this.accessTokenExpiresTimestamp = 0;
	}

	/**
	 * Fetches a fresh access token.
	 *
	 * @returns A promise that resolves to the access token.
	 */
	async getAccessToken() : Promise<string>
	{
		//
		// Return Existing Token (if it's still valid)
		//

		if (this.accessToken != null && this.accessTokenExpiresTimestamp > (Date.now() / 1000))
		{
			return this.accessToken;
		}

		//
		// Request New Token
		//

		const headers = new Headers();

		headers.set("Content-Type", "application/x-www-form-urlencoded");

		const body = new URLSearchParams();

		body.set("grant_type", "refresh_token");
		body.set("refresh_token", this.refreshToken);
		body.set("client_id", this.clientIdentifier);
		body.set("client_secret", this.clientSecret);

		const rawAccessTokenResponse = await fetch("https://api.amazon.com/auth/o2/token",
			{
				method: "POST",
				headers,
				body,
			});

		const accessTokenResponse = await rawAccessTokenResponse.json() as AccessTokenResponse;

		if (accessTokenResponse.access_token == null)
		{
			throw new Error("Failed to fetch access token.");
		}

		//
		// Set Token & Expires Timestamp
		//

		this.accessToken = accessTokenResponse.access_token;

		this.accessTokenExpiresTimestamp = (Date.now() / 1000) + accessTokenResponse.expires_in;

		//
		// Return Token
		//

		return this.accessToken;
	}

	/** Performs a request to the Selling Partner API. */
	async request(options : RequestOptions) : Promise<Response>
	{
		const headers = await this.createSignedRequestHeaders(options);

		let uri = this.apiEndpoint + options.path;

		if (options.searchParams != null)
		{
			uri += "?" + options.searchParams.toString();
		}

		return fetch(uri,
			{
				method: options.method,
				headers,
				body: options.body ?? null,
			});
	}

	/** Creates signed request headers for an AWS request. */
	async createSignedRequestHeaders(options : RequestOptions)
	{
		const dateTime = formatDate(new Date());

		const date = dateTime.substring(0, 8);

		const accessToken = options.accessToken ?? await this.getAccessToken();

		const headers : { [key : string] : string } =
			{
				"host": new URL(this.apiEndpoint).hostname,
				"user-agent": "Amazon SP API Node.js Client",
				"x-amz-access-token": accessToken, // Note: This is case-sensitive for some goddamn reason
				"x-amz-date": dateTime, // Note: This one ISN'T (???) but I am lower casing it for consistency
			};

		if (options.body != null)
		{
			headers["content-type"] = "application/json";
		}

		const canonicalHeaders = Object.entries(headers)
			.sort(([ a ], [ b ]) => a.localeCompare(b))
			.map(([ k, v ]) => `${ k.toLowerCase() }:${ (v as string).trim() }\n`)
			.join("");

		const signedHeaderNames = Object.keys(headers)
			.map((k) => k.toLowerCase())
			.sort()
			.join(";");

		const hashedPayload = crypto
			.createHash("sha256")
			.update(options.body ?? "")
			.digest("hex");

		const canonicalQueryParams = Array.from(options.searchParams ?? new URLSearchParams())
			.sort(([ a ], [ b ]) => a.localeCompare(b))
			.map(([ key, value ]) => `${ encodeURIComponent(key) }=${ encodeURIComponent(value) }`)
			.join("&");

		const canonicalRequest =
			[
				options.method,
				options.path,
				canonicalQueryParams,
				canonicalHeaders,
				signedHeaderNames,
				hashedPayload,
			].join("\n");

		const credentialScope =
			[
				date,
				this.awsRegion,
				"execute-api",
				"aws4_request",
			].join("/");

		const stringToSign =
			[
				"AWS4-HMAC-SHA256",
				dateTime,
				credentialScope,
				crypto.createHash("sha256").update(canonicalRequest).digest("hex"),
			].join("\n");

		const signingKey = this.getSigningKey(date);

		const signature = crypto
			.createHmac("sha256", signingKey)
			.update(stringToSign)
			.digest("hex");

		headers["Authorization"] =
			`AWS4-HMAC-SHA256 Credential=${ this.iamUserAccessKey }/${ credentialScope },` +
			`SignedHeaders=${ signedHeaderNames },Signature=${ signature }`;

		return headers;
	}

	/** Gets the signing key for a given date. */
	getSigningKey(date : string) : Buffer
	{
		const kDate = crypto
			.createHmac("sha256", "AWS4" + this.iamUserSecretAccessKey)
			.update(date)
			.digest();

		const kRegion = crypto.createHmac("sha256", kDate).update(this.awsRegion).digest();

		const kService = crypto.createHmac("sha256", kRegion).update("execute-api").digest();

		return crypto
			.createHmac("sha256", kService)
			.update("aws4_request")
			.digest();
	}
}

