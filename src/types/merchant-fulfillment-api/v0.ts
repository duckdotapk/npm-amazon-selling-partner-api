//
// Amazon Selling Partner API > Merchant Fulfillment API > v0
//

export interface AdditionalInputs
{
	AdditionalInputFieldName? : string;

	SellerInputDefinition? : SellerInputDefinition;
}

export type AdditionalInputsList = AdditionalInputs[];

export interface AdditionalSellerInput
{
	DataType? : string;

	ValueAsString? : string;

	ValueAsBoolean? : boolean;

	ValueAsInteger? : number;

	ValueAsTimestamp? : Timestamp;

	ValueAsAddress? : Address;

	ValueAsWeight? : Weight;

	ValueAsDimension? : Length;

	ValueAsCurrency? : CurrencyAmount;
}

export interface AdditionalSellerInputs
{
	AdditionalInputFieldName : string;

	AdditionalSellerInput : AdditionalSellerInput;
}

export type AdditionalSellerInputsList = AdditionalSellerInputs[];

export interface Address
{
	Name : AddressName;

	AddressLine1 : AddressLine1;

	AddressLine2? : AddressLine2;

	AddressLine3? : AddressLine3;

	DistrictOrCounty? : DistrictOrCounty;

	Email : EmailAddress;

	City : City;

	StateOrProvinceCode? : StateOrProvinceCode;

	PostalCode : PostalCode;

	CountryCode : CountryCode;

	Phone : PhoneNumber;
}

export type AddressName = string;

export type AddressLine1 = string;

export type AddressLine2 = string;

export type AddressLine3 = string;

export type AmazonOrderId = string;

export interface AvailableCarrierWillPickUpOption
{
	CarrierWillPickUpOption : CarrierWillPickUpOption;

	Charge : CurrencyAmount;
}

export type AvailableCarrierWillPickUpOptionsList = AvailableCarrierWillPickUpOption[];

export interface AvailableDeliveryExperienceOption
{
	DeliveryExperienceOption : DeliveryExperienceOption;

	Charge : CurrencyAmount;
}

export type AvailableDeliveryExperienceOptionsList = AvailableDeliveryExperienceOption[];

export type AvailableFormatOptionsForLabelList = LabelFormatOption[];

export interface AvailableShippingServiceOptions
{
	AvailableCarrierWillPickUpOptions : AvailableCarrierWillPickUpOptionsList;

	AvailableDeliveryExperienceOptions : AvailableDeliveryExperienceOptionsList;
}

export interface CancelShipmentResponse
{
	payload? : Shipment;

	errors? : ErrorList;
}

export type CarrierWillPickUpOption = "CarrierWillPickUp" | "ShipperWillDropOff" | "NoPreference";

export type City = string;

export interface Constraint
{
	ValidationRegEx? : string;

	ValidationString : string;
}

export type Constraints = Constraint[];

export type CountryCode = string;

export interface CreateShipmentRequest
{
	ShipmentRequestDetails : ShipmentRequestDetails;

	ShippingServiceId : ShippingServiceIdentifier;

	ShippingServiceOfferId? : string;

	HazmatType? : HazmatType;

	LabelFormatOption? : LabelFormatOptionRequest;

	ShipmentLevelSellerInputsList? : AdditionalSellerInputsList;
}

export interface CreateShipmentResponse
{
	payload? : Shipment;

	errors? : ErrorList;
}

export interface CurrencyAmount
{
	CurrencyCode : string;

	Amount : number;
}

export type CustomTextForLabel = string;

export type DeliveryExperienceOption = "DeliveryConfirmationWithAdultSignature" | "DeliveryConfirmationWithSignature" | "DeliveryConfirmationWithoutSignature" | "NoTracking" | "NoPreference";

export type DeliveryExperienceType = "DeliveryConfirmationWithAdultSignature" | "DeliveryConfirmationWithSignature" | "DeliveryConfirmationWithoutSignature" | "NoTracking";

export type DistrictOrCounty = string;

export type EmailAddress = string;

export interface Error
{
	code : string;

	message : string;

	details? : string;
}

export type ErrorList = Error[];

export interface FileContents
{
	Contents : string;

	FileType : FileType;

	Checksum : string;
}

export type FileType = "application/pdf" | "application/zpl" | "image/png";

export interface GetAdditionalSellerInputsRequest
{
	ShippingServiceId : ShippingServiceIdentifier;

	ShipFromAddress : Address;

	OrderId : AmazonOrderId;
}

export interface GetAdditionalSellerInputsResponse
{
	payload? : GetAdditionalSellerInputsResult;

	errors? : ErrorList;
}

export interface GetAdditionalSellerInputsResult
{
	ShipmentLevelFields? : AdditionalInputsList;

	ItemLevelFieldsList? : ItemLevelFieldsList;
}

export interface GetEligibleShipmentServicesRequest
{
	ShipmentRequestDetails : ShipmentRequestDetails;

	ShipmentOfferingFilter? : ShippingOfferingFilter;
}

export interface GetEligibleShipmentServicesResponse
{
	payload? : GetEligibleShipmentServicesResult;

	errors? : ErrorList;
}

export interface GetEligibleShipmentServicesResult
{
	ShippingServiceList : ShippingServiceList;

	RejectedShippingServiceList? : RejectedShippingServiceList;

	TemporarilyUnavailableCarrierList? : TemporarilyUnavailableCarrierList;

	TermsAndConditionsNotAcceptedCarrierList? : TermsAndConditionsNotAcceptedCarrierList;
}

export interface GetShipmentResponse
{
	payload? : Shipment;

	errors? : ErrorList;
}

export type HazmatType = "None" | "LQHazmat";

export type InputTargetType = "SHIPMENT_LEVEL" | "ITEM_LEVEL";

export interface Item
{
	OrderItemId : OrderItemId;

	Quantity : ItemQuantity;

	ItemWeight? : Weight;

	ItemDescription? : ItemDescription;

	TransparencyCodeList? : TransparencyCodeList;

	ItemLevelSellerInputsList? : AdditionalSellerInputsList;
}

export type ItemDescription = string;

export interface ItemLevelFields
{
	Asin : string;

	AdditionalInputs : AdditionalInputsList;
}

export type ItemLevelFieldsList = ItemLevelFields[];

export type ItemList = Item[];

export type ItemQuantity = number;

export interface Label
{
	CustomTextForLabel? : CustomTextForLabel;

	Dimensions : LabelDimensions;

	FileContents : FileContents;

	LabelFormat? : LabelFormat;

	StandardIdForLabel? : StandardIdForLabel;
}

export interface LabelCustomization
{
	CustomTextForLabel? : CustomTextForLabel;

	StandardIdForLabel? : StandardIdForLabel;
}

export type LabelDimension = number;

export interface LabelDimensions
{
	Length : LabelDimension;

	Width : LabelDimension;

	Unit : UnitOfLength;
}

export type LabelFormat = "PDF" | "PNG" | "ZPL203" | "ZPL300" | "ShippingServiceDefault";

export type LabelFormatList = LabelFormat[];

export interface LabelFormatOption
{
	IncludePackingSlipWithLabel? : boolean;

	LabelFormat? : LabelFormat;
}

export interface LabelFormatOptionRequest
{
	IncludePackingSlipWithLabel? : boolean;
}

export interface Length
{
	value : number;

	unit : UnitOfLength;
}

export type OrderItemId = string;

export type PackageDimension = number;

export interface PackageDimensions
{
	Length? : PackageDimension;

	Width? : PackageDimension;

	Height? : PackageDimension;

	Unit? : UnitOfLength;

	PredefinedPackageDimensions? : PredefinedPackageDimensions;
}

export type PhoneNumber = string;

export type PostalCode = string;

export type PredefinedPackageDimensions = "FedEx_Box_10kg" | "FedEx_Box_25kg" | "FedEx_Box_Extra_Large_1" | "FedEx_Box_Extra_Large_2" | "FedEx_Box_Large_1" | "FedEx_Box_Large_2" | "FedEx_Box_Medium_1" | "FedEx_Box_Medium_2" | "FedEx_Box_Small_1" | "FedEx_Box_Small_2" | "FedEx_Envelope" | "FedEx_Padded_Pak" | "FedEx_Pak_1" | "FedEx_Pak_2" | "FedEx_Tube"
	| "FedEx_XL_Pak" | "UPS_Box_10kg" | "UPS_Box_25kg" | "UPS_Express_Box" | "UPS_Express_Box_Large" | "UPS_Express_Box_Medium" | "UPS_Express_Box_Small" | "UPS_Express_Envelope" | "UPS_Express_Hard_Pak" | "UPS_Express_Legal_Envelope" | "UPS_Express_Pak" | "UPS_Express_Tube" | "UPS_Laboratory_Pak" | "UPS_Pad_Pak" | "UPS_Pallet" | "USPS_Card" | "USPS_Flat"
	| "USPS_FlatRateCardboardEnvelope" | "USPS_FlatRateEnvelope" | "USPS_FlatRateGiftCardEnvelope" | "USPS_FlatRateLegalEnvelope" | "USPS_FlatRatePaddedEnvelope" | "USPS_FlatRateWindowEnvelope" | "USPS_LargeFlatRateBoardGameBox" | "USPS_LargeFlatRateBox" | "USPS_Letter" | "USPS_MediumFlatRateBox1" | "USPS_MediumFlatRateBox2" | "USPS_RegionalRateBoxA1"
	| "USPS_RegionalRateBoxA2" | "USPS_RegionalRateBoxB1" | "USPS_RegionalRateBoxB2" | "USPS_RegionalRateBoxC" | "USPS_SmallFlatRateBox" | "USPS_SmallFlatRateEnvelope";

export interface RejectedShippingService
{
	CarrierName : string;

	ShippingServiceName : string;

	ShippingServiceId : ShippingServiceIdentifier;

	RejectionReasonCode : string;

	RejectionReasonMessage : string;
}

export type RejectedShippingServiceList = RejectedShippingService[];

export type RestrictedSetValues = string[];

export interface SellerInputDefinition
{
	IsRequired : boolean;

	DataType : string;

	Constraints : Constraints;

	InputDisplayText : string;

	InputTarget? : InputTargetType;

	StoredValue : AdditionalSellerInput;

	RestrictedSetValues? : RestrictedSetValues;
}

export type SellerOrderId = string;

export interface Shipment
{
	ShipmentId : ShipmentId;

	AmazonOrderId : AmazonOrderId;

	SellerOrderId? : SellerOrderId;

	ItemList : ItemList;

	ShipFromAddress : Address;

	ShipToAddress : Address;

	PackageDimensions : PackageDimensions;

	Weight : Weight;

	Insurance : CurrencyAmount;

	ShippingService : ShippingService;

	Label : Label;

	Status : ShipmentStatus;

	TrackingId? : TrackingId;

	CreatedDate : Timestamp;

	LastUpdatedDate? : Timestamp;
}

export type ShipmentId = string;

export interface ShipmentRequestDetails
{
	AmazonOrderId : AmazonOrderId;

	SellerOrderId? : SellerOrderId;

	ItemList : ItemList;

	ShipFromAddress : Address;

	PackageDimensions : PackageDimensions;

	Weight : Weight;

	MustArriveByDate? : Timestamp;

	ShipDate? : Timestamp;

	ShippingServiceOptions : ShippingServiceOptions;

	LabelCustomization? : LabelCustomization;
}

export type ShipmentStatus = "Purchased" | "RefundPending" | "RefundRejected" | "RefundApplied";

export interface ShippingOfferingFilter
{
	IncludePackingSlipWithLabel? : boolean;

	IncludeComplexShippingOptions? : boolean;

	CarrierWillPickUp? : CarrierWillPickUpOption;

	DeliveryExperienceOption? : DeliveryExperienceOption;
}

export interface ShippingService
{
	ShippingServiceName : string;

	CarrierName : string;

	ShippingServiceId : ShippingServiceIdentifier;

	ShippingServiceOfferId : string;

	ShipDate : Timestamp;

	EarliestEstimatedDeliveryDate? : Timestamp;

	LatestEstimatedDeliveryDate? : Timestamp;

	Rate : CurrencyAmount;

	ShippingServiceOptions : ShippingServiceOptions;

	AvailableShippingServiceOptions? : AvailableShippingServiceOptions;

	AvailableLabelFormats? : LabelFormatList;

	AvailableFormatOptionsForLabel? : AvailableFormatOptionsForLabelList;

	RequiresAdditionalSellerInputs : boolean;
}

export type ShippingServiceIdentifier = string;

export type ShippingServiceList = ShippingService[];

export interface ShippingServiceOptions
{
	DeliveryExperience : DeliveryExperienceType;

	DeclaredValue? : CurrencyAmount;

	CarrierWillPickUp : boolean;

	CarrierWillPickUpOption? : CarrierWillPickUpOption;

	LabelFormat? : LabelFormat;
}

export type StandardIdForLabel = "AmazonOrderId";

export type StateOrProvinceCode = string;

export interface TemporarilyUnavailableCarrier
{
	CarrierName : string;
}

export type TemporarilyUnavailableCarrierList = TemporarilyUnavailableCarrier[];

export interface TermsAndConditionsNotAcceptedCarrier
{
	CarrierName : string;
}

export type TermsAndConditionsNotAcceptedCarrierList = TermsAndConditionsNotAcceptedCarrier[];

export type Timestamp = string;

export type TrackingId = string;

export type TransparencyCode = string;

export type TransparencyCodeList = TransparencyCode[];

export type UnitOfLength = "inches" | "centimeters";

export type UnitOfWeight = "oz" | "g";

export interface Weight
{
	Value : WeightValue;

	Unit : UnitOfWeight;
}

export type WeightValue = number;