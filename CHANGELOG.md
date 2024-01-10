## Version 4.0.0

* Replaced `accessToken` and `accessTokenExpiresTimestamp` on `AmazonSellingPartnerAPIClient` with an array of `AmazonSellingPartnerAPIClientAccessToken` objects.
	* This allows you to add a temporary restricted data token to the client and have it automatically used when making subsequent requests.
* Renamed `getAccessToken` to `getCurrentAccessToken` from `AmazonSellingPartnerAPIClient`.
	* It also now returns an `AmazonSellingPartnerAPIClientAccessToken` object instead of a string.
* Added `addAccessToken` and `removeAccessToken` methods to `AmazonSellingPartnerAPIClient`.

## Version 3.0.0

* Everything is now public.
* Renamed `AccessTokenResponse` to `AmazonSellingPartnerAPIClientAccessTokenResponse`.
* Renamed `Options` to `AmazonSellingPartnerAPIClientOptions`.
* Renamed `RequestOptions` to `AmazonSellingPartnerAPIClientRequestOptions`.

## Version 2.4.3
Fixing `OrdersAPI.ConfirmShipmentRequest.codCollectionMethod` not being marked as optional.

## Version 2.4.2
Updating README. No code changes.

## Version 2.4.1
Fixed `dataElements` being required on `TokensAPI.RestrictedResource`.

## Version 2.4.0

* Added an `accessToken` property to the `AmazonSellingPartnerAPIClient` class' `RequestOptions`.
	* This allows you to override the access token when making a request.
	* This is useful for using a Restricted Data Token for certain endpoints.
* Added the `AmazonSellingPartnerTokensAPIClient` class which provides API coverage for v2021-03-01 of the [Tokens API](https://developer-docs.amazon.com/sp-api/docs/tokens-api-v2021-03-01-reference).

## Version 2.3.3
Fixing `OrdersAPI.GetOrdersQuery.MarketplaceIds` being optional.

## Version 2.3.2
Fixed an issue where `formatDate` was not exported and also not imported within `AmazonSellingPartnerAPIClient`.

I have no idea how NOTHING caught this error.

## Version 2.3.1
Changed the package type to "module" like it was supposed to be all along.

## Version 2.3.0
Added the `AmazonSellingPartnerUploadsAPIClient` class which provides API coverage for v2020-11-01 of the [Uploads API](https://developer-docs.amazon.com/sp-api/docs/uploads-api-reference).

## Version 2.2.1
Updating README. No code changes.

## Version 2.2.0
Added the `AmazonSellingPartnerMerchantFulfillmentAPIClient` class which provides API coverage for v0 of the [Merchant Fulfillment API](https://developer-docs.amazon.com/sp-api/docs/merchant-fulfillment-api-v0-reference).

## Version 2.1.2

* Tweaked the package's tags.
* Fixed export for the `AmazonSellingPartnerOrdersAPIClient` class.

## Version 2.1.1
Changes to the package file, documentation and ignore files. No code changes.

## Version 2.1.0
Added the `AmazonSellingPartnerAPlusContentAPIClient` class which provides API coverage for v2020-11-01 of the [A+ Content API](https://developer-docs.amazon.com/sp-api/docs/selling-partner-api-for-a-content-management).

## Version 2.0.1
Removed `luxon` as a dependency.

I was using it because the project this was originally a component of had it but its so sparsely used in this code that I believe it is better to just use native Dates.

## Version 2.0.0

* **[Breaking Change]** Flattened the structure of the `types` folder a bit, removing the redundant `amazon-selling-partner-api` folder.
* Each file in the `types` folder is also now exported as an object to simplify imports.
* Fixed the name of the file for the `AmazonSellingParterOrdersAPIClient` class.

## Version 1.0.0
Initial release.