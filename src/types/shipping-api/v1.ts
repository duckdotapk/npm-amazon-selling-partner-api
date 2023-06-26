//
// Amazon Selling Partner API > Shipping API > v1
//

export interface AcceptedRate
{
	totalCharge? : Currency;

	billedWeight? : Weight;

	serviceType? : ServiceType;

	promise? : ShippingPromiseSet;
}

export interface Account
{
	accountId : AccountId;
}

export type AccountId = string;

export interface Address
{
	name : string;

	addressLine1 : string;

	addressLine2? : string;

	addressLine3? : string;

	stateOrRegion : StateOrRegion;

	city : City;

	countryCode : CountryCode;

	postalCode : PostalCode;

	email? : string;

	copyEmails? : string[];

	phoneNumber? : string;
}

export interface CancelShipmentResponse
{
	errors? : ErrorList;
}

export type City = string;

export type ClientReferenceId = string;

export interface Container
{
	containerType : ContainerType;

	containerReferenceId : ContainerReferenceId;

	value : Currency;

	dimensions : Dimensions;

	items : ContainerItem[];

	weight : Weight;
}

export interface ContainerItem
{
	quantity : number;

	unitPrice : Currency;

	unitWeight : Weight;

	title : string;
}

export type ContainerList = Container[];

export type ContainerReferenceId = string;

export interface ContainerSpecification
{
	dimensions : Dimensions;

	weight : Weight;
}

export type ContainerSpecificationList = ContainerSpecification[];

export type ContainerType = "PACKAGE";

export type CountryCode = string;

export interface CreateShipmentRequest
{
	clientReferenceId : ClientReferenceId;

	shipTo : Address;

	shipFrom : Address;

	containers : ContainerList;
}

export interface CreateShipmentResponse
{
	payload? : CreateShipmentResult;

	errors? : ErrorList;
}

export interface CreateShipmentResult
{
	shipmentId : ShipmentId;

	eligibleRates : RateList;
}

export interface Currency
{
	value : number;

	unit : string;
}

export interface Dimensions
{
	length : number;

	width : number;

	height : number;

	unit : Unit;
}

export interface Error
{
	code : string;

	message : string;

	details? : string;
}

export type ErrorList = Error[];

export interface Event
{
	eventCode : EventCode;

	eventTime : string;

	location? : Location;
}

export type EventCode = string;

export type EventList = Event[];

export interface GetAccountResponse
{
	payload? : Account;

	errors? : ErrorList;
}

export interface GetRatesRequest
{
	shipTo : Address;

	shipFrom : Address;

	serviceTypes : ServiceTypeList;

	shipDate? : string;

	containerSpecifications : ContainerSpecificationList;
}

export interface GetRatesResponse
{
	payload? : GetRatesResult;

	errors? : ErrorList;
}

export interface GetRatesResult
{
	serviceRates : ServiceRateList;
}

export interface GetShipmentResponse
{
	payload? : Shipment;

	errors? : ErrorList;
}

export interface GetTrackingInformationResponse
{
	payload? : TrackingInformation;

	errors? : ErrorList;
}

export interface Label
{
	labelStream? : LabelStream;

	labelSpecification? : LabelSpecification;
}

export type LabelFormat = "PNG";

export type LabelResultList = LabelResult[];

export interface LabelResult
{
	containerReferenceId? : ContainerReferenceId;

	trackingId : string;

	label? : Label;
}

export interface LabelSpecification
{
	labelFormat : LabelFormat;

	labelStockSize : LabelStockSize;
}

export type LabelStockSize = "4x6";

export type LabelStream = string;

export interface Location
{
	stateOrRegion? : StateOrRegion;

	city? : City;

	countryCode? : CountryCode;

	postalCode? : PostalCode;
}

export interface Party
{
	accountId : AccountId;
}

export type PostalCode = string;

export type PromisedDeliveryDate = string;

export interface PurchaseLabelsRequest
{
	rateId : RateId;

	labelSpecification : LabelSpecification;
}

export interface PurchaseLabelsResponse
{
	payload? : PurchaseLabelsResult;

	errors? : ErrorList;
}

export interface PurchaseLabelsResult
{
	shipmentId : ShipmentId;

	clientReferenceId? : ClientReferenceId;

	acceptedRate : AcceptedRate;

	labelResults : LabelResultList;
}

export interface PurchaseShipmentRequest
{
	clientReferenceId : ClientReferenceId;

	shipTo : Address;

	shipFrom : Address;

	shipDate? : string;

	serviceType : ServiceType;

	containers : ContainerList;

	labelSpecification : LabelSpecification;
}

export interface PurchaseShipmentResponse
{
	payload? : PurchaseShipmentResult;

	errors? : ErrorList;
}

export interface PurchaseShipmentResult
{
	shipmentId : ShipmentId;

	serviceRate : ServiceRate;

	labelResults : LabelResultList;
}

export interface Rate
{
	rateId? : string;

	totalCharge? : Currency;

	billedWeight? : Weight;

	expirationTime? : string;

	serviceType? : ServiceType;

	promise? : ShippingPromiseSet;
}

export type RateId = string;

export type RateList = Rate[];

export interface RetrieveShippingLabelRequest
{
	labelSpecification : LabelSpecification;
}

export interface RetrieveShippingLabelResponse
{
	payload? : RetrieveShippingLabelResult;

	errors? : ErrorList;
}

export interface RetrieveShippingLabelResult
{
	labelStream : LabelStream;

	labelSpecification : LabelSpecification;
}

export interface ServiceRate
{
	totalCharge : Currency;

	billableWeight : Weight;

	serviceType : ServiceType;

	promise : ShippingPromiseSet;
}

export type ServiceRateList = ServiceRate[];

export type ServiceType = "Amazon Shipping Ground" | "Amazon Shipping Standard" | "Amazon Shipping Premium";

export type ServiceTypeList = ServiceType[];

export interface Shipment
{
	shipmentId : ShipmentId;

	clientReferenceId : ClientReferenceId;

	shipFrom : Address;

	shipTo : Address;

	acceptedRate? : AcceptedRate;

	shipper? : Party;

	containers : ContainerList;
}

export type ShipmentId = string;

export interface ShippingPromiseSet
{
	deliveryWindow? : TimeRange;

	receiveWindow? : TimeRange;
}

export type StateOrRegion = string;

export interface TimeRange
{
	start? : string;

	end? : string;
}

export type TrackingId = string;

export interface TrackingInformation
{
	trackingId : TrackingId;

	summary : TrackingSummary;

	promisedDeliveryDate : PromisedDeliveryDate;

	eventHistory : EventList;
}

export interface TrackingSummary
{
	status? : string;
}

export type Unit = "g" | "kg" | "oz" | "lb";

export interface Weight
{
	unit : Unit;

	value : number;
}