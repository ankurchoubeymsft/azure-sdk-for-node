/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AffinityInformation class.
 * @constructor
 * A locality hint that can be used by the Batch service to select a compute
 * node on which to start a task.
 * @member {string} [affinityId] Gets or sets an opaque string representing
 * the location of a compute node or a task that has run previously.  You can
 * pass the AffinityId of a compute node or task to indicate that this task
 * needs to be placed close to the node or task.
 * 
 */
function AffinityInformation() {
}

/**
 * Defines the metadata of AffinityInformation
 *
 * @returns {object} metadata of AffinityInformation
 *
 */
AffinityInformation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AffinityInformation',
    type: {
      name: 'Composite',
      className: 'AffinityInformation',
      modelProperties: {
        affinityId: {
          required: false,
          serializedName: 'affinityId',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AffinityInformation;
