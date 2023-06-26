//
// Amazon Selling Partner API > A+ Content API > v2020-11-01
//

export type Asin = string;

export type AsinBadge = "BRAND_NOT_ELIGIBLE" | "CATALOG_NOT_FOUND" | "CONTENT_NOT_PUBLISHED" | "CONTENT_PUBLISHED";

export type AsinBadgeSet = AsinBadge[];

export interface AsinMetadata
{
	asin : Asin;

	badgeSet? : AsinBadgeSet;

	parent? : Asin;

	title? : string;

	imageUrl? : string;

	contentReferenceKeySet? : ContentReferenceKeySet;
}

export type AsinMetadataSet = AsinMetadata[];

export type AsinSet = Asin[];

export type ColorType = "DARK" | "LIGHT";

export type ContentBadge = "BULK" | "GENERATED" | "LAUNCHPAD" | "PREMIUM" | "STANDARD";

export type ContentBadgeSet = ContentBadge[];

export interface ContentDocument
{
	name : string;

	contentType : ContentType;

	contentSubType? : ContentSubType;

	locale : LanguageTag;

	contentModuleList : ContentModuleList;
}

export interface ContentMetadata
{
	name : string;

	marketplaceId : MarketplaceId;

	status : ContentStatus;

	badgeSet : ContentBadgeSet;

	updateTime : string;
}

export interface ContentMetadataRecord
{
	contentReferenceKey : ContentReferenceKey;

	contentMetadata : ContentMetadata;
}

export type ContentMetadataRecordList = ContentMetadataRecord[];

export interface ContentModule
{
	contentModuleType : ContentModuleType;

	standardCompanyLogo? : StandardCompanyLogoModule;

	standardComparisonTable? : StandardComparisonTableModule;

	standardFourImageText? : StandardFourImageTextModule;

	standardFourImageTextQuadrant? : StandardFourImageTextQuadrantModule;

	standardHeaderImageText? : StandardHeaderImageTextModule;

	standardImageSidebar? : StandardImageSidebarModule;

	standardImageTextOverlay? : StandardImageTextOverlayModule;

	standardMultipleImageText? : StandardMultipleImageTextModule;

	standardProductDescription? : StandardProductDescriptionModule;

	standardSingleImageHighlights? : StandardSingleImageHighlightsModule;

	standardSingleImageSpecsDetail? : StandardSingleImageSpecsDetailModule;

	standardSingleSideImage? : StandardSingleSideImageModule;

	standardTechSpecs? : StandardTechSpecsModule;

	standardText? : StandardTextModule;

	standardThreeImageText? : StandardThreeImageTextModule;
}

export type ContentModuleList = ContentModule[];

export type ContentModuleType = "STANDARD_COMPANY_LOGO" | "STANDARD_COMPARISON_TABLE" | "STANDARD_FOUR_IMAGE_TEXT" | "STANDARD_FOUR_IMAGE_TEXT_QUADRANT" | "STANDARD_HEADER_IMAGE_TEXT" | "STANDARD_IMAGE_SIDEBAR" | "STANDARD_IMAGE_TEXT_OVERLAY" | "STANDARD_MULTIPLE_IMAGE_TEXT" | "STANDARD_PRODUCT_DESCRIPTION" | "STANDARD_SINGLE_IMAGE_HIGHLIGHTS"
	| "STANDARD_SINGLE_IMAGE_SPECS_DETAIL" | "STANDARD_SINGLE_SIDE_IMAGE" | "STANDARD_TECH_SPECS" | "STANDARD_TEXT" | "STANDARD_THREE_IMAGE_TEXT";

export interface ContentRecord
{
	contentReferenceKey : ContentReferenceKey;

	contentMetadata? : ContentMetadata;

	contentDocument? : ContentDocument;
}

export type ContentReferenceKey = string;

export type ContentReferenceKeySet = ContentReferenceKey[];

export type ContentStatus = "APPROVED" | "DRAFT" | "REJECTED" | "SUBMITTED";

export type ContentType = "EBC" | "EMC";

export type ContentSubType = string;

export interface CreateContentDocumentQuery
{
	marketplaceId : MarketplaceId; // "string" type in docs
}

export interface Decorator
{
	type? : DecoratorType;

	offset? : number;

	length? : number;

	depth? : number;
}

export type DecoratorSet = Decorator[];

export type DecoratorType = "LIST_ITEM" | "LIST_ORDERED" | "LIST_UNORDERED" | "STYLE_BOLD" | "STYLE_ITALIC" | "STYLE_LINEBREAK" | "STYLE_PARAGRAPH" | "STYLE_UNDERLINE";

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

export interface GetContentDocumentQuery
{
	marketplaceId : MarketplaceId; // "string" type in docs

	includedDataSet : IncludedDataSetForGetContentDocument[];
}

export interface GetContentDocumentResponse
{
	warnings? : MessageSet;

	contentRecord : ContentRecord;
}

export interface ImageComponent
{
	uploadDestinationId : string;

	imageCropSpecification : ImageCropSpecification;

	altText : string;
}

export interface ImageCropSpecification
{
	size : ImageDimensions;

	offset? : ImageOffsets;
}

export interface ImageDimensions
{
	width : IntegerWithUnits;

	height : IntegerWithUnits;
}

export interface ImageOffsets
{
	x : IntegerWithUnits;

	y : IntegerWithUnits;
}

/**
 * Note: Amazon has two separate enums in this API named status.
 * So this name does NOT follow their docs to avoid conflicts.
 */
export type IncludedDataSetForGetContentDocument = "CONTENTS" | "METADATA";

/**
 * Note: Amazon has two separate enums in this API named status.
 * So this name does NOT follow their docs to avoid conflicts.
 */
export type IncludedDataSetForListContentDocumentAsinRelations = "METADATA";

export interface IntegerWithUnits
{
	value : number;

	units : string;
}

export type LanguageTag = string;

export type ListContentDocumentAsinRelationsQuery = ListContentDocumentAsinRelationsQueryInitial | ListContentDocumentAsinRelationsQueryNext;

export interface ListContentDocumentAsinRelationsQueryInitial
{
	marketplaceId : MarketplaceId; // "string" type in docs

	includedDataSet? : IncludedDataSetForListContentDocumentAsinRelations[];

	asinSet? : AsinSet; // "string[]" type in docs
}

export interface ListContentDocumentAsinRelationsQueryNext
{
	pageToken : PageToken; // "string" type in docs
}

export interface ListContentDocumentAsinRelationsResponse
{
	warnings? : MessageSet;

	nextPageToken? : PageToken;

	asinMetadataSet : AsinMetadataSet;
}

export type MarketplaceId = string;

export type MessageSet = Error[];

export type PageToken = string;

export interface ParagraphComponent
{
	textList : TextComponent[];
}

export interface PlainTextItem
{
	position : number;

	value : string;
}

export type PositionType = "LEFT" | "RIGHT";

export interface PostContentDocumentAsinRelationsQuery
{
	marketplaceId : MarketplaceId; // "string" type in docs
}

export interface PostContentDocumentAsinRelationsRequest
{
	asinSet : AsinSet;
}

export interface PostContentDocumentAsinRelationsResponse
{
	warnings? : MessageSet;
}

export interface PostContentDocumentApprovalSubmissionQuery
{
	marketplaceId : MarketplaceId; // "string" type in docs
}

export interface PostContentDocumentApprovalSubmissionResponse
{
	warnings? : MessageSet;
}

export interface PostContentDocumentRequest
{
	contentDocument : ContentDocument;
}

export interface PostContentDocumentResponse
{
	warnings? : MessageSet;

	contentReferenceKey : ContentReferenceKey;
}

export interface PostContentDocumentSuspendSubmissionQuery
{
	marketplaceId : MarketplaceId; // "string" type in docs
}

export interface PostContentDocumentSuspendSubmissionResponse
{
	warnings? : MessageSet;
}

export interface PublishRecord
{
	marketplaceId : MarketplaceId;

	locale : LanguageTag;

	asin : Asin;

	contentType : ContentType;

	contentSubType : ContentSubType;

	contentReferenceKey : ContentReferenceKey;
}

export type PublishRecordList = PublishRecord[];

export type SearchContentDocumentsQuery = SearchContentDocumentsQueryInitial | SearchContentDocumentsQueryNext;

export interface SearchContentDocumentsQueryInitial
{
	marketplaceId : MarketplaceId; // "string" type in docs
}

export interface SearchContentDocumentsQueryNext
{
	pageToken : string;
}

export interface SearchContentDocumentsResponse
{
	warnings? : MessageSet;

	nextPageToken? : PageToken;

	contentMetadataRecords : ContentMetadataRecordList;
}

export type SearchContentPublishRecordsQuery = SearchContentPublishRecordsQueryInitial | SearchContentPublishRecordsQueryNext;

export interface SearchContentPublishRecordsQueryInitial
{
	marketplaceId : MarketplaceId; // "string" type in docs

	asin : Asin; // "string" type in docs
}

export interface SearchContentPublishRecordsQueryNext
{
	pageToken : PageToken;
}

export interface SearchContentPublishRecordsResponse
{
	warnings? : MessageSet;

	nextPageToken? : PageToken;

	publishRecordList : PublishRecordList;
}

export interface StandardCompanyLogoModule
{
	companyLogo : ImageComponent;
}

export interface StandardComparisonProductBlock
{
	position : number;

	image? : ImageComponent;

	title? : string;

	asin? : Asin;

	highlight? : boolean;

	metrics? : PlainTextItem[];
}

export interface StandardComparisonTableModule
{
	productColumns : StandardComparisonProductBlock[];

	metricRowLabels : PlainTextItem[];
}

export interface StandardFourImageTextModule
{
	headline? : TextComponent;

	block1? : StandardImageTextBlock;

	block2? : StandardImageTextBlock;

	block3? : StandardImageTextBlock;

	block4? : StandardImageTextBlock;
}

export interface StandardFourImageTextQuadrantModule
{
	block1 : StandardImageTextBlock;

	block2 : StandardImageTextBlock;

	block3 : StandardImageTextBlock;

	block4 : StandardImageTextBlock;
}

export interface StandardHeaderImageTextModule
{
	headline? : TextComponent;

	block? : StandardImageTextBlock;
}

export interface StandardHeaderTextListBlock
{
	headline? : TextComponent;

	block? : StandardTextListBlock;
}

export interface StandardImageCaptionBlock
{
	image? : ImageComponent;

	caption? : TextComponent;
}

export interface StandardImageSidebarModule
{
	headline? : TextComponent;

	imageCaptionBlock? : StandardImageCaptionBlock;

	descriptionTextBlock? : StandardTextBlock;

	descriptionListBlock? : StandardTextListBlock;

	sidebarImageTextBlock? : StandardImageTextBlock;

	sidebarListBlock? : StandardTextListBlock;
}

export interface StandardImageTextBlock
{
	image? : ImageComponent;

	headline? : TextComponent;

	body? : ParagraphComponent;
}

export interface StandardImageTextCaptionBlock
{
	block? : StandardImageTextBlock;

	caption? : TextComponent;
}

export interface StandardImageTextOverlayModule
{
	overlayColorType : ColorType;

	block? : StandardImageTextBlock;
}

export interface StandardMultipleImageTextModule
{
	blocks? : StandardImageTextCaptionBlock[];
}

export interface StandardProductDescriptionModule
{
	body : ParagraphComponent;
}

export interface StandardSingleImageHighlightsModule
{
	image? : ImageComponent;

	headline? : TextComponent;

	textBlock1? : StandardTextBlock;

	textBlock2? : StandardTextBlock;

	textBlock3? : StandardTextBlock;

	bulletedListBlock? : StandardHeaderTextListBlock;
}

export interface StandardSingleImageSpecsDetailModule
{
	headline? : TextComponent;

	image? : ImageComponent;

	descriptionHeadline? : TextComponent;

	descriptionBlock1? : StandardTextBlock;

	descriptionBlock2? : StandardTextBlock;

	specificationHeadline? : TextComponent;

	specificationListBlock? : StandardHeaderTextListBlock;

	specificationTextBlock? : StandardTextBlock;
}

export interface StandardSingleSideImageModule
{
	imagePositionType : PositionType;

	block? : StandardImageTextBlock;
}

export interface StandardTechSpecsModule
{
	headline? : TextComponent;

	specificationList : StandardTextPairBlock[];

	tableCount? : number;
}

export interface StandardTextModule
{
	headline? : TextComponent;

	body : ParagraphComponent;
}

export interface StandardThreeImageTextModule
{
	headline? : TextComponent;

	block1? : StandardImageTextBlock;

	block2? : StandardImageTextBlock;

	block3? : StandardImageTextBlock;
}

export interface StandardTextBlock
{
	headline? : TextComponent;

	body? : ParagraphComponent;
}

export interface StandardTextListBlock
{
	textList : TextItem[];
}

export interface StandardTextPairBlock
{
	label? : TextComponent;

	description? : TextComponent;
}

export interface TextComponent
{
	value : string;

	decoratorSet? : DecoratorSet;
}

export interface TextItem
{
	position : number;

	text : TextComponent;
}

export interface UpdateContentDocumentQuery
{
	marketplaceId : MarketplaceId; // "string" type in docs
}

export interface ValidateContentDocumentAsinRelationsQuery
{
	marketplaceId : MarketplaceId; // "string" type in docs

	asinSet? : AsinSet; // "string[]" type in docs
}

export interface ValidateContentDocumentAsinRelationsResponse
{
	warnings? : MessageSet;

	// Note: This type technically has an "errors" property in the docs but this conflicts with the ErrorList type, so I don't include it here
	//	It means the same thing, the request failed, but I don't want to have to deal with the name conflict
}