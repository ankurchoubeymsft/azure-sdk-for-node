/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// Test includes
var fs = require('fs');

var nockHelper = require('./nock-helper');

exports = module.exports = StorageTestUtils;

function StorageTestUtils(service, testPrefix) {
  this.service = service;
  this.testPrefix = testPrefix;
  this.mockServerClient;
  this.currentTest = 0;
  this.scopeWritten;
  this.recordingsFile = __dirname + '/../recordings/' + this.testPrefix + '.nock.js';
  this.isMocked = !process.env.NOCK_OFF;
  this.isRecording = process.env.AZURE_NOCK_RECORD;
}

StorageTestUtils.prototype.setupSuite = function (callback) {
  if (process.env.AZURE_NOCK_RECORD) {
    fs.writeFileSync(this.recordingsFile, 
      '// This file has been autogenerated.\n\n' +
      'exports.scopes = [');
  }

  callback();
};

StorageTestUtils.prototype.teardownSuite = function (callback) {
  this.currentTest = 0;

  if (process.env.AZURE_NOCK_RECORD) {
    fs.appendFileSync(this.recordingsFile, '];');
  }

  callback();
};

StorageTestUtils.prototype.setupTest = function (callback) {
  nockHelper.nockHttp();

  if (process.env.AZURE_NOCK_RECORD) {
    // nock recoding
    nockHelper.nock.recorder.rec(true);
  } else if (!process.env.NOCK_OFF) {
    // nock playback
    var nocked = require(this.recordingsFile);

    if (this.currentTest < nocked.scopes.length) {
      nocked.scopes[this.currentTest++].forEach(function (createScopeFunc) {
        createScopeFunc(nockHelper.nock);
      });
    } else {
      throw new Error('It appears the ' + this.recordingsFile + ' file has more tests than there are mocked tests. '
        + 'You may need to re-generate it.');
    }
  }

  callback();
};

StorageTestUtils.prototype.baseTeardownTest = function (callback) {
  if (process.env.AZURE_NOCK_RECORD) {
    // play nock recording
    var scope = this.scopeWritten ? ',\n[' : '[';
    this.scopeWritten = true;
    var lineWritten;
    nockHelper.nock.recorder.play().forEach(function (line) {
      if (line.indexOf('nock') >= 0) {
        // apply fixups of nock generated mocks

        // do not filter on body as they usual have time related stamps
        line = line.replace(/(\.post\('.*')[^\)]+\)/, '.filteringRequestBody(function (path) { return \'*\';})\n$1, \'*\')');
        line = line.replace(/(\.get\('.*')[^\)]+\)/, '.filteringRequestBody(function (path) { return \'*\';})\n$1, \'*\')');
        line = line.replace(/(\.put\('.*')[^\)]+\)/, '.filteringRequestBody(function (path) { return \'*\';})\n$1, \'*\')');
        line = line.replace(/(\.delete\('.*')[^\)]+\)/, '.filteringRequestBody(function (path) { return \'*\';})\n$1, \'*\')');
        line = line.replace(/(\.merge\('.*')[^\)]+\)/, '.filteringRequestBody(function (path) { return \'*\';})\n$1, \'*\')');
        line = line.replace(/(\.patch\('.*')[^\)]+\)/, '.filteringRequestBody(function (path) { return \'*\';})\n$1, \'*\')');

        scope += (lineWritten ? ',\n' : '') + 'function (nock) { \n' +
          'var result = ' + line + ' return result; }';
        lineWritten = true;
      }
    });
    scope += ']';
    fs.appendFileSync(this.recordingsFile, scope);
    nockHelper.nock.recorder.clear();
  }

  nockHelper.unNockHttp();

  callback();
};