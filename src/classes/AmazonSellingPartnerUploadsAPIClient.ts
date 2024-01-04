//
// Imports
//

import { AmazonSellingPartnerAPIClient } from "./AmazonSellingPartnerAPIClient.js";
import { AmazonSellingPartnerAPIError } from "./AmazonSellingPartnerAPIError.js";

import
{
	CreateUploadDestinationForResourceQuery,
	CreateUploadDestinationResponse,
} from "../types/uploads-api/v2020-11-01.js";

//
// Class
//

/** A client for v2020-11-01 of the Uploads endpoints of the Amazon Selling Partner API. */
export class AmazonSellingPartnerUploadsAPIClient
{
	amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient;

	constructor(amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient)
	{
		this.amazonSellingPartnerApiClient = amazonSellingPartnerApiClient;
	}

	async createUploadDestinationForResource(resource : string, query : CreateUploadDestinationForResourceQuery) : Promise<CreateUploadDestinationResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceIds.length != 1)
			{
				throw new Error("Only one marketplace ID is supported.");
			}

			searchParams.set("marketplaceIds", query.marketplaceIds.join(","));
		}

		{
			searchParams.set("contentMD5", query.contentMD5);
		}

		if (query.contentType != null)
		{
			searchParams.set("contentType", query.contentType);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/uploads/2020-11-01/uploadDestinations/" + resource,
				searchParams,
			});

		const responseData = await response.json() as CreateUploadDestinationResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}
}