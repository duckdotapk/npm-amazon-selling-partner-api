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
	GetAdditionalSellerInputsRequest,
	GetAdditionalSellerInputsResponse,
	GetEligibleShipmentServicesRequest,
	GetEligibleShipmentServicesResponse,
	GetShipmentResponse,
} from "../types/merchant-fulfillment-api/v0.js";

//
// Class
//

/** A client for v0 of the Merchant Fulfillment endpoints of the Amazon Selling Partner API. */
export class AmazonSellingPartnerMerchantFulfillmentAPIClient
{
	amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient;

	constructor(amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient)
	{
		this.amazonSellingPartnerApiClient = amazonSellingPartnerApiClient;
	}

	async cancelShipment(shipmentId : string) : Promise<CancelShipmentResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "DELETE",
				path: "/mfn/v0/shipments/" + shipmentId,
			});

		const responseData = await response.json() as CancelShipmentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async cancelShipmentOld(shipmentId : string) : Promise<CancelShipmentResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/mfn/v0/shipments/" + shipmentId + "/cancel",
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
				path: "/mfn/v0/shipments",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as CreateShipmentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getAdditionalSellerInputs(body : GetAdditionalSellerInputsRequest) : Promise<GetAdditionalSellerInputsResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/mfn/v0/additionalSellerInputs",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as GetAdditionalSellerInputsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getAdditionalSellerInputsOld(body : GetAdditionalSellerInputsRequest) : Promise<GetAdditionalSellerInputsResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/mfn/v0/sellerInputs",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as GetAdditionalSellerInputsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getEligibleShipmentServices(body : GetEligibleShipmentServicesRequest) : Promise<GetEligibleShipmentServicesResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/mfn/v0/eligibleShippingServices",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as GetEligibleShipmentServicesResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getEligibleShipmentServicesOld(body : GetEligibleShipmentServicesRequest) : Promise<GetEligibleShipmentServicesResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/mfn/v0/eligibleServices",
				body: JSON.stringify(body),
			});

		const responseData = await response.json() as GetEligibleShipmentServicesResponse;

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
				path: "/mfn/v0/shipments/" + shipmentId,
			});

		const responseData = await response.json() as GetShipmentResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}
}