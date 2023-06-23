//
// Imports
//

import { AmazonSellingPartnerAPIClient } from "./AmazonSellingPartnerAPIClient.js";
import { AmazonSellingPartnerAPIError } from "./AmazonSellingPartnerAPIError.js";

import
{
	CancelShipmentResponse,
	CreateShipmentRequest,
	CreateShipmentResponse,
	GetAccountResponse,
	GetRatesRequest,
	GetRatesResponse,
	GetShipmentResponse,
	GetTrackingInformationResponse,
	PurchaseLabelsRequest,
	PurchaseLabelsResponse,
	PurchaseShipmentRequest,
	PurchaseShipmentResponse,
	RetrieveShippingLabelRequest,
	RetrieveShippingLabelResponse,
} from "../types/amazon-selling-partner-api/shipping-api/v1.js";

//
// Class
//

/** A client for v1 of the Shipping endpoints of the Amazon Selling Partner API. */
export class AmazonSellingPartnerShippingAPIClient
{
	private readonly amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient;

	constructor(amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient)
	{
		this.amazonSellingPartnerApiClient = amazonSellingPartnerApiClient;
	}

	async cancelShipment(shipmentId : string) : Promise<CancelShipmentResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/shipping/v1/shipments/" + shipmentId + "/cancel",
			});

		const responseData = await response.json() as CancelShipmentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async createShipment(body : CreateShipmentRequest) : Promise<CreateShipmentResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/shipping/v1/shipments",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as CreateShipmentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getAccount() : Promise<GetAccountResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/shipping/v1/account",
			});

		const responseData = await response.json() as GetAccountResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getRates(body : GetRatesRequest) : Promise<GetRatesResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/shipping/v1/rates",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as GetRatesResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getShipment(shipmentId : string) : Promise<GetShipmentResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/shipping/v1/shipments/" + shipmentId,
			});

		const responseData = await response.json() as GetShipmentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getTrackingInformation(trackingId : string) : Promise<GetTrackingInformationResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/shipping/v1/tracking/" + trackingId,
			});

		const responseData = await response.json() as GetTrackingInformationResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async purchaseLabels(shipmentId : string, body : PurchaseLabelsRequest) : Promise<PurchaseLabelsResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/shipping/v1/shipments/" + shipmentId + "/purchaseLabels",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as PurchaseLabelsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async purchaseShipment(body : PurchaseShipmentRequest) : Promise<PurchaseShipmentResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/shipping/v1/purchaseShipment",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as PurchaseShipmentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async retrieveShippingLabel(shipmentId : string, trackingId : string, body : RetrieveShippingLabelRequest) : Promise<RetrieveShippingLabelResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/shipping/v1/shipments/" + shipmentId + "/containers/" + trackingId + "/label",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as RetrieveShippingLabelResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}
}