//
// Amazon Selling Partner API > Orders API > v0
//

export interface Address
{
	Name : string;

	AddressLine1? : string;

	AddressLine2? : string;

	AddressLine3? : string;

	City? : string;

	County? : string;

	District? : string;

	StateOrRegion? : string;

	Municipality? : string;

	PostalCode? : string;

	CountryCode? : string;

	Phone? : string;

	AddressType? : AddressType;
}

export type AddressType = "Residential" | "Commercial";

export interface AutomatedShippingSettings
{
	HasAutomatedShippingSettings? : boolean;

	AutomatedCarrier? : string;

	AutomatedShipMethod? : string;
}

export interface BusinessHours
{
	DayOfWeek? : DayOfWeek;

	OpenInterval? : OpenInterval[];
}

export interface BuyerCustomizedInfoDetail
{
	CustomizedURL? : string;
}

export interface BuyerInfo
{
	BuyerEmail? : string;

	BuyerName? : string;

	BuyerCounty? : string;

	BuyerTaxInfo? : BuyerTaxInfo;

	PurchaseOrderNumber? : string;
}

export type BuyerInvoicePreference = "INDIVIDUAL" | "BUSINESS";

export interface BuyerRequestedCancel
{
	IsBuyerRequestedCancel? : boolean;

	BuyerCancelReason? : string;
}

export interface BuyerTaxInfo
{
	CompanyLegalName? : string;

	TaxingRegion? : string;

	TaxClassifications? : TaxClassification[];
}

export interface BuyerTaxInformation
{
	BuyerLegalCompanyName? : string;

	BuyerBusinessAddress? : string;

	BuyerTaxRegistrationId? : string;

	BuyerTaxOffice? : string;
}

export type CodCollectionMethod = "DirectPayment";

export type ConditionId = "New" | "Used" | "Collectible" | "Refurbished" | "Preorder" | "Club";

export type ConditionSubtypeId = "New" | "Mint" | "Very Good" | "Good" | "Acceptable" | "Poor" | "Club" | "OEM" | "Warranty" | "Refurbished Warranty" | "Refurbished" | "Open Box" | "Any" | "Other";

export interface ConfirmShipmentErrorResponse
{
	errors? : ErrorList;
}

export interface ConfirmShipmentOrderItem
{
	orderItemId : string;

	quantity : number;

	transparencyCodes? : TransparencyCodeList;
}

export type ConfirmShipmentOrderItemsList = ConfirmShipmentOrderItem[];

export interface ConfirmShipmentRequest
{
	packageDetail : PackageDetail;

	codCollectionMethod : CodCollectionMethod;

	marketplaceId : MarketplaceId;
}

export type DayOfWeek = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";

export type DeemedResellerCategory = "IOSS" | "UOSS";

export interface DeliveryPreferences
{
	DropOffLocation? : string;

	PreferredDeliveryTime? : PreferredDeliveryTime;

	OtherAttributes : OtherDeliveryAttributes[];

	AddressInstructions? : string;
}

export type EasyShipShipmentStatus = "PendingSchedule" | "PendingPickUp" | "PendingDropOff" | "LabelCanceled" | "PickedUp" | "DroppedOff" | "AtOriginFC" | "AtDestinationFC" | "Delivered" | "RejectedByBuyer" | "Undeliverable" | "ReturningToSeller" | "ReturnedToSeller" | "Lost" | "OutForDelivery" | "Damaged";

export type ElectronicInvoiceStatus = "NotRequired" | "NotFound" | "Processing" | "Errored" | "Accepted";

export interface Error
{
	code : string;

	message : string;

	details? : string;
}

export type ErrorList = Error[];

export interface ExceptionDates
{
	ExceptionDate? : string;

	IsOpen? : boolean;

	OpenIntervals? : OpenInterval[];
}

export type FieldType = "Text" | "FileAttachment";

export type FulfillmentChannel = "MFN" | "AFN";

export interface FulfillmentInstruction
{
	FulfillmentSupplySourceId? : string;
}

export interface GetOrderResponse
{
	payload? : Order;

	errors? : ErrorList;
}

export interface GetOrderAddressResponse
{
	payload? : OrderAddress;

	errors? : ErrorList;
}

export interface GetOrderBuyerInfoResponse
{
	payload? : OrderBuyerInfo;

	errors? : ErrorList;
}

export interface GetOrderItemsQuery
{
	// Note: This is TECHNICALLY option, but it's the only query parameter so...
	NextToken : string;
}

export interface GetOrderItemsResponse
{
	payload? : OrderItemsList;

	errors? : ErrorList;
}

export interface GetOrderItemsBuyerInfoQuery
{
	// Note: This is TECHNICALLY option, but it's the only query parameter so...
	NextToken : string;
}

export interface GetOrderItemsBuyerInfoResponse
{
	payload? : OrderItemsBuyerInfoList;

	errors? : ErrorList;
}

export interface GetOrderRegulatedInfoResponse
{
	payload? : OrderRegulatedInfo;

	errors? : ErrorList;
}

export type GetOrdersQuery = GetOrdersQueryInitial | GetOrdersQueryNext;

export interface GetOrdersQueryInitial
{
	CreatedAfter? : string;

	CreatedBefore? : string;

	LastUpdatedAfter? : string;

	LastUpdatedBefore? : string;

	OrderStatuses? : OrderStatus[];

	MarketplaceIds? : string[];

	FulfillmentChannels? : FulfillmentChannel[];

	PaymentMethods? : PaymentMethod[];

	BuyerEmail? : string;

	// TODO: Maybe a separate interface to account for this:
	//  "If SellerOrderId is specified, then FulfillmentChannels, OrderStatuses, PaymentMethod,
	//   LastUpdatedAfter, LastUpdatedBefore, and BuyerEmail cannot be specified."
	SellerOrderId? : string;

	MaxResultsPerPage? : number;

	EasyShipShipmentStatuses? : EasyShipShipmentStatus[];

	ElectronicInvoiceStatuses? : ElectronicInvoiceStatus[];

	AmazonOrderIds? : string[];

	ActualFulfillmentSupplySourceId? : string;

	IsISPU? : boolean;

	StoreChainStoreId? : string;
}

export interface GetOrdersQueryNext
{
	NextToken : string;
}

export interface GetOrdersResponse
{
	payload? : OrdersList;

	errors? : ErrorList;
}

export interface ItemBuyerInfo
{
	BuyerCustomizedInfo? : BuyerCustomizedInfoDetail;

	GiftWrapPrice? : Money;

	GiftWrapTax? : Money;

	GiftMessageText? : string;

	GiftWrapLevel? : string;
}

export type MarketplaceId = string;

export interface MarketplaceTaxInfo
{
	TaxClassifications? : TaxClassification[];
}

export type Model = "MarketplaceFacilitator";

export interface Money
{
	CurrencyCode? : string;

	Amount? : string;
}

export interface OpenInterval
{
	StartTime? : OpenTimeInterval;

	EndTime? : OpenTimeInterval;
}

export interface OpenTimeInterval
{
	Hour? : number;

	Minute? : number;
}

export interface Order
{
	AmazonOrderId : string;

	SellerOrderId? : string;

	PurchaseDate : string;

	LastUpdateDate : string;

	OrderStatus : OrderStatus;

	FulfillmentChannel : FulfillmentChannel;

	SalesChannel? : string;

	OrderChannel? : string;

	ShipServiceLevel? : string;

	OrderTotal? : Money;

	NumberOfItemsShipped? : number;

	NumberOfItemsUnshipped? : number;

	PaymentExecutionDetail? : PaymentExecutionDetailItemList;

	PaymentMethod? : PaymentMethod;

	PaymentMethodDetails? : PaymentMethodDetailItemList;

	MarketplaceId? : string;

	ShipmentServiceLevelCategory? : ShipmentServiceLevelCategory;

	EasyShipShipmentStatus? : EasyShipShipmentStatus;

	CbaDisplayableShippingLabel? : string;

	OrderType? : OrderType;

	EarliestShipDate? : string;

	LatestShipDate? : string;

	EarliestDeliveryDate? : string;

	LatestDeliveryDate? : string;

	IsBusinessOrder? : boolean;

	IsPrime? : boolean;

	IsPremiumOrder? : boolean;

	IsGlobalExpressEnabled? : boolean;

	ReplacedOrderId? : string;

	IsReplacementOrder? : boolean;

	PromiseResponseDueDate? : string;

	IsEstimatedShipDateSet? : boolean;

	IsSoldByAB? : boolean;

	IsIBA? : boolean;

	DefaultShipFromLocationAddress? : Address;

	BuyerInvoicePreference? : BuyerInvoicePreference;

	BuyerTaxInformation? : BuyerTaxInformation;

	FulfillmentInstruction? : FulfillmentInstruction;

	IsISPU? : boolean;

	IsAccessPointOrder? : boolean;

	MarketplaceTaxInfo? : MarketplaceTaxInfo;

	SellerDisplayName? : string;

	ShippingAddress? : Address;

	BuyerInfo? : BuyerInfo;

	AutomatedShippingSettings? : AutomatedShippingSettings;

	HasRegulatedItems? : boolean;

	ElectronicInvoiceStatus? : ElectronicInvoiceStatus;
}

export interface OrderAddress
{
	AmazonOrderId : string;

	BuyerCompanyName? : string;

	ShippingAddress? : Address;

	DeliveryPreferences? : DeliveryPreferences;
}

export interface OrderBuyerInfo
{
	AmazonOrderId : string;

	BuyerEmail? : string;

	BuyerName? : string;

	BuyerCounty? : string;

	BuyerTaxInfo? : BuyerTaxInfo;

	PurchaseOrderNumber? : string;
}

export interface OrderItem
{
	ASIN : string;

	SellerSKU? : string;

	OrderItemId : string;

	Title? : string;

	QuantityOrdered : number;

	QuantityShipped? : number;

	ProductInfo? : ProductInfoDetail;

	PointsGranted? : PointsGrantedDetail;

	ItemPrice? : Money;

	ShippingPrice? : Money;

	ItemTax? : Money;

	ShippingTax? : Money;

	ShippingDiscount? : Money;

	ShippingDiscountTax? : Money;

	PromotionDiscount? : Money;

	PromotionDiscountTax? : Money;

	PromotionIds? : PromotionIdList;

	CODFee? : Money;

	CodFeeDiscount? : Money;

	IsGift? : boolean;

	ConditionNote? : string;

	ConditionId? : ConditionId;

	ConditionSubtypeId? : ConditionSubtypeId;

	ScheduledDeliveryStartDate? : string;

	ScheduledDeliveryEndDate? : string;

	PriceDesignation? : PriceDesignation;

	TaxCollection? : TaxCollection;

	SerialNumberRequired? : boolean;

	IsTransparency? : boolean;

	IossNumber? : string;

	StoreChainStoreId? : string;

	DeemedResellerCategory? : DeemedResellerCategory;

	BuyerInfo? : ItemBuyerInfo;

	BuyerRequestedCancel? : BuyerRequestedCancel;

	SerialNumbers? : string[];
}

export type OrderItemList = OrderItem[];

export interface OrderItemsList
{
	OrderItems : OrderItemList;

	NextToken? : string;

	AmazonOrderId : string;
}

export interface OrderItemBuyerInfo
{
	OrderItemId : string;

	BuyerCustomizedInfo? : BuyerCustomizedInfoDetail;

	GiftWrapPrice? : Money;

	GiftWrapTax? : Money;

	GiftMessageText? : string;

	GiftWrapLevel? : string;
}

export type OrderItemBuyerInfoList = OrderItemBuyerInfo[];

export interface OrderItemsBuyerInfoList
{
	OrderItems : OrderItemBuyerInfoList;

	NextToken? : string;

	AmazonOrderId : string;
}

/**
 * Note: This is called "OrderItems" on the docs which is confusing.
 * I renamed it because it's specific to this operation.
 */
export type OrderItemsForUpdateShipmentStatus = OrderItemForUpdateShipmentStatus[];

/**
 * Note: This is ALSO called "OrderItems" on the docs which is EVEN MORE confusing.
 * I renamed it because it's specific to this operation.
 */
export interface OrderItemForUpdateShipmentStatus
{
	orderItemId? : string;

	quantity? : number;
}

export type OrderList = Order[];

export interface OrdersList
{
	Orders : OrderList;

	NextToken? : string;

	LastUpdatedBefore? : string;

	CreatedBefore? : string;
}

export interface OrderRegulatedInfo
{
	AmazonOrderId : string;

	RegulatedInformation : RegulatedInformation;

	RequiresDosageLabel : boolean;

	RegulatedOrderVerificationStatus : RegulatedOrderVerificationStatus;
}

export type OrderStatus = "Pending" | "Unshipped" | "PartiallyShipped" | "Shipped" | "Canceled" | "Unfulfillable" | "InvoiceUnconfirmed" | "PendingAvailability";

export type OrderType = "StandardOrder" | "LongLeadTimeOrder" | "Preorder" | "BackOrder" | "SourcingOnDemandOrder";

export type OtherDeliveryAttributes = "HAS_ACCESS_POINT" | "PALLET_ENABLED" | "PALLET_DISABLED";

export interface PackageDetail
{
	packageReferenceId : PackageReferenceId;

	carrierCode : string;

	carrierName? : string;

	shippingMethod? : string;

	trackingNumber : string;

	shipDate : string;

	shipFromSupplySourceId? : string;

	orderItems : ConfirmShipmentOrderItemsList;
}

export type PackageReferenceId = string;

export interface PaymentExecutionDetailItem
{
	Payment : Money;

	PaymentMethod : PaymentMethodCOD;
}

export type PaymentExecutionDetailItemList = PaymentExecutionDetailItem[];

export type PaymentMethod = "COD" | "CVS" | "Other";

export type PaymentMethodCOD = "COD" | "GC" | "PointsAccount";

export type PaymentMethodDetailItemList = string[];

export interface PointsGrantedDetail
{
	PointsNumber? : number;

	PointsMonetaryValue? : Money;
}

export interface PreferredDeliveryTime
{
	BusinessHours? : BusinessHours[];

	ExceptionDates? : ExceptionDates[];
}

export type PriceDesignation = "BusinessPrice";

export interface ProductInfoDetail
{
	NumberOfItems? : number;
}

export type PromotionIdList = string[];

export interface RegulatedInformation
{
	Fields : RegulatedInformationField[];
}

export interface RegulatedInformationField
{
	FieldId : string;

	FieldLabel : string;

	FieldType : FieldType;

	FieldValue : string;
}

export interface RegulatedOrderVerificationStatus
{
	Status : VerificationStatus;

	RequiresMerchantAction : boolean;

	ValidRejectionReasons : RejectionReason[];

	RejectionReason? : RejectionReason;

	ReviewDate? : string;

	ExternalReviewerId? : string;
}

export interface RejectionReason
{
	RejectionReasonId : string;

	RejectionReasonDescription : string;
}

export type ResponsibleParty = "Amazon Services, Inc.";

export type ShipmentServiceLevelCategory = "Expedited" | "FreeEconomy" | "NextDay" | "SameDay" | "SecondDay" | "Scheduled" | "Standard";

export type ShipmentStatus = "ReadyForPickup" | "PickedUp" | "RefusedPickup";

export interface TaxClassification
{
	Name? : string;

	Value? : string;
}

export interface TaxCollection
{
	Model? : Model;

	ResponsibleParty? : ResponsibleParty;
}

export type TransparencyCode = string;

export type TransparencyCodeList = TransparencyCode[];

export interface UpdateShipmentStatusErrorResponse
{
	errors? : ErrorList;
}

export interface UpdateShipmentStatusRequest
{
	marketplaceId : MarketplaceId;

	shipmentStatus : ShipmentStatus;

	orderItems : OrderItemsForUpdateShipmentStatus;
}

export interface UpdateVerificationStatusErrorResponse
{
	errors? : ErrorList;
}

export interface UpdateVerificationStatusRequest
{
	regulatedOrderVerificationStatus : UpdateVerificationStatusRequestBody;
}

export interface UpdateVerificationStatusRequestBody
{
	status : VerificationStatus;

	externalReviewerId : string;

	rejectionReasonId? : string;
}

export type VerificationStatus = "Pending" | "Approved" | "Rejected" | "Expired" | "Cancelled";