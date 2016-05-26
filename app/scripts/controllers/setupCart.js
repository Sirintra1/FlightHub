'use strict';

/** 
 * @ngdoc function 
 * @name inflightHubApp.controller:AboutCtrl 
 * @description 
 * # AboutCtrl 
 * Controller of the inflightHubApp 
 */
angular.module('inflightHubApp')
    .controller('setupCartCtrl', function($scope, setupCartService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.product = [{
            name: "Humburger",
            price: 130,
            qty: 0,
            img: "images/hamburger.jpg"
        }, {
            name: "Macaroni",
            price: 230,
            qty: 0,
            img: "images/Macaroni.jpg"
        }, {
            name: "Salad",
            price: 100,
            qty: 0,
            img: "images/salad.jpg"
        }, {
            name: "Sandwich",
            price: 90,
            qty: 0,
            img: "images/sandwich.jpg"
        }, {
            name: "Sapagetti",
            price: 146,
            qty: 0,
            img: "images/sapagetti.jpg"
        }, {
            name: "Sausage",
            price: 99,
            qty: 0,
            img: "images/sausage.jpg"
        }, {
            name: "Soup",
            price: 78,
            qty: 0,
            img: "images/soup.jpg"
        }, {
            name: "Steak",
            price: 340,
            qty: 0,
            img: "images/steak.jpg"
        }];

        $scope.cartID = $routeParams.cardID;

        $scope.carts = [];
        $scope.isEdit = $routeParams.cardID ? true : false;
        $scope.newCart = {};
        $scope.init = function() {
            $scope.carts = setupCartService.getCartList();
        }

        $scope.newFn = function() {
            $scope.newCart = setupCartService.getTemp();
        };
        $scope.setTemp = function() {
            //$scope.newCart.cartName = "555";
            setupCartService.setTemp($scope.newCart);
        };

        $scope.addCart = function() {
            $scope.newCart.id = guid();
            $scope.carts.push($scope.newCart);
            $scope.newFn();
        };

        $scope.addFloor = function() {
            $scope.newCart.floor.push({
                floorId: ($scope.newCart.floor.length + 1),
                cartCate: "New Class " + ($scope.newCart.floor.length + 1),
                cartProd: []
            });
            console.log($scope.newCart);
        };

        $scope.setVal = function() {
            // alert(''); 
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID }); 
            var result = setupCartService.getCart($scope.carts, $routeParams.cardID);
            console.log(result);
            if (result) {
                $scope.newCart = result;
            }

        };

        $scope.editFn = function() {
            // 
        };
        $scope.addProduct = function() {
            console.log($scope.newCart);
            var addItems = [];
            for (var i = 0; i < $scope.product.length; i++) {
                console.log($scope.product[i]);
                if ($scope.product[i].qty > 0) {
                    addItems.push($scope.product[i]);
                }
            }
            console.log($scope.newCart);
            if (!$routeParams.cardID) {

            } else {
                $scope.newCart = setupCartService.getTemp();

            }
            for (var i = 0; i < $scope.newCart.floor.length; i++) {
                if ($routeParams.floorId == i + 1) {
                    $scope.newCart.floor[i].cartProd = addItems;
                    break;
                }
            }
        };







        $scope.init();

        if ($routeParams.cardID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }







        $scope.cart1 = ["Cart 001A", "Cart 002B", "Cart 003C", "Cart 004D", "Cart 005E", "Cart 006F", "Cart 007G", "Cart 008H"];
        $scope.img = ["images/hamburger.jpg", "images/Macaroni.jpg", "images/salad.jpg", "images/sandwich.jpg", "images/sapagetti.jpg"];

        $scope.purchase = function(item) {
            if (item.qty > 0) {
                return true;
            } else {
                return false;
            }
        };
        $scope.clickAdd = function(item) {
            item.qty += 1;
        };
        $scope.clickRemove = function(item) {
            if (item.qty > 0) {
                item.qty -= 1;
                return true;
            } else {
                return false;
            }
        };

    });
