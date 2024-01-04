//
// Imports
//

import { AmazonSellingPartnerAPIClient } from "./AmazonSellingPartnerAPIClient.js";
import { AmazonSellingPartnerAPIError } from "./AmazonSellingPartnerAPIError.js";

import
{
	DeleteListingsItemQuery,
	ErrorList,
	GetListingsItemQuery,
	Item,
	ListingsItemPatchRequest,
	ListingsItemPutRequest,
	ListingsItemSubmissionResponse,
	PatchListingsItemQuery,
	PutListingsItemQuery,
} from "../types/listings-api/v2021-08-01.js";

//
// Class
//

/** A client for v2021-08-01 of the Listings endpoints of the Amazon Selling Partner API. */
export class AmazonSellingPartnerListingsAPIClient
{
	amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient;

	constructor(amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient)
	{
		this.amazonSellingPartnerApiClient = amazonSellingPartnerApiClient;
	}

	async deleteListingsItem(sellerId : string, sku : string, query : DeleteListingsItemQuery) : Promise<ListingsItemSubmissionResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceIds.length == 0)
			{
				throw new Error("marketplaceIds must contain at least one marketplace ID.");
			}

			searchParams.set("marketplaceIds", query.marketplaceIds.join(","));
		}

		if (query.issueLocale != null)
		{
			// TODO: validate that this is a valid locale, maybe?

			searchParams.set("issueLocale", query.issueLocale);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "DELETE",
				path: "/listings/2021-08-01/items/" + sellerId + "/" + sku,
				searchParams,
			});

		const responseData = await response.json() as ErrorList | ListingsItemSubmissionResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getListingsItem(sellerId : string, sku : string, query : GetListingsItemQuery) : Promise<Item>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceIds.length == 0)
			{
				throw new Error("marketplaceIds must contain at least one marketplace ID.");
			}

			searchParams.set("marketplaceIds", query.marketplaceIds.join(","));
		}

		if (query.issueLocale != null)
		{
			// TODO: Make sure this is a valid locale, maybe?

			searchParams.set("issueLocale", query.issueLocale);
		}

		if (query.includedData != null)
		{
			searchParams.set("includedData", query.includedData.join(","));
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/listings/2021-08-01/items/" + sellerId + "/" + sku,
				searchParams,
			});

		const responseData = await response.json() as ErrorList | Item;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async patchListingsItem(sellerId : string, sku : string, query : PatchListingsItemQuery, body : ListingsItemPatchRequest) : Promise<ListingsItemSubmissionResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceIds.length == 0)
			{
				throw new Error("marketplaceIds must contain at least one marketplace ID.");
			}

			searchParams.set("marketplaceIds", query.marketplaceIds.join(","));
		}

		if (query.issueLocale != null)
		{
			// TODO: Make sure this is a valid locale, maybe?

			searchParams.set("issueLocale", query.issueLocale);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "PATCH",
				path: "/listings/2021-08-01/items/" + sellerId + "/" + sku,
				searchParams,
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as ErrorList | ListingsItemSubmissionResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async putListingsItem(sellerId : string, sku : string, query : PutListingsItemQuery, body : ListingsItemPutRequest) : Promise<ListingsItemSubmissionResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceIds.length == 0)
			{
				throw new Error("marketplaceIds must contain at least one marketplace ID.");
			}

			searchParams.set("marketplaceIds", query.marketplaceIds.join(","));
		}

		if (query.issueLocale != null)
		{
			// TODO: Make sure this is a valid locale, maybe?

			searchParams.set("issueLocale", query.issueLocale);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "PUT",
				path: "/listings/2021-08-01/items/" + sellerId + "/" + sku,
				searchParams,
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as ErrorList | ListingsItemSubmissionResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}
}