'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
  .controller('comboProductCtrl', function ($scope, comboProductservice, $filter, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.combos = [];
        $scope.isEdit = $routeParams.comboID ? true : false;
        $scope.newCombo = {};
        $scope.init = function() {
            $scope.combos = comboProductservice.getComboList();
        }

        $scope.newFn = function() {
            $scope.newCombo = {};
        };

        $scope.addCombo = function() {
            $scope.newCombo.id = guid();
            $scope.combos.push($scope.newCombo);
            $scope.newFn();
        };


        $scope.setVal = function() {
            // alert('');
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
            var result = comboProductservice.getCombo($scope.combos, $routeParams.comboID);
            console.log(result);
            if (result) {
                $scope.newCombo = result;
            }

        };

        $scope.editFn = function() {
            //
        };
        $scope.init();

        if ($routeParams.comboID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }



    $scope.cart = ["Cart 001A", "Cart 002B", "Cart 003C", "Cart 004D", "Cart 005E", "Cart 006F", "Cart 007G", "Cart 008H"]; 
        $scope.img = ["images/hamburger.jpg", "images/Macaroni.jpg", "images/salad.jpg", "images/sandwich.jpg", "images/sapagetti.jpg"] 
        $scope.product = [{ name:"Humburger", 
             price:130, 
             qty:1, 
             img:"images/hamburger.jpg"}, 
             { name:"Humburger", 
             price:130, 
             qty:1, 
             img:"images/hamburger.jpg"}, 
             { name:"Humburger", 
             price:130, 
             qty:1, 
             img:"images/hamburger.jpg"}, 
             { name:"Humburger", 
             price:130, 
             qty:1, 
             img:"images/hamburger.jpg"}, 
             { name:"Humburger", 
             price:130, 
             qty:1, 
             img:"images/hamburger.jpg"}, 
             { name:"Humburger", 
             price:130, 
             qty:1, 
             img:"images/hamburger.jpg"}, 
             { name:"Humburger", 
             price:130, 
             qty:1, 
             img:"images/hamburger.jpg"}, 
             { name:"Humburger", 
             price:130, 
             qty:1, 
             img:"images/hamburger.jpg"}, 
             { name:"Humburger", 
             price:130, 
             qty:1, 
             img:"images/hamburger.jpg"} 
             ];
  });