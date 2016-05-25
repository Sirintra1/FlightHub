'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('promotionDiscountService', function() {

    
    var promotions = [{
        id: 1,
        promotionName: "Buy 500 THB. Free Coke 1 Qty."
    }, {
        id: 2,
        promotionName: "Buy 3 Coke Free 1 Water"
    }];

    this.getPromotionList = function() {
        return promotions;
    };

    this.getPromotion = function(arr, id) {
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
