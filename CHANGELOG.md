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