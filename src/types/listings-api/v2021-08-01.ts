//
// Amazon Selling Partner API > Listings API > v2021-08-01
//

export type ConditionType = "new_new" | "new_open_box" | "new_oem" | "refurbished_refurbished" | "used_like_new" | "used_very_good" | "used_good" | "used_acceptable" | "collectible_like_new" | "collectible_very_good" | "collectible_good" | "collectible_acceptable" | "club_club";

export type Decimal = string;

export interface DeleteListingsItemQuery
{
	marketplaceIds : string[];

	issueLocale? : string;
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

export interface FulfillmentAvailability
{
	fulfillmentChannelCode : string;

	quantity? : number;
}

export interface GetListingsItemQuery
{
	marketplaceIds : string[];

	issueLocale? : string;

	includedData? : IncludedData[];
}

export type IncludedData = "summaries" | "attributes" | "issues" | "offers" | "fulfillmentAvailability" | "procurement";

export interface Issue
{
	code : string;

	message : string;

	severity : Severity;

	attributeNames? : string[];
}

export interface Item
{
	sku : string;

	summaries? : ItemSummaries;

	attributes? : ItemAttributes;

	issues? : ItemIssues;

	offers? : ItemOffers;

	fulfillmentAvailability? : FulfillmentAvailability[];

	procurement? : ItemProcurement;
}

export type ItemAttributes = { [key : string] : string };

export interface ItemImage
{
	link : string;

	height : number;

	width : number;
}

export type ItemIssues = Issue[];

export type ItemOffers = ItemOfferByMarketplace[];

export interface ItemOfferByMarketplace
{
	marketplaceId : string;

	offerType : OfferType;

	price : Money;

	points? : Points;
}

export interface ItemProcurement
{
	costPrice : Money;
}

export type ItemSummaries = ItemSummaryByMarketplace[];

export interface ItemSummaryByMarketplace
{
	marketplaceId : string;

	asin : string;

	productType : string;

	conditionType? : ConditionType;

	status : StatusForItemSummaryByMarketplace[];

	fnSku? : string;

	itemName : string;

	createdDate : string;

	lastUpdatedDate : string;

	mainImage? : ItemImage;
}

export interface ListingsItemPatchRequest
{
	productType : string;

	patches : PatchOperation[];
}

export interface ListingsItemPutRequest
{
	productType : string;

	requirements? : Requirements;

	// TODO: Not sure if "string" is the right type for the values here.
	attributes : { [key : string] : string };
}

export interface ListingsItemSubmissionResponse
{
	sku : string;

	status : StatusForListingsItemSubmissionResponse;

	submissionId : string;

	issues? : Issue[];
}

export interface Money
{
	currencyCode : string;

	amount : Decimal;
}

export type OfferType = "B2C" | "B2B";

export type Op = "add" | "replace" | "delete";

export interface PatchListingsItemQuery
{
	marketplaceIds : string[];

	issueLocale? : string;
}

export interface PatchOperation
{
	op : Op;

	path : string;

	// TODO: Not sure if "string" is the right type for the values here.
	value : { [key : string] : string }[];
}

export interface Points
{
	pointsNumber : number;
}

export interface PutListingsItemQuery
{
	marketplaceIds : string[];

	issueLocale? : string;
}

export type Requirements = "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";

export type Severity = "ERROR" | "WARNING" | "INFO";

/**
 * Note: Amazon has two separate enums in this API named status.
 * So this name does NOT follow their docs to avoid conflicts.
 */
export type StatusForListingsItemSubmissionResponse = "ACCEPTED" | "INVALID";

/**
 * Note: Amazon has two separate enums in this API named status.
 * So this name does NOT follow their docs to avoid conflicts.
 */
export type StatusForItemSummaryByMarketplace = "BUYABLE" | "DISCOVERABLE";