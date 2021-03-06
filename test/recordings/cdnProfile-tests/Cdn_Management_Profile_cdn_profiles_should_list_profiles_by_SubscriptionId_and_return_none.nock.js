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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459967962\",\"not_before\":\"1459964062\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MDYyLCJuYmYiOjE0NTk5NjQwNjIsImV4cCI6MTQ1OTk2Nzk2MiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.OP7NDpHis2giDcRTirkK9lCvjL0IZlM1jFbeD66YVjO-sWNRxq69SbdSGEnyassJhW-wbvQikac13m4P6aDAkX2HuNJIUZph2DLJfExGCBuzeUTb9-u8ICGi2aI-Poo8FdY85Ev61jstQl3o6o984N6M8vGlaRoSb0dS2mELCCrW33eJ1pgSVCWMKei1Ch6p9mZ5Ligj6uuq4Rcu8PriWTAap65YpBai8jTbPG0rkDBzOkdRh-_-wpPuMwRXX1-1DeU8CtffxKzsiZXzWwnYp2zwpn3C-cWA1VrGJPxW-y9wHbdiYohuHyGmDdYyhMDhpMtPEto56cwXuIbWFN7NXA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'd46778d8-4203-4468-b929-34131f6e84c6',
  'client-request-id': '7df3a18f-cced-4d25-a727-8de252bd3043',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_423',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:39:21 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459967962\",\"not_before\":\"1459964062\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MDYyLCJuYmYiOjE0NTk5NjQwNjIsImV4cCI6MTQ1OTk2Nzk2MiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.OP7NDpHis2giDcRTirkK9lCvjL0IZlM1jFbeD66YVjO-sWNRxq69SbdSGEnyassJhW-wbvQikac13m4P6aDAkX2HuNJIUZph2DLJfExGCBuzeUTb9-u8ICGi2aI-Poo8FdY85Ev61jstQl3o6o984N6M8vGlaRoSb0dS2mELCCrW33eJ1pgSVCWMKei1Ch6p9mZ5Ligj6uuq4Rcu8PriWTAap65YpBai8jTbPG0rkDBzOkdRh-_-wpPuMwRXX1-1DeU8CtffxKzsiZXzWwnYp2zwpn3C-cWA1VrGJPxW-y9wHbdiYohuHyGmDdYyhMDhpMtPEto56cwXuIbWFN7NXA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'd46778d8-4203-4468-b929-34131f6e84c6',
  'client-request-id': '7df3a18f-cced-4d25-a727-8de252bd3043',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_423',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:39:21 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '2c1087bf-cdeb-416b-8bc3-cfd913f953be',
  'x-ms-client-request-id': 'a85624ac-6bd0-439c-837c-76dc819c87ca',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14942',
  'x-ms-correlation-request-id': '08ff2d3d-1307-4200-8d75-2435994fbc9e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160406T173923Z:08ff2d3d-1307-4200-8d75-2435994fbc9e',
  date: 'Wed, 06 Apr 2016 17:39:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '2c1087bf-cdeb-416b-8bc3-cfd913f953be',
  'x-ms-client-request-id': 'a85624ac-6bd0-439c-837c-76dc819c87ca',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14942',
  'x-ms-correlation-request-id': '08ff2d3d-1307-4200-8d75-2435994fbc9e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160406T173923Z:08ff2d3d-1307-4200-8d75-2435994fbc9e',
  date: 'Wed, 06 Apr 2016 17:39:22 GMT',
  connection: 'close' });
 return result; }]];