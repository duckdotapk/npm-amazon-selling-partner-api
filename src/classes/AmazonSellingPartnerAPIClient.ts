//
// Imports
//

import { formatDate } from "../utilities/format-date.js";

//
// Class
//

/** An access token possessed by the client. */
export interface AmazonSellingPartnerAPIClientAccessToken
{
	/** The access token. */
	accessToken : string;

	/** A unix timestamp representing when the access token expires. */
	expiresTimestamp : number;
}

/** A response from Amazon's OAuth2 endpoint. */
export interface AmazonSellingPartnerAPIClientAccessTokenResponse
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
export interface AmazonSellingPartnerAPIClientOptions
{
	/** A refresh token from an Amazon Seller Central app. */
	refreshToken : string;

	/** A client identifier from an Amazon Seller Central app. */
	clientIdentifier : string;

	/** A client secret from an Amazon Seller Central app. */
	clientSecret : string;

	/** @deprecated No longer used. */
	iamUserAccessKey : string;

	/** @deprecated No longer used. */
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
export interface AmazonSellingPartnerAPIClientRequestOptions
{
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

	/** The Amazon Seller Partner API Endpoint to use. */
	apiEndpoint : string;

	/** The AWS region to use. */
	awsRegion : string;

	/** The current access tokens this client has. */
	accessTokens : AmazonSellingPartnerAPIClientAccessToken[];

	/** Constructs a new client. */
	constructor(options : AmazonSellingPartnerAPIClientOptions)
	{
		this.refreshToken = options.refreshToken;

		this.clientIdentifier = options.clientIdentifier;

		this.clientSecret = options.clientSecret;

		this.apiEndpoint = options.apiEndpoint;

		this.awsRegion = options.awsRegion;

		this.accessTokens = [];
	}

	/**
	 * Adds an access token to the client.
	 *
	 * This is intended to be used to add a restricted data token.
	 */
	addAccessToken(accessToken : AmazonSellingPartnerAPIClientAccessToken) : AmazonSellingPartnerAPIClientAccessToken
	{
		this.accessTokens.unshift(accessToken);

		return accessToken;
	}

	/** Removes an access token from the client, if it is still present. */
	removeAccessToken(accessToken : AmazonSellingPartnerAPIClientAccessToken) : void
	{
		const index = this.accessTokens.indexOf(accessToken);

		if (index === -1)
		{
			return;
		}

		this.accessTokens.splice(index, 1);
	}

	/**
	 * Fetches a fresh access token.
	 *
	 * @returns A promise that resolves to the access token.
	 */
	async getCurrentAccessToken() : Promise<AmazonSellingPartnerAPIClientAccessToken>
	{
		//
		// Try Existing Tokens
		//

		while (this.accessTokens[0] != null)
		{
			const accessToken = this.accessTokens[0];

			if (accessToken.expiresTimestamp > (Date.now() / 1000))
			{
				return accessToken;
			}

			this.accessTokens.shift();
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

		const accessTokenResponse = await rawAccessTokenResponse.json() as AmazonSellingPartnerAPIClientAccessTokenResponse;

		if (accessTokenResponse.access_token == null)
		{
			throw new Error("Failed to fetch access token.");
		}

		//
		// Add & Return Access Token
		//

		return this.addAccessToken(
			{
				accessToken: accessTokenResponse.access_token,
				expiresTimestamp: (Date.now() / 1000) + accessTokenResponse.expires_in,
			});
	}

	/** Performs a request to the Selling Partner API. */
	async request(options: AmazonSellingPartnerAPIClientRequestOptions): Promise<Response>
	{
		const accessToken = await this.getCurrentAccessToken();

		const dateTime = formatDate(new Date());

		const headers = new Headers();
		
		headers.set("host", this.apiEndpoint);
		headers.set("user-agent", "Amazon SP API Node.js Client");
		headers.set("x-amz-access-token", accessToken.accessToken);
		headers.set("x-amz-date", dateTime);

		let uri = this.apiEndpoint + options.path;

		if (options.searchParams != null)
		{
			uri += "?" + options.searchParams.toString();
		}

		return await fetch(uri,
		{
			method: options.method,
			headers,
			body: options.body ?? null,
		});
	}
}

