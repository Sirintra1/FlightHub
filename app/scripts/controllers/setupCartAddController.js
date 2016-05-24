'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
.controller('setupCartAddController', function ($scope,$routeParams, setupCartService) {
    

    $scope.carts = setupCartService.getCarts();
     for(var i=0 ; i<$scope.carts.length;i++){
            console.log($scope.carts[i]);
            if($scope.carts[i].id == $routeParams.cartID){
                console.log($scope.carts[i]);
                $scope.showCart = $scope.carts[i];
                // $scope.products.splice(i, 1);
                break;
            }
            
        }
});