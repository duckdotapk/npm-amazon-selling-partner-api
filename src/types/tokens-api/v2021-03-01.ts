//
// Amazon Selling Partner API > Tokens API > v2021-03-01
//

export interface CreateRestrictedDataTokenRequest
{
	targetApplication? : string;

	restrictedResources : RestrictedResource[];
}

export interface CreateRestrictedDataTokenResponse
{
	restrictedDataToken : string;

	expiresIn : number;
}

export interface Error
{
	code : string;

	message : string;

	details? : string;
}

export interface ErrorList
{
	// Note: This is labeled as "optional" in the docs but that makes NO sense.
	errors : Error[];
}

export type Method = "GET" | "PUT" | "POST" | "DELETE";

export interface RestrictedResource
{
	method : Method;

	path : string;

	dataElements? : RestrictedResourceDataElement[];
}

// Note: Not a type in the docs but I think it's good to have it here.
export type RestrictedResourceDataElement = "buyerInfo" | "shippingAddress" | "buyerTaxInformation";