'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('uploadCartCtrl', function($scope, uploadCartService, setupCartService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        
        $scope.uploads = [];
        $scope.isEdit = $routeParams.uploadID ? true : false;
        $scope.newUpload = {};
        $scope.init = function() {
            $scope.uploads = uploadCartService.getUploadList();
            $scope.carts = setupCartService.getCartList();
        }

        $scope.newFn = function() {
            $scope.newUpload = uploadCartService.getTemp();
        };

        $scope.addUpload = function() {
            $scope.newUpload.id = guid();
            $scope.uploads.push($scope.newUpload);

            $scope.newFn();
            uploadCartService.clearTemp();

        };

        $scope.setTemp = function() {
            uploadCartService.setTemp($scope.newUpload);
        };
        $scope.addFloor = function() {
            $scope.newUpload.cart.push({

            });
            console.log($scope.newUpload);
        };

        $scope.setVal = function() {
            // alert(''); 
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID }); 
            var result = uploadCartService.getUpload($scope.uploads, $routeParams.uploadID);
            console.log(result);
            if (result) {
                $scope.newUpload = result;
            }

        };

        $scope.editFn = function() {
            // 
        };
        $scope.init();

        if ($routeParams.uploadID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }


        // $scope.cart = ["Cart 001A", "Cart 002B", "Cart 003C", "Cart 004D", "Cart 005E", "Cart 006F", "Cart 007G", "Cart 008H"];
        //     // $scope.img = ["images/hamburger.jpg", "images/Macaroni.jpg", "images/salad.jpg", "images/sandwich.jpg", "images/sapagetti.jpg"]
        //     $scope.product = [{ cart:"Cart 001A",
        //                      name:"Flight No. AK25",
        //                      detail:"Outbound (cart 3)",
        //                      detailadd:"Left Front Outbound"
        //                  },{ cart:"Cart 002B",
        //                      name:"Flight No. FD11",
        //                      detail:"inbound (cart 5)",
        //                      detailadd:"Left Front Inbound"
        //                  }];
    });
