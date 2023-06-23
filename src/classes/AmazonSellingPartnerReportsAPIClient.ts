//
// Imports
//

import { AmazonSellingPartnerAPIClient } from "./AmazonSellingPartnerAPIClient.js";
import { AmazonSellingPartnerAPIError } from "./AmazonSellingPartnerAPIError.js";

import
{
	CreateReportResponse,
	CreateReportScheduleResponse,
	CreateReportScheduleSpecification,
	CreateReportSpecification,
	ErrorList,
	GetReportsQuery,
	GetReportsResponse,
	GetReportSchedulesQuery,
	Report,
	ReportDocument,
	ReportSchedule,
	ReportScheduleList,
} from "../types/amazon-selling-partner-api/reports-api/v2021-06-30.js";

//
// Class
//

/** A client for v2021-06-30 of the Reports endpoints of the Amazon Selling Partner API. */
export class AmazonSellingPartnerReportsAPIClient
{
	private readonly amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient;

	constructor(amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient)
	{
		this.amazonSellingPartnerApiClient = amazonSellingPartnerApiClient;
	}

	async cancelReport(reportId : string) : Promise<void>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "DELETE",
				path: "/reports/2021-06-30/reports/" + reportId,
			});

		// Note: This operation returns no content, so we can't check for errors the same way as the others.
		if (!response.ok)
		{
			const responseData = await response.json() as ErrorList;

			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}
	}

	async cancelReportSchedule(reportScheduleId : string) : Promise<void>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "DELETE",
				path: "/reports/2021-06-30/schedules/" + reportScheduleId,
			});

		// Note: This operation returns no content, so we can't check for errors the same way as the others.
		if (!response.ok)
		{
			const responseData = await response.json() as ErrorList;

			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}
	}

	async createReport(body : CreateReportSpecification) : Promise<CreateReportResponse>
	{
		//
		// Validate Body
		//

		if (body.dataStartTime != null)
		{
			// TODO: validate dataStartTime is a date
		}

		if (body.dataEndTime != null)
		{
			// TODO: validate dataEndTime is a date
		}

		if (body.marketplaceIds.length == 0)
		{
			throw new Error("marketplaceIds must contain at least one marketplace ID.");
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/reports/2021-06-30/reports",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as ErrorList | CreateReportResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async createReportSchedule(body : CreateReportScheduleSpecification) : Promise<CreateReportScheduleResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/reports/2021-06-30/schedules",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as ErrorList | CreateReportScheduleResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getReport(reportId : string) : Promise<Report>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/reports/2021-06-30/reports/" + reportId,
			});

		const responseData = await response.json() as ErrorList | Report;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getReportDocument(reportDocumentId : string) : Promise<ReportDocument>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/reports/2021-06-30/documents/" + reportDocumentId,
			});

		const responseData = await response.json() as ErrorList | ReportDocument;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getReportSchedule(reportScheduleId : string) : Promise<ReportSchedule>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/reports/2021-06-30/schedules/" + reportScheduleId,
			});

		const responseData = await response.json() as ErrorList | ReportSchedule;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getReportSchedules(query : GetReportSchedulesQuery) : Promise<ReportScheduleList>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		{
			if (query.reportTypes.length < 1 || query.reportTypes.length > 10)
			{
				throw new Error("The reportTypes option must be an array of 1 to 10 strings.");
			}

			searchParams.set("reportTypes", query.reportTypes.join(","));
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/reports/2021-06-30/schedules",
				searchParams: searchParams,
			});

		const responseData = await response.json() as ErrorList | ReportScheduleList;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getReports(query : GetReportsQuery) : Promise<GetReportsResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		if (!("nextToken" in query))
		{
			if (query.reportTypes != null)
			{
				if (query.reportTypes.length < 1 || query.reportTypes.length > 10)
				{
					throw new Error("The reportTypes option must be an array of 1 to 10 strings.");
				}

				searchParams.set("reportTypes", query.reportTypes.join(","));
			}

			if (query.processingStatuses != null)
			{
				if (query.processingStatuses.length < 1)
				{
					throw new Error("The processingStatuses option must be an array of at least 1 string.");
				}

				searchParams.set("processingStatuses", query.processingStatuses.join(","));
			}

			if (query.marketplaceIds != null)
			{
				if (query.marketplaceIds.length < 1 || query.marketplaceIds.length > 10)
				{
					throw new Error("The marketplaceIds option must be an array of 1 to 10 strings.");
				}

				searchParams.set("marketplaceIds", query.marketplaceIds.join(","));
			}

			if (query.pageSize != null)
			{
				if (query.pageSize < 1 || query.pageSize > 100)
				{
					throw new Error("The pageSize option must be a number between 1 and 100.");
				}

				searchParams.set("pageSize", query.pageSize.toString());
			}

			if (query.createdSince != null)
			{
				// TODO: validate createdSince is a date

				searchParams.set("createdSince", query.createdSince);
			}

			if (query.createdUntil != null)
			{
				// TODO: validate createdUntil is a date

				searchParams.set("createdUntil", query.createdUntil);
			}
		}
		else
		{
			searchParams.set("nextToken", query.nextToken);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/reports/2021-06-30/reports",
				searchParams,
			});

		const responseData = await response.json() as ErrorList | GetReportsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}
}