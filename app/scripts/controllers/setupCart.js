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
        $scope.carts = []; 
        $scope.isEdit = $routeParams.cardID ? true : false; 
        $scope.newCart = {}; 
        $scope.init = function() { 
            $scope.carts = setupCartService.getCartList(); 
        } 

        $scope.newFn = function() { 
            $scope.newCart = {}; 
        }; 

        $scope.addCart = function() { 
            $scope.newCart.id = guid(); 
            $scope.carts.push($scope.newCart); 
            $scope.newFn(); 
        }; 

 
        $scope.setVal = function() { 
           // alert(''); 
           // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID }); 
           var result = setupCartService.getCart($scope.carts,$routeParams.cardID ); 
            console.log(result); 
            if (result) { 
                $scope.newCart = result; 
            } 

        }; 

        $scope.editFn = function() { 
            // 
        }; 
        $scope.init(); 

        if ($routeParams.cardID) { 
            $scope.setVal(); 
        } else { 
            $scope.newFn(); 
        } 

 

 

 

        $scope.cart1 = ["Cart 001A", "Cart 002B", "Cart 003C", "Cart 004D", "Cart 005E", "Cart 006F", "Cart 007G", "Cart 008H"]; 
        $scope.img = ["images/hamburger.jpg", "images/Macaroni.jpg", "images/salad.jpg", "images/sandwich.jpg", "images/sapagetti.jpg"]; 
        $scope.product = [{ 
            name: "Humburger", 
            price: 130, 
            qty: 1, 
            img: "images/hamburger.jpg" 
        }, { 
            name: "Humburger", 
            price: 130, 
            qty: 1, 
            img: "images/hamburger.jpg" 
        }, { 
            name: "Humburger", 
            price: 130, 
            qty: 1, 
            img: "images/hamburger.jpg" 
        }, { 
            name: "Humburger", 
            price: 130, 
            qty: 1, 
            img: "images/hamburger.jpg" 
        }, { 
            name: "Humburger", 
            price: 130, 
            qty: 1, 
            img: "images/hamburger.jpg" 
        }, { 
            name: "Humburger", 
            price: 130, 
            qty: 1, 
            img: "images/hamburger.jpg" 
        }, { 
            name: "Humburger", 
            price: 130, 
            qty: 1, 
            img: "images/hamburger.jpg" 
        }, { 
            name: "Humburger", 
            price: 130, 
            qty: 1, 
            img: "images/hamburger.jpg" 
        }, { 
            name: "Humburger", 
            price: 130, 
            qty: 1, 
            img: "images/hamburger.jpg" 
        }]; 
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