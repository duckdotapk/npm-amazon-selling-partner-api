//
// Amazon Selling Partner API > Uploads API > v2020-11-01
//

export interface CreateUploadDestinationForResourceQuery
{
	marketplaceIds : string[];

	contentMD5 : string;

	contentType? : string;
}

export interface CreateUploadDestinationResponse
{
	payload? : UploadDestination;

	errors? : ErrorList;
}

export interface Error
{
	code : string;

	message : string;

	details? : string;
}

export type ErrorList = Error[];

export interface UploadDestination
{
	uploadDestinationId? : string;

	url? : string;

	headers? : { [key : string] : string };
}