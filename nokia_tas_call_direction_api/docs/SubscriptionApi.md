# NokiaTasCallDirectionApi.SubscriptionApi

All URIs are relative to *http://mn.developer.nokia.com/tasseeAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](SubscriptionApi.md#createSubscription) | **POST** /callnotification/v1/subscriptions/callDirection | Create a call direction subscription
[**deleteSubscription**](SubscriptionApi.md#deleteSubscription) | **DELETE** /callnotification/v1/subscriptions/callDirection/subs | Delete a call direction subscription
[**getSubscription**](SubscriptionApi.md#getSubscription) | **GET** /callnotification/v1/subscriptions/callDirection/subs | Read a call direction subscription


<a name="createSubscription"></a>
# **createSubscription**
> CallDirectionSubscriptionResponse createSubscription(callDirectionSubscription)

Create a call direction subscription



### Example
```javascript
var NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');
var defaultClient = NokiaTasCallDirectionApi.ApiClient.default;

// Configure API key authorization: nokia_mn_api_auth
var nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth'];
nokia_mn_api_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//nokia_mn_api_auth.apiKeyPrefix = 'Token';

var apiInstance = new NokiaTasCallDirectionApi.SubscriptionApi();

var callDirectionSubscription = new NokiaTasCallDirectionApi.CallDirectionSubscriptionWrapper(); // CallDirectionSubscriptionWrapper | Call direction subscription object that needs to be sent to the Nokia TAS


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubscription(callDirectionSubscription, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callDirectionSubscription** | [**CallDirectionSubscriptionWrapper**](CallDirectionSubscriptionWrapper.md)| Call direction subscription object that needs to be sent to the Nokia TAS | 

### Return type

[**CallDirectionSubscriptionResponse**](CallDirectionSubscriptionResponse.md)

### Authorization

[nokia_mn_api_auth](../README.md#nokia_mn_api_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

<a name="deleteSubscription"></a>
# **deleteSubscription**
> deleteSubscription(id, addr)

Delete a call direction subscription



### Example
```javascript
var NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');
var defaultClient = NokiaTasCallDirectionApi.ApiClient.default;

// Configure API key authorization: nokia_mn_api_auth
var nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth'];
nokia_mn_api_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//nokia_mn_api_auth.apiKeyPrefix = 'Token';

var apiInstance = new NokiaTasCallDirectionApi.SubscriptionApi();

var id = "id_example"; // String | Subscription identifier

var addr = "addr_example"; // String | Subscriber address (SIP address)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSubscription(id, addr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription identifier | 
 **addr** | **String**| Subscriber address (SIP address) | 

### Return type

null (empty response body)

### Authorization

[nokia_mn_api_auth](../README.md#nokia_mn_api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getSubscription"></a>
# **getSubscription**
> CallDirectionSubscriptionResponse getSubscription(id, addr)

Read a call direction subscription



### Example
```javascript
var NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');
var defaultClient = NokiaTasCallDirectionApi.ApiClient.default;

// Configure API key authorization: nokia_mn_api_auth
var nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth'];
nokia_mn_api_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//nokia_mn_api_auth.apiKeyPrefix = 'Token';

var apiInstance = new NokiaTasCallDirectionApi.SubscriptionApi();

var id = "id_example"; // String | Subscription identifier

var addr = "addr_example"; // String | Subscriber address (SIP address)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscription(id, addr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription identifier | 
 **addr** | **String**| Subscriber address (SIP address) | 

### Return type

[**CallDirectionSubscriptionResponse**](CallDirectionSubscriptionResponse.md)

### Authorization

[nokia_mn_api_auth](../README.md#nokia_mn_api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

