//
// Amazon Selling Partner API > Reports API > v2021-06-30
//

export type CompressionAlgorithm = "GZIP";

export interface CreateReportResponse
{
	reportId : string;
}

export interface CreateReportScheduleResponse
{
	reportScheduleId : string;
}

export interface CreateReportScheduleSpecification
{
	reportType : ReportTypeValue;

	marketplaceIds : string[];

	reportOptions? : ReportOptions;

	period : Period;

	nextReportCreationTime? : string;
}

export interface CreateReportSpecification // IMO this should be called "CreateReportRequest" but this is what Amazon calls it on their docs
{
	reportOptions? : ReportOptions;

	reportType : ReportTypeValue;

	dataStartTime? : string;

	dataEndTime? : string;

	marketplaceIds : string[];
}

export interface Error
{
	code : string;

	message : string;

	details? : string;
}

export interface ErrorList
{
	errors : Error[];
}

export type GetReportsQuery = GetReportsQueryInitial | GetReportsQueryNext

export interface GetReportsQueryInitial
{
	reportTypes : string[];

	processingStatuses? : ProcessingStatus[];

	marketplaceIds? : string[];

	pageSize? : number;

	createdSince? : string;

	createdUntil? : string;
}

export interface GetReportsQueryNext
{
	nextToken : string;
}

export interface GetReportsResponse
{
	reports : ReportList;

	nextToken? : string;
}

export interface GetReportSchedulesQuery
{
	reportTypes : ReportTypeValue[];
}

export type Period = "PT5M" | "PT15M" | "PT30M" | "PT1H" | "PT2H" | "PT4H" | "PT8H" | "PT12H" | "P1D" | "P2D" | "P3D" | "PT84H" | "P7D" | "P14D" | "P15D" | "P18D" | "P30D" | "P1M";

export type ProcessingStatus = "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";

export interface Report
{
	marketplaceIds? : string[];

	reportId : string;

	reportType : ReportTypeValue;

	dataStartTime? : string;

	dataEndTime? : string;

	reportScheduleId? : string;

	createdTime : string;

	processingStatus : ProcessingStatus;

	processingStartTime? : string;

	processingEndTime? : string;

	reportDocumentId? : string;
}

export interface ReportDocument
{
	reportDocumentId : string;

	url : string;

	compressionAlgorithm? : CompressionAlgorithm;
}

export type ReportList = Report[];

export type ReportOptions = { [key : string] : string };

export interface ReportSchedule
{
	reportScheduleId : string;

	reportType : ReportTypeValue;

	marketplaceIds? : string[];

	reportOptions? : ReportOptions;

	period : string;

	nextReportCreationTime? : string;
}

export interface ReportScheduleList
{
	reportSchedules : ReportSchedule[];
}

// TODO: replace string with specific types from this page:
//  https://developer-docs.amazon.com/sp-api/docs/report-type-values
export type ReportTypeValue = string;