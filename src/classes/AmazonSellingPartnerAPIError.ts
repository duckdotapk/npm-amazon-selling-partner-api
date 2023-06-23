//
// Class
//

/** An error interface similar to the ones returned by various Amazon Selling Partner APIs. */
export interface ErrorLike
{
	code : string;

	message : string;

	details? : string;
}

/** An object representing an error returned by the Amazon Selling Partner API. */
export class AmazonSellingPartnerAPIError extends Error
{
	/**
	 * Gets the appropriate error message for the given status code.
	 *
	 * @param statusCode
	 */
	private static getErrorMessage(statusCode : number) : string
	{
		switch (statusCode)
		{
			case 400:
				return "Request has missing or invalid parameters and cannot be parsed.";

			case 401:
				return "The request's Authorization header is not formatted correctly or does not contain a valid token.";

			case 403:
				return "Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature.";

			case 404:
				return "The specified resource does not exist.";

			case 413:
				return "The request size exceeded the maximum accepted size.";

			case 415:
				return "The request's Content-Type header is invalid.";

			case 429:
				return "The frequency of requests was greater than allowed.";

			case 500:
				return "An unexpected condition occurred that prevented the server from fulfilling the request.";

			case 503:
				return "Temporary overloading or maintenance of the server.";

			default:
				return "An unknown error occurred.";
		}
	}

	/** The status code of the response. */
	public readonly statusCode : number;

	/** The x-amzn-RateLimit-Limit header of the response. */
	public readonly rateLimit : string | null;

	/** The x-amzn-RequestId header of the response. */
	public readonly requestId : string | null;

	/** The errors returned by the API. */
	public readonly errors : ErrorLike[];

	/**
	 * Constructs a new AmazonSellingPartnerAPIError.
	 *
	 * @param response A response from the Amazon Selling Partner API.
	 * @param errors The errors returned by the API.
	 */
	constructor(response : Response, errors : ErrorLike[])
	{
		const message = AmazonSellingPartnerAPIError.getErrorMessage(response.status);

		super(message);

		this.statusCode = response.status;

		this.rateLimit = response.headers.get("x-amzn-RateLimit-Limit");

		this.requestId = response.headers.get("x-amzn-RequestId");

		this.errors = errors;
	}
}