//
// Imports
//

import { AmazonSellingPartnerAPIClient } from "./AmazonSellingPartnerAPIClient.js";
import { AmazonSellingPartnerAPIError } from "./AmazonSellingPartnerAPIError.js";

import
{
	ConfirmShipmentErrorResponse,
	ConfirmShipmentRequest,
	GetOrderResponse,
	GetOrderAddressResponse,
	GetOrderBuyerInfoResponse,
	GetOrderItemsQuery,
	GetOrderItemsResponse,
	GetOrderItemsBuyerInfoQuery,
	GetOrderItemsBuyerInfoResponse,
	GetOrderRegulatedInfoResponse,
	GetOrdersQuery,
	GetOrdersResponse,
	UpdateShipmentStatusErrorResponse,
	UpdateShipmentStatusRequest,
	UpdateVerificationStatusErrorResponse,
	UpdateVerificationStatusRequest,
} from "../types/orders-api/v0.js";

//
// Class
//

/** A client for v0 of the Orders endpoints of the Amazon Selling Partner API. */
export class AmazonSellingPartnerOrdersAPIClient
{
	private readonly amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient;

	constructor(amazonSellingPartnerApiClient : AmazonSellingPartnerAPIClient)
	{
		this.amazonSellingPartnerApiClient = amazonSellingPartnerApiClient;
	}

	async confirmShipment(orderId : string, payload : ConfirmShipmentRequest) : Promise<void>
	{
		// TODO: Check that orderId matches the 3-7-7 pattern

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/orders/v0/orders/" + orderId + "/shipmentConfirmation",
				body: JSON.stringify(payload),
			});

		// Note: This one can return no content so the check is different
		if (!response.ok)
		{
			const responseData = await response.json() as ConfirmShipmentErrorResponse;

			throw new AmazonSellingPartnerAPIError(response, responseData.errors ?? []);
		}
	}

	async getOrder(orderId : string) : Promise<GetOrderResponse>
	{
		// TODO: Check that orderId matches the 3-7-7 pattern

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/orders/v0/orders/" + orderId,
			});

		const responseData = await response.json() as GetOrderResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getOrderAddress(orderId : string) : Promise<GetOrderAddressResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/orders/v0/orders/" + orderId + "/address",
			});

		const responseData = await response.json() as GetOrderAddressResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getOrderBuyerInfo(orderId : string) : Promise<GetOrderBuyerInfoResponse>
	{
		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/orders/v0/orders/" + orderId + "/buyerInfo",
			});

		const responseData = await response.json() as GetOrderBuyerInfoResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getOrderItems(orderId : string, query? : GetOrderItemsQuery) : Promise<GetOrderItemsResponse>
	{
		// TODO: Check that orderId matches the 3-7-7 pattern

		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		if (query?.NextToken != null)
		{
			searchParams.set("NextToken", query.NextToken);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/orders/v0/orders/" + orderId + "/orderItems",
				searchParams,
			});

		const responseData = await response.json() as GetOrderItemsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getOrderItemsBuyerInfo(orderId : string, query? : GetOrderItemsBuyerInfoQuery) : Promise<GetOrderItemsBuyerInfoResponse>
	{
		// TODO: Check that orderId matches the 3-7-7 pattern

		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		if (query?.NextToken != null)
		{
			searchParams.set("NextToken", query.NextToken);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/orders/v0/orders/" + orderId + "/orderItems/buyerInfo",
				searchParams,
			});

		const responseData = await response.json() as GetOrderItemsResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getOrderRegulatedInfo(orderId : string) : Promise<GetOrderRegulatedInfoResponse>
	{
		// TODO: Check that orderId matches the 3-7-7 pattern

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/orders/v0/orders/" + orderId + "/regulatedInfo",
			});

		const responseData = await response.json() as GetOrderRegulatedInfoResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async getOrders(query : GetOrdersQuery) : Promise<GetOrdersResponse>
	{
		//
		// Build & Validate Search Params
		//

		const searchParams = new URLSearchParams();

		if (!("NextToken" in query))
		{
			if (query.CreatedAfter != null)
			{
				// TODO: validate that this is an ISO 8601 date

				searchParams.set("CreatedAfter", query.CreatedAfter);
			}

			if (query.CreatedBefore != null)
			{
				// TODO: validate that this is an ISO 8601 date

				searchParams.set("CreatedBefore", query.CreatedBefore);
			}

			if (query.LastUpdatedAfter != null)
			{
				// TODO: validate that this is an ISO 8601 date

				searchParams.set("LastUpdatedAfter", query.LastUpdatedAfter);
			}

			if (query.LastUpdatedBefore != null)
			{
				// TODO: validate that this is an ISO 8601 date

				searchParams.set("LastUpdatedBefore", query.LastUpdatedBefore);
			}

			if (query.OrderStatuses != null)
			{
				// TODO: Check length >1? They don't specify a min length,
				//  but I feel like they'd reject it

				searchParams.set("OrderStatuses", query.OrderStatuses.join(","));
			}

			if (query.MarketplaceIds != null)
			{
				// TODO: Check length >1? They don't specify a min length,
				//  but I feel like they'd reject it

				if (query.MarketplaceIds.length > 50)
				{
					throw new Error("MarketplaceIds cannot be longer than 50");
				}

				searchParams.set("MarketplaceIds", query.MarketplaceIds.join(","));
			}

			if (query.FulfillmentChannels != null)
			{
				// TODO: Check length >1? They don't specify a min length,
				//  but I feel like they'd reject it

				searchParams.set("FulfillmentChannels", query.FulfillmentChannels.join(","));
			}

			if (query.PaymentMethods != null)
			{
				// TODO: Check length >1? They don't specify a min length,
				//  but I feel like they'd reject it

				searchParams.set("PaymentMethods", query.PaymentMethods.join(","));
			}

			if (query.BuyerEmail != null)
			{
				searchParams.set("BuyerEmail", query.BuyerEmail);
			}

			if (query.SellerOrderId != null)
			{
				searchParams.set("SellerOrderId", query.SellerOrderId);
			}

			if (query.MaxResultsPerPage != null)
			{
				if (query.MaxResultsPerPage < 1 || query.MaxResultsPerPage > 100)
				{
					throw new Error("MaxResultsPerPage must be between 1 and 100");
				}

				searchParams.set("MaxResultsPerPage", query.MaxResultsPerPage.toString());
			}

			if (query.EasyShipShipmentStatuses != null)
			{
				// TODO: Check length >1? They don't specify a min length,
				//  but I feel like they'd reject it

				searchParams.set("EasyShipShipmentStatuses", query.EasyShipShipmentStatuses.join(","));
			}

			if (query.ElectronicInvoiceStatuses != null)
			{
				// TODO: Check length >1? They don't specify a min length,
				//  but I feel like they'd reject it

				searchParams.set("ElectronicInvoiceStatuses", query.ElectronicInvoiceStatuses.join(","));
			}

			if (query.AmazonOrderIds != null)
			{
				// TODO: Check that each order ID matches the 3-7-7 format?

				// TODO: Check length >1? They don't specify a min length,
				//  but I feel like they'd reject it

				searchParams.set("AmazonOrderIds", query.AmazonOrderIds.join(","));
			}

			if (query.ActualFulfillmentSupplySourceId != null)
			{
				searchParams.set("ActualFulfillmentSupplySourceId", query.ActualFulfillmentSupplySourceId);
			}

			if (query.IsISPU != null)
			{
				searchParams.set("IsISPU", query.IsISPU.toString());
			}

			if (query.StoreChainStoreId != null)
			{
				searchParams.set("StoreChainStoreId", query.StoreChainStoreId);
			}
		}
		else
		{
			searchParams.set("NextToken", query.NextToken);
		}

		//
		// Do Request
		//

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "GET",
				path: "/orders/v0/orders",
				searchParams,
			});

		const responseData = await response.json() as GetOrdersResponse;

		if ("errors" in responseData)
		{
			throw new AmazonSellingPartnerAPIError(response, responseData.errors);
		}

		return responseData;
	}

	async updateShipmentStatus(orderId : string, payload : UpdateShipmentStatusRequest) : Promise<void>
	{
		// TODO: Check that orderId matches the 3-7-7 pattern

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "POST",
				path: "/orders/v0/orders/" + orderId + "/shipment",
				body: JSON.stringify(payload),
			});

		// Note: This one can return no content so the check is different
		if (!response.ok)
		{
			const responseData = await response.json() as UpdateShipmentStatusErrorResponse;

			throw new AmazonSellingPartnerAPIError(response, responseData.errors ?? []);
		}
	}

	async updateVerificationStatus(orderId : string, payload : UpdateVerificationStatusRequest) : Promise<void>
	{
		// TODO: Check that orderId matches the 3-7-7 pattern

		const response = await this.amazonSellingPartnerApiClient.request(
			{
				method: "PATCH",
				path: "/orders/v0/orders/" + orderId + "/regulatedInfo",
				body: JSON.stringify(payload),
			});

		// Note: This one can return no content so the check is different
		if (!response.ok)
		{
			const responseData = await response.json() as UpdateVerificationStatusErrorResponse;

			throw new AmazonSellingPartnerAPIError(response, responseData.errors ?? []);
		}
	}
}