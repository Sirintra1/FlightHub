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
        flightName: "AK 003"
    }, {
        id: 2,
        flightName: "NT 334"
    }, {
        id: 3,
        flightName: "LN 556"
      
    }];

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
});
