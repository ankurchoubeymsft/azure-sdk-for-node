/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetVMInstanceRequiredIDs class.
 * @constructor
 * Specifies the list of virtual machine scale set instance IDs.
 * @member {array} instanceIds Gets or sets the virtual machine scale set
 * instance ids.
 * 
 */
function VirtualMachineScaleSetVMInstanceRequiredIDs() {
}

/**
 * Defines the metadata of VirtualMachineScaleSetVMInstanceRequiredIDs
 *
 * @returns {object} metadata of VirtualMachineScaleSetVMInstanceRequiredIDs
 *
 */
VirtualMachineScaleSetVMInstanceRequiredIDs.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineScaleSetVMInstanceRequiredIDs',
    type: {
      name: 'Composite',
      className: 'VirtualMachineScaleSetVMInstanceRequiredIDs',
      modelProperties: {
        instanceIds: {
          required: true,
          serializedName: 'instanceIds',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineScaleSetVMInstanceRequiredIDs;