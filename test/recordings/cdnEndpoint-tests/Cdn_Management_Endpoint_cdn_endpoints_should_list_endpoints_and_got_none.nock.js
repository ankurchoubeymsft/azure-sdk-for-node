// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459817381\",\"not_before\":\"1459813481\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNDgxLCJuYmYiOjE0NTk4MTM0ODEsImV4cCI6MTQ1OTgxNzM4MSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.NsLIIRbYJTfXr4KZo8oqC4i49_TPzdKwO5Rew_HYctcYRl-bjtS6ZmPdPDGRcntiFOlvKWrCjWjgaEQOHW__0KjtkvQ-0za2exeJ3RwmSouwrAifFjODEfYVSgdvDhnG4fvqaFKzrv1tcs1b4d-w4WJbvbIHHo5OcP4de0rk4n0wmPrb4TrJCK22uspg6Wv3xeCD3VdiEO_gT1enmTsC0IkIUDR3Xh0xpVCz5JJ3qmE3T1zMNItskEsHJtIKWEug0HYse89ncJYXYoZ2cCJ44k6I8tcVphKycztLWy9m9GqscUrni5VvJWwnikQkHIlh-udcfvbJBXVGm_lsUmzuMg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '32c420e7-a4b0-487e-8b53-87458abb3caa',
  'client-request-id': '5c1f9b05-f990-4d31-b7c0-46fbbaa4bd54',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_428',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:49:41 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459817381\",\"not_before\":\"1459813481\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNDgxLCJuYmYiOjE0NTk4MTM0ODEsImV4cCI6MTQ1OTgxNzM4MSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.NsLIIRbYJTfXr4KZo8oqC4i49_TPzdKwO5Rew_HYctcYRl-bjtS6ZmPdPDGRcntiFOlvKWrCjWjgaEQOHW__0KjtkvQ-0za2exeJ3RwmSouwrAifFjODEfYVSgdvDhnG4fvqaFKzrv1tcs1b4d-w4WJbvbIHHo5OcP4de0rk4n0wmPrb4TrJCK22uspg6Wv3xeCD3VdiEO_gT1enmTsC0IkIUDR3Xh0xpVCz5JJ3qmE3T1zMNItskEsHJtIKWEug0HYse89ncJYXYoZ2cCJ44k6I8tcVphKycztLWy9m9GqscUrni5VvJWwnikQkHIlh-udcfvbJBXVGm_lsUmzuMg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '32c420e7-a4b0-487e-8b53-87458abb3caa',
  'client-request-id': '5c1f9b05-f990-4d31-b7c0-46fbbaa4bd54',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_428',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:49:41 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile7413\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '400',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '26e50447-a0de-4a1f-8131-488c71908cca',
  'x-ms-client-request-id': 'eb4e06c0-2e41-4af3-b3ef-5c69f7323bca',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/84e4b7a0-865d-4915-bbf2-74c81c4c76c4?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '5170c6cf-4721-4b44-b32a-1f3600340ea2',
  'x-ms-routing-request-id': 'WESTUS:20160404T234943Z:5170c6cf-4721-4b44-b32a-1f3600340ea2',
  date: 'Mon, 04 Apr 2016 23:49:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile7413\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '400',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '26e50447-a0de-4a1f-8131-488c71908cca',
  'x-ms-client-request-id': 'eb4e06c0-2e41-4af3-b3ef-5c69f7323bca',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/84e4b7a0-865d-4915-bbf2-74c81c4c76c4?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '5170c6cf-4721-4b44-b32a-1f3600340ea2',
  'x-ms-routing-request-id': 'WESTUS:20160404T234943Z:5170c6cf-4721-4b44-b32a-1f3600340ea2',
  date: 'Mon, 04 Apr 2016 23:49:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459817413\",\"not_before\":\"1459813513\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNTEzLCJuYmYiOjE0NTk4MTM1MTMsImV4cCI6MTQ1OTgxNzQxMywiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.ATsRfHQAE-JuqtB3o7NuVmWz1yjo-s-zZbybPAQE0yBdBlWw6TyXpkZa0xUSE0E4zbyRlkM3P6M8BHH1D6_KfWgT-iCaJ1MpAdi9RR3GEzfhsJEIE_1vnM4Ng9fc2Kp280ChmLdBZMCPtRNRoxJTpYhnMGfHmnyUtXumVArsYWGMape2xKkpDOdgDW4B9b5mqrIC11DW5R8XyBnOGq_dbstOBHiN2-hQRhAkcmB5Ziud-p2Jt7hBdeFfDwPBNfHQ7zsDTOa8ZIu8UegMi7eMLStpbyO66XZMxwyHGWJcKfyALVCsg3DqzIAoFalLIEUSCMt4HKMNaltz2rQPp-n2NA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '715269c5-72d9-47b3-bd7a-5e8a88781037',
  'client-request-id': '8c84bebd-8de4-43dd-8bd8-17f4a6997c45',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_293',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:50:14 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459817413\",\"not_before\":\"1459813513\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNTEzLCJuYmYiOjE0NTk4MTM1MTMsImV4cCI6MTQ1OTgxNzQxMywiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.ATsRfHQAE-JuqtB3o7NuVmWz1yjo-s-zZbybPAQE0yBdBlWw6TyXpkZa0xUSE0E4zbyRlkM3P6M8BHH1D6_KfWgT-iCaJ1MpAdi9RR3GEzfhsJEIE_1vnM4Ng9fc2Kp280ChmLdBZMCPtRNRoxJTpYhnMGfHmnyUtXumVArsYWGMape2xKkpDOdgDW4B9b5mqrIC11DW5R8XyBnOGq_dbstOBHiN2-hQRhAkcmB5Ziud-p2Jt7hBdeFfDwPBNfHQ7zsDTOa8ZIu8UegMi7eMLStpbyO66XZMxwyHGWJcKfyALVCsg3DqzIAoFalLIEUSCMt4HKMNaltz2rQPp-n2NA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '715269c5-72d9-47b3-bd7a-5e8a88781037',
  'client-request-id': '8c84bebd-8de4-43dd-8bd8-17f4a6997c45',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_293',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:50:14 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/84e4b7a0-865d-4915-bbf2-74c81c4c76c4?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '819c4606-2de9-4e27-9f32-3f45b925673b',
  'x-ms-client-request-id': 'e483b467-8903-46ec-8ef6-1b46c0ff9105',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '15ea21d6-a5be-49fd-8a53-149f715dc66c',
  'x-ms-routing-request-id': 'WESTUS:20160404T235015Z:15ea21d6-a5be-49fd-8a53-149f715dc66c',
  date: 'Mon, 04 Apr 2016 23:50:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/84e4b7a0-865d-4915-bbf2-74c81c4c76c4?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '819c4606-2de9-4e27-9f32-3f45b925673b',
  'x-ms-client-request-id': 'e483b467-8903-46ec-8ef6-1b46c0ff9105',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '15ea21d6-a5be-49fd-8a53-149f715dc66c',
  'x-ms-routing-request-id': 'WESTUS:20160404T235015Z:15ea21d6-a5be-49fd-8a53-149f715dc66c',
  date: 'Mon, 04 Apr 2016 23:50:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459817415\",\"not_before\":\"1459813515\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNTE1LCJuYmYiOjE0NTk4MTM1MTUsImV4cCI6MTQ1OTgxNzQxNSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.isDeJeLvxrAVD2cErhcSqJpmOmf_UngC-DWQFHhTllqp5rMA8QEhtQKeLlfXdrTDSlJQKTLnyrHP_P4YKA4J1pUbewK8FrGtrm0qDr_q4NHQ829xlSUbLmzx-HhxYLSaHRK0a-pdyZ15LdajRpVhG8C5JVwnP-lDQdrgqaMss_mPTiwbRP0nIn2hHUGnxK4Bp-VlrBi9eF95SABymHEOWUx3ntw_L0Onp_i55vNGYXuRA-zjwGR5kv6582ZAWJqNcgXrkPTQ48a2IxHI9mXT3f6WNeAmDyOylRLNjNfS4QVCgZF3WsSt7n7XmK7UzFx6QejaLdPIRzPL8VV2RTQrIg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '4c7f2a49-0ea9-4d66-925a-a06dc7b3c6ed',
  'client-request-id': '1538f6dc-478b-4121-9fb7-74a9ee4d5110',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_479',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:50:15 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459817415\",\"not_before\":\"1459813515\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNTE1LCJuYmYiOjE0NTk4MTM1MTUsImV4cCI6MTQ1OTgxNzQxNSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.isDeJeLvxrAVD2cErhcSqJpmOmf_UngC-DWQFHhTllqp5rMA8QEhtQKeLlfXdrTDSlJQKTLnyrHP_P4YKA4J1pUbewK8FrGtrm0qDr_q4NHQ829xlSUbLmzx-HhxYLSaHRK0a-pdyZ15LdajRpVhG8C5JVwnP-lDQdrgqaMss_mPTiwbRP0nIn2hHUGnxK4Bp-VlrBi9eF95SABymHEOWUx3ntw_L0Onp_i55vNGYXuRA-zjwGR5kv6582ZAWJqNcgXrkPTQ48a2IxHI9mXT3f6WNeAmDyOylRLNjNfS4QVCgZF3WsSt7n7XmK7UzFx6QejaLdPIRzPL8VV2RTQrIg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '4c7f2a49-0ea9-4d66-925a-a06dc7b3c6ed',
  'client-request-id': '1538f6dc-478b-4121-9fb7-74a9ee4d5110',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_479',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:50:15 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile7413\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '399',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f1f8af88-e80d-4f07-b590-8ce5fd602bf0',
  'x-ms-client-request-id': '5120c7d1-a5c5-422e-9487-05966aae56f9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '656cbf30-293d-44ed-b1c9-25d93e47abbb',
  'x-ms-routing-request-id': 'WESTUS:20160404T235016Z:656cbf30-293d-44ed-b1c9-25d93e47abbb',
  date: 'Mon, 04 Apr 2016 23:50:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile7413\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '399',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f1f8af88-e80d-4f07-b590-8ce5fd602bf0',
  'x-ms-client-request-id': '5120c7d1-a5c5-422e-9487-05966aae56f9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '656cbf30-293d-44ed-b1c9-25d93e47abbb',
  'x-ms-routing-request-id': 'WESTUS:20160404T235016Z:656cbf30-293d-44ed-b1c9-25d93e47abbb',
  date: 'Mon, 04 Apr 2016 23:50:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459817416\",\"not_before\":\"1459813516\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNTE2LCJuYmYiOjE0NTk4MTM1MTYsImV4cCI6MTQ1OTgxNzQxNiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.p8icFmLb1q23HvX1hoHsINNGKn-jsgDcnPyHqQ_37FhVuDSKHK17Gn1QAH_t6WVBkJjX2V_I_iuImvM8cytzjphHmbmtCLPFZq_468Z0BexaoVnDBdQDCqtVwAOewWoBCdJgnAsu25stUEkyh6drMhRpIXBKemt5uTuJX0HB2wl71n4vVtoTOzitzGBX-W-WhYJ5elB3oEjkjdB1ylUCXYJrsERdv6V329_SnKu8pvXGgyNVrrJmJylWCqiRLndKGiNxfWARJzjL0PZPXCscv426a1fV1zKccIwfk9DhxExhjaZeqoGWbHAP1gEsOZRuYRfaaRA-YzTLp485WfaLtw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7d03955e-3482-4995-8b76-ba1dc9547f4d',
  'client-request-id': 'eec672fb-6c0d-4e0b-896d-74d425174d65',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_335',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:50:16 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459817416\",\"not_before\":\"1459813516\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNTE2LCJuYmYiOjE0NTk4MTM1MTYsImV4cCI6MTQ1OTgxNzQxNiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.p8icFmLb1q23HvX1hoHsINNGKn-jsgDcnPyHqQ_37FhVuDSKHK17Gn1QAH_t6WVBkJjX2V_I_iuImvM8cytzjphHmbmtCLPFZq_468Z0BexaoVnDBdQDCqtVwAOewWoBCdJgnAsu25stUEkyh6drMhRpIXBKemt5uTuJX0HB2wl71n4vVtoTOzitzGBX-W-WhYJ5elB3oEjkjdB1ylUCXYJrsERdv6V329_SnKu8pvXGgyNVrrJmJylWCqiRLndKGiNxfWARJzjL0PZPXCscv426a1fV1zKccIwfk9DhxExhjaZeqoGWbHAP1gEsOZRuYRfaaRA-YzTLp485WfaLtw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7d03955e-3482-4995-8b76-ba1dc9547f4d',
  'client-request-id': 'eec672fb-6c0d-4e0b-896d-74d425174d65',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_335',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:50:16 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'bae7a6d0-d715-4c4c-81fb-7bdb8e5b2189',
  'x-ms-client-request-id': '0f094535-7e45-4e5c-b8cc-bdbaf4d0f043',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '139bbe90-b85f-4812-a820-2485bc7766dc',
  'x-ms-routing-request-id': 'WESTUS:20160404T235017Z:139bbe90-b85f-4812-a820-2485bc7766dc',
  date: 'Mon, 04 Apr 2016 23:50:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'bae7a6d0-d715-4c4c-81fb-7bdb8e5b2189',
  'x-ms-client-request-id': '0f094535-7e45-4e5c-b8cc-bdbaf4d0f043',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '139bbe90-b85f-4812-a820-2485bc7766dc',
  'x-ms-routing-request-id': 'WESTUS:20160404T235017Z:139bbe90-b85f-4812-a820-2485bc7766dc',
  date: 'Mon, 04 Apr 2016 23:50:17 GMT',
  connection: 'close' });
 return result; }]];