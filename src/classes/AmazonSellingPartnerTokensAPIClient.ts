//
// Imports
//

import { AmazonSellingPartnerAPIClient } from "./AmazonSellingPartnerAPIClient.js";
import { AmazonSellingPartnerAPIError } from "./AmazonSellingPartnerAPIError.js";

import
{
	CreateRestrictedDataTokenRequest,
	CreateRestrictedDataTokenResponse,
	ErrorList,
} from "../types/tokens-api/v2021-03-01.js";

//
// Class
//

/** A client for v2021-03-01 of the Tokens endpoints of the Amazon Selling Partner API. */
export class AmazonSellingPartnerTokensAPIClient
{
	amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient;

	constructor(amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient)
	{
		this.amazonSellingPartnerApiClient = amazonSellingPartnerApiClient;
	}

	async createRestrictedDataToken(body : CreateRestrictedDataTokenRequest) : Promise<CreateRestrictedDataTokenResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/tokens/2021-03-01/restrictedDataToken",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as ErrorList | CreateRestrictedDataTokenResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}
}