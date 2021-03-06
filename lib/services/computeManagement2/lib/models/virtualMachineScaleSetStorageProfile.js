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

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetStorageProfile class.
 * @constructor
 * Describes a virtual machine scale set storage profile.
 * @member {object} [imageReference] Gets or sets the image reference.
 * 
 * @member {string} [imageReference.publisher] Gets or sets the image
 * publisher.
 * 
 * @member {string} [imageReference.offer] Gets or sets the image offer.
 * 
 * @member {string} [imageReference.sku] Gets or sets the image sku.
 * 
 * @member {string} [imageReference.version] Gets or sets the image version.
 * The allowed formats are Major.Minor.Build or 'latest'. Major, Minor and
 * Build being decimal numbers. Specify 'latest' to use the latest version of
 * image.
 * 
 * @member {object} [osDisk] Gets or sets the OS disk.
 * 
 * @member {string} [osDisk.name] Gets or sets the disk name.
 * 
 * @member {string} [osDisk.caching] Gets or sets the caching type. Possible
 * values include: 'None', 'ReadOnly', 'ReadWrite'
 * 
 * @member {string} [osDisk.createOption] Gets or sets the create option.
 * Possible values include: 'fromImage', 'empty', 'attach'
 * 
 * @member {string} [osDisk.osType] Gets or sets the Operating System type.
 * Possible values include: 'Windows', 'Linux'
 * 
 * @member {object} [osDisk.image] Gets or sets the Source User Image
 * VirtualHardDisk. This VirtualHardDisk will be copied before using it to
 * attach to the Virtual Machine.If SourceImage is provided, the destination
 * VirtualHardDisk should not exist.
 * 
 * @member {string} [osDisk.image.uri] Gets or sets the virtual hard disk's
 * uri. It should be a valid Uri to a virtual hard disk.
 * 
 * @member {array} [osDisk.vhdContainers] Gets or sets the list of virtual
 * hard disk container uris.
 * 
 */
function VirtualMachineScaleSetStorageProfile() {
}

/**
 * Defines the metadata of VirtualMachineScaleSetStorageProfile
 *
 * @returns {object} metadata of VirtualMachineScaleSetStorageProfile
 *
 */
VirtualMachineScaleSetStorageProfile.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineScaleSetStorageProfile',
    type: {
      name: 'Composite',
      className: 'VirtualMachineScaleSetStorageProfile',
      modelProperties: {
        imageReference: {
          required: false,
          serializedName: 'imageReference',
          type: {
            name: 'Composite',
            className: 'ImageReference'
          }
        },
        osDisk: {
          required: false,
          serializedName: 'osDisk',
          type: {
            name: 'Composite',
            className: 'VirtualMachineScaleSetOSDisk'
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineScaleSetStorageProfile;
