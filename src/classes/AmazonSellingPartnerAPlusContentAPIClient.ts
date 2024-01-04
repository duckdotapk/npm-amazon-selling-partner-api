//
// Imports
//

import { AmazonSellingPartnerAPIClient } from "./AmazonSellingPartnerAPIClient.js";
import { AmazonSellingPartnerAPIError } from "./AmazonSellingPartnerAPIError.js";

import
{
	CreateContentDocumentQuery,
	ErrorList,
	GetContentDocumentQuery,
	GetContentDocumentResponse,
	ListContentDocumentAsinRelationsQuery,
	ListContentDocumentAsinRelationsResponse,
	PostContentDocumentAsinRelationsQuery,
	PostContentDocumentAsinRelationsRequest,
	PostContentDocumentAsinRelationsResponse,
	PostContentDocumentApprovalSubmissionQuery,
	PostContentDocumentApprovalSubmissionResponse,
	PostContentDocumentRequest,
	PostContentDocumentResponse,
	PostContentDocumentSuspendSubmissionQuery,
	PostContentDocumentSuspendSubmissionResponse,
	SearchContentDocumentsQuery,
	SearchContentDocumentsResponse,
	SearchContentPublishRecordsQuery,
	SearchContentPublishRecordsResponse,
	UpdateContentDocumentQuery,
	ValidateContentDocumentAsinRelationsQuery,
	ValidateContentDocumentAsinRelationsResponse,
} from "../types/aplus-content-api/v2020-11-01.js";

//
// Class
//

/** A client for v2020-11-01 of the A+ Content endpoints of the Amazon Selling Partner API. */
export class AmazonSellingPartnerAPlusContentAPIClient
{
	amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient;

	constructor(amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient)
	{
		this.amazonSellingPartnerApiClient = amazonSellingPartnerApiClient;
	}

	async createContentDocument(query : CreateContentDocumentQuery, postContentDocumentRequest : PostContentDocumentRequest) : Promise<PostContentDocumentResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceId.length < 1)
			{
				throw new Error("Invalid marketplaceId.");
			}

			searchParams.set("marketplaceId", query.marketplaceId);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/aplus/2020-11-01/contentDocuments",
				searchParams,
				body: JSON.stringify(postContentDocumentRequest),
			});

		const responseData = await response.json() as ErrorList | PostContentDocumentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getContentDocument(contentReferenceKey : string, query : GetContentDocumentQuery) : Promise<GetContentDocumentResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceId.length < 1)
			{
				throw new Error("Invalid marketplaceId.");
			}

			searchParams.set("marketplaceId", query.marketplaceId);
		}

		{
			if (query.includedDataSet.length < 1)
			{
				throw new Error("Invalid includedDataSet.");
			}

			searchParams.set("includedDataSet", query.includedDataSet.join(","));
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/aplus/2020-11-01/contentDocuments/" + contentReferenceKey,
				searchParams,
			});

		const responseData = await response.json() as ErrorList | GetContentDocumentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async listContentDocumentAsinRelations(contentReferenceKey : string, query : ListContentDocumentAsinRelationsQuery) : Promise<ListContentDocumentAsinRelationsResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		if (!("pageToken" in query))
		{
			{
				if (query.marketplaceId.length < 1)
				{
					throw new Error("Invalid marketplaceId.");
				}

				searchParams.set("marketplaceId", query.marketplaceId);
			}

			if (query.includedDataSet != null)
			{
				searchParams.set("includedDataSet", query.includedDataSet.join(","));
			}

			if (query.asinSet != null)
			{
				searchParams.set("asinSet", query.asinSet.join(","));
			}
		}
		else
		{
			{
				if (query.pageToken.length < 1)
				{
					throw new Error("Invalid pageToken.");
				}

				searchParams.set("pageToken", query.pageToken);
			}
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/aplus/2020-11-01/contentDocuments/" + contentReferenceKey + "/asins",
				searchParams,
			});

		const responseData = await response.json() as ErrorList | ListContentDocumentAsinRelationsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async postContentDocumentApprovalSubmission(contentReferenceKey : string, query : PostContentDocumentApprovalSubmissionQuery) : Promise<PostContentDocumentApprovalSubmissionResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceId.length < 1)
			{
				throw new Error("Invalid marketplaceId.");
			}

			searchParams.set("marketplaceId", query.marketplaceId);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/aplus/2020-11-01/contentDocuments/" + contentReferenceKey + "/approvalSubmissions",
				searchParams,
			});


		const responseData = await response.json() as ErrorList | PostContentDocumentApprovalSubmissionResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async postContentDocumentAsinRelations(contentReferenceKey : string, query : PostContentDocumentAsinRelationsQuery, postContentDocumentAsinRelationsRequest : PostContentDocumentAsinRelationsRequest) : Promise<PostContentDocumentAsinRelationsResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceId.length < 1)
			{
				throw new Error("Invalid marketplaceId.");
			}

			searchParams.set("marketplaceId", query.marketplaceId);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/aplus/2020-11-01/contentDocuments/" + contentReferenceKey + "/asins",
				searchParams,
				body: JSON.stringify(postContentDocumentAsinRelationsRequest),
			});

		const responseData = await response.json() as ErrorList | PostContentDocumentAsinRelationsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async postContentDocumentSuspendSubmission(contentReferenceKey : string, query : PostContentDocumentSuspendSubmissionQuery) : Promise<PostContentDocumentSuspendSubmissionResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceId.length < 1)
			{
				throw new Error("Invalid marketplaceId.");
			}

			searchParams.set("marketplaceId", query.marketplaceId);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/aplus/2020-11-01/contentDocuments/" + contentReferenceKey + "/suspendSubmissions",
				searchParams,
			});

		const responseData = await response.json() as ErrorList | PostContentDocumentSuspendSubmissionResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async searchContentDocuments(query : SearchContentDocumentsQuery) : Promise<SearchContentDocumentsResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		if (!("pageToken" in query))
		{
			{
				if (query.marketplaceId.length < 1)
				{
					throw new Error("Invalid marketplaceId.");
				}

				searchParams.set("marketplaceId", query.marketplaceId);
			}
		}
		else
		{
			{
				if (query.pageToken.length < 1)
				{
					throw new Error("Invalid pageToken.");
				}

				searchParams.set("pageToken", query.pageToken);
			}
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/aplus/2020-11-01/contentDocuments",
				searchParams,
			});

		const responseData = await response.json() as ErrorList | SearchContentDocumentsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async searchContentPublishRecords(query : SearchContentPublishRecordsQuery) : Promise<SearchContentPublishRecordsResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		if (!("pageToken" in query))
		{
			{
				if (query.marketplaceId.length < 1)
				{
					throw new Error("Invalid marketplaceId.");
				}

				searchParams.set("marketplaceId", query.marketplaceId);
			}

			{
				if (query.asin.length < 10)
				{
					throw new Error("Invalid asin.");
				}

				searchParams.set("asin", query.asin);
			}
		}
		else
		{
			searchParams.set("pageToken", query.pageToken);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/aplus/2020-11-01/contentPublishRecords",
				searchParams,
			});

		const responseData = await response.json() as ErrorList | SearchContentPublishRecordsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async updateContentDocument(contentReferenceKey : string, query : UpdateContentDocumentQuery, postContentDocumentRequest : PostContentDocumentRequest) : Promise<PostContentDocumentResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceId.length < 1)
			{
				throw new Error("Invalid marketplaceId.");
			}

			searchParams.set("marketplaceId", query.marketplaceId);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/aplus/2020-11-01/contentDocuments/" + contentReferenceKey,
				searchParams,
				body: JSON.stringify(postContentDocumentRequest),
			});

		const responseData = await response.json() as ErrorList | PostContentDocumentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async validateContentDocumentAsinRelations(query : ValidateContentDocumentAsinRelationsQuery, postContentDocumentRequest : PostContentDocumentRequest) : Promise<ValidateContentDocumentAsinRelationsResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.marketplaceId.length < 1)
			{
				throw new Error("Invalid marketplaceId.");
			}

			searchParams.set("marketplaceId", query.marketplaceId);
		}

		if (query.asinSet != null)
		{
			searchParams.set("asinSet", query.asinSet.join(","));
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/aplus/2020-11-01/contentAsinValidations",
				searchParams,
				body: JSON.stringify(postContentDocumentRequest),
			});

		const responseData = await response.json() as ErrorList | ValidateContentDocumentAsinRelationsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}
}