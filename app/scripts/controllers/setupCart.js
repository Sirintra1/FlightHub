'use strict';

/** 
 * @ngdoc function 
 * @name inflightHubApp.controller:AboutCtrl 
 * @description 
 * # AboutCtrl 
 * Controller of the inflightHubApp 
 */
angular.module('inflightHubApp')
    .controller('setupCartCtrl', function($scope, setupCartService, uploadCartService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.product = [{
            id: 1,
            cate:"Food",
            name: "Humburger",
            price: 130,
            qty: 0,
            img: "images/hamburger.jpg"
        }, {
            id: 2,
            cate:"Food",
            name: "Macaroni",
            price: 230,
            qty: 0,
            img: "images/Macaroni.jpg"
        }, {
            id: 3,
            cate:"Food",
            name: "Salad",
            price: 100,
            qty: 0,
            img: "images/salad.jpg"
        }, {
            id: 4,
            cate:"Food",
            name: "Sandwich",
            price: 90,
            qty: 0,
            img: "images/sandwich.jpg"
        }, {
            id: 5,
            cate:"Food",
            name: "Sapagetti",
            price: 146,
            qty: 0,
            img: "images/sapagetti.jpg"
        }, {
            id: 6,
            cate:"Food",
            name: "Sausage",
            price: 99,
            qty: 0,
            img: "images/sausage.jpg"
        }, {
            id: 7,
            cate:"Food",
            name: "Soup",
            price: 78,
            qty: 0,
            img: "images/soup.jpg"
        }, {
            id: 8,
            cate:"Food",
            name: "Steak",
            price: 340,
            qty: 0,
            img: "images/steak.jpg"
        },{
            id: 9,
            cate:"Drink",
            name: "Water",
            price: 20,
            qty: 0,
            img: "images/drink/1-Water.jpg"
        }, {
            id: 10,
            cate:"Drink",
            name: "Pepsi",
            price: 50,
            qty: 0,
            img: "images/drink/2-Pepsi.jpg"
        }, {
            id: 11,
            cate:"Drink",
            name: "Cocacola",
            price: 50,
            qty: 0,
            img: "images/drink/3-Cocacola.jpg"
        }, {
            id: 12,
            cate:"Drink",
            name: "Green Fanta",
            price: 30,
            qty: 0,
            img: "images/drink/4-GreenFanta.jpg"
        }, {
            id: 13,
            cate:"Drink",
            name: "Red Fanta",
            price: 30,
            qty: 0,
            img: "images/drink/5-RedFanta.jpg"
        }, {
            id: 14,
            cate:"Drink",
            name: "Orange Fanta",
            price: 30,
            qty: 0,
            img: "images/drink/6-OrangeFanta.jpg"
        }, {
            id: 15,
            cate:"Drink",
            name: "Sprite",
            price: 30,
            qty: 0,
            img: "images/drink/7-sprite.jpg"
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
        $scope.clearData = function() {
            setupCartService.clearTemp();
        };
        $scope.addCart = function() {
            $scope.newCart.id = guid();
            $scope.carts.push($scope.newCart);
            $scope.newFn();
            setupCartService.clearTemp();
            uploadCartService.setCarts($scope.carts);
        };
        $scope.deleteCart = function(id) {
            setupCartService.deleteCart(id);
        };
        $scope.removeItem = function(index) {
                $scope.newCart.floor.splice(index, 1);
            },
            $scope.addFloor = function() {
                $scope.newCart.floor.push({
                    floorId: ($scope.newCart.floor.length + 1),
                    cartCate: "",
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
                $scope.setProduct();
            }

        };

        $scope.editFn = function() {
            setupCartService.clearTemp();
        };

        $scope.setProduct = function() {
            if ($routeParams.floorId && $routeParams.cardID && typeof $scope.newCart.floor != "undefined") {
                for (var i = 0; i < $scope.newCart.floor.length; i++) { //หาชั้นที่จะแอดค่า
                    if ($routeParams.floorId == i + 1) {
                        var cartProducts = $scope.newCart.floor[i].cartProd;
                        for (var p = 0; p < $scope.product.length; p++) { //หาขนาดของโปรดัก
                            for (var j = 0; j < cartProducts.length; j++) { //หาขนาดของโปรดักที่อยู่ในรถเข็น
                                if ($scope.product[p].id == cartProducts[j].id) {
                                    $scope.product[p].qty = cartProducts[j].qty;
                                }
                            }
                        }
                        break;
                    }
                }
            }
        }

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

        $scope.limitNumber = 5;
        $scope.runNumber = 0;
        $scope.scrollLeft = function() {
            if ($scope.runNumber > 0) {
                $scope.runNumber--;
            }
        };
        $scope.scrollRight = function(l) {
            if ($scope.runNumber < l - $scope.limitNumber) {
                $scope.runNumber++;
            }
        };
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

        $scope.food = $filter("filter")($scope.product, { cate: "Food" });
        $scope.drink = $filter("filter")($scope.product, { cate: "Drink" });

        $scope.productType = "Food";
        $scope.changeType = function(type) {
            $scope.productType = type;
        };
    });
