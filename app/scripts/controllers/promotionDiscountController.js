'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('promotionDiscountController', function($scope, $routeParams, promotionDiscountService) {

        $scope.promotions = promotionDiscountService.getPromotions();
        for (var i = 0; i < $scope.promotions.length; i++) {
            console.log($scope.promotions[i]);
            if ($scope.promotions[i].id == $routeParams.promotionID) {
                console.log($scope.promotions[i]);
                $scope.showPromotion = $scope.promotions[i];
                // $scope.products.splice(i, 1);
                break;
            }

        }
    });
