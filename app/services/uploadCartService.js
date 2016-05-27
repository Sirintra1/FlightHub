'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('uploadCartService', function() {
    var uploads = [{
        id: 1,
        flightName: "AK 001",
        trunBy: ['Inbound', 'Outbound', 'Quick Turn'],
        cart: [{
            cartId: 1,
            cartName: "Cart 001A",
            name: "Flight No. AK25",
            detail: "Outbound (cart 3)",
            detailadd: "Left Front Outbound"
        }]
    }];
    var varTemp = {
        id: guid(),
        flightName: "",
        trunBy: [],
        cart: []
    };

    

    this.getUploadList = function() {
        return uploads;
    };

    this.getUpload = function(arr, id) {
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    return arr[i];
                }
            }
            return [];
        }
        return [];

    };

    this.deleteUpload = function(id) {
        for (var i = 0; i < uploads.length; i++) {
            if (uploads[i].id == id) {
                uploads.splice(i, 1);
                break;
            }
        }
        return uploads;
    };

    this.getTemp = function() {
        return varTemp;
    };
    this.setTemp = function(item) {
        varTemp = item;
    };
    this.clearTemp = function() {
        varTemp = {
        id: guid(),
        flightName: "",
        trunBy: [],
        cart: []
    };
    };
});
