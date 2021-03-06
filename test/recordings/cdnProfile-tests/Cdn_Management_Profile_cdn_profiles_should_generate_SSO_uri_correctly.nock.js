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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459968044\",\"not_before\":\"1459964144\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MTQ0LCJuYmYiOjE0NTk5NjQxNDQsImV4cCI6MTQ1OTk2ODA0NCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.DjBAHS_rlORBEk-yc_xn9iFCUP7fbjd5Ai4jaiaFQhj4gtLHr0tOPE_RnjndvW_iwULMDzOP_XYfT8rjQAW_iT_H21k6r0cfV1R3DVa9-WFZShhhbBYIGQ3J365lEdfiMHDHGCLcSGPm1HQzkUtfoN2U0cC_UYwsk4C1W1vZrgXOTH-K2VJ6BtXXzO6q0ShhnRtOJcep_rKZLXUuIc3Ch0r-O6FGSmmODMH6yXC__Cb4CpEvzZoY8UnlZ9jAwVz4Wcy1dNEpiRxNj9SZAje936P4g2tkMpDv3yCwDk-qGBxveXZa-Ddr68Q-V_PzC1nwAXTtEWWQlRDEMespclD2Sg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '73544d97-4c24-4759-96e9-acf72ffc6c73',
  'client-request-id': '22097ba8-33e8-42d3-9fd9-a8d2b7b2c31a',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_94',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:40:44 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459968044\",\"not_before\":\"1459964144\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MTQ0LCJuYmYiOjE0NTk5NjQxNDQsImV4cCI6MTQ1OTk2ODA0NCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.DjBAHS_rlORBEk-yc_xn9iFCUP7fbjd5Ai4jaiaFQhj4gtLHr0tOPE_RnjndvW_iwULMDzOP_XYfT8rjQAW_iT_H21k6r0cfV1R3DVa9-WFZShhhbBYIGQ3J365lEdfiMHDHGCLcSGPm1HQzkUtfoN2U0cC_UYwsk4C1W1vZrgXOTH-K2VJ6BtXXzO6q0ShhnRtOJcep_rKZLXUuIc3Ch0r-O6FGSmmODMH6yXC__Cb4CpEvzZoY8UnlZ9jAwVz4Wcy1dNEpiRxNj9SZAje936P4g2tkMpDv3yCwDk-qGBxveXZa-Ddr68Q-V_PzC1nwAXTtEWWQlRDEMespclD2Sg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '73544d97-4c24-4759-96e9-acf72ffc6c73',
  'client-request-id': '22097ba8-33e8-42d3-9fd9-a8d2b7b2c31a',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_94',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:40:44 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6098/providers/Microsoft.Cdn/profiles/cdnTestProfile5878/generateSsoUri?api-version=2015-06-01')
  .reply(200, "{\r\n  \"ssoUriValue\":\"https://cdn.windowsazure.com/account/loginexternal/?token=gLtrDe%2brFwkz4b15SynXmHEmXJ3KFardRM6zgtSx2G0%3d&timestamp=2016-04-06T17:40:45.8118998Z&cdnAccountId=2E13D&userCustomId=SSO-28b52071-39ed-4076-a1e1-dbd18e4230cd&restEndpointId=0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '259',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '0bdb1861-57b4-4b6c-84db-433782c84276',
  'x-ms-client-request-id': 'bc4cab7c-0bec-4f35-9d1f-9176d02ba243',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '0463a108-3fd6-4a68-b364-1258f67d0df5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160406T174045Z:0463a108-3fd6-4a68-b364-1258f67d0df5',
  date: 'Wed, 06 Apr 2016 17:40:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6098/providers/Microsoft.Cdn/profiles/cdnTestProfile5878/generateSsoUri?api-version=2015-06-01')
  .reply(200, "{\r\n  \"ssoUriValue\":\"https://cdn.windowsazure.com/account/loginexternal/?token=gLtrDe%2brFwkz4b15SynXmHEmXJ3KFardRM6zgtSx2G0%3d&timestamp=2016-04-06T17:40:45.8118998Z&cdnAccountId=2E13D&userCustomId=SSO-28b52071-39ed-4076-a1e1-dbd18e4230cd&restEndpointId=0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '259',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '0bdb1861-57b4-4b6c-84db-433782c84276',
  'x-ms-client-request-id': 'bc4cab7c-0bec-4f35-9d1f-9176d02ba243',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '0463a108-3fd6-4a68-b364-1258f67d0df5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160406T174045Z:0463a108-3fd6-4a68-b364-1258f67d0df5',
  date: 'Wed, 06 Apr 2016 17:40:45 GMT',
  connection: 'close' });
 return result; }]];