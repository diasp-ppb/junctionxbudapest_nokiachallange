# NokiaTasCallDirectionApi.ClicktocallApi

All URIs are relative to *http://mn.developer.nokia.com/tasseeAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clickToCall**](ClicktocallApi.md#clickToCall) | **POST** /callcontrol/v1/clicktocall | Create a click to call request


<a name="clickToCall"></a>
# **clickToCall**
> ClickToCallResponse clickToCall(clickToCall)

Create a click to call request



### Example
```javascript
var NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');
var defaultClient = NokiaTasCallDirectionApi.ApiClient.default;

// Configure API key authorization: nokia_mn_api_auth
var nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth'];
nokia_mn_api_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//nokia_mn_api_auth.apiKeyPrefix = 'Token';

var apiInstance = new NokiaTasCallDirectionApi.ClicktocallApi();

var clickToCall = new NokiaTasCallDirectionApi.ClickToCall(); // ClickToCall | Click to Call object that needs to be sent to the Nokia TAS


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clickToCall(clickToCall, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clickToCall** | [**ClickToCall**](ClickToCall.md)| Click to Call object that needs to be sent to the Nokia TAS | 

### Return type

[**ClickToCallResponse**](ClickToCallResponse.md)

### Authorization

[nokia_mn_api_auth](../README.md#nokia_mn_api_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

