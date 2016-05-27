'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('comboProductCtrl', function($scope, comboProductservice, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.product = [{
            id: 1,
            name: "Humburger",
            price: 130,
            qty: 0,
            img: "images/hamburger.jpg"
        }, {
            id: 2,
            name: "Macaroni",
            price: 230,
            qty: 0,
            img: "images/Macaroni.jpg"
        }, {
            id: 3,
            name: "Salad",
            price: 100,
            qty: 0,
            img: "images/salad.jpg"
        }, {
            id: 4,
            name: "Sandwich",
            price: 90,
            qty: 0,
            img: "images/sandwich.jpg"
        }, {
            id: 5,
            name: "Sapagetti",
            price: 146,
            qty: 0,
            img: "images/sapagetti.jpg"
        }, {
            id: 6,
            name: "Sausage",
            price: 99,
            qty: 0,
            img: "images/sausage.jpg"
        }, {
            id: 7,
            name: "Soup",
            price: 78,
            qty: 0,
            img: "images/soup.jpg"
        }, {
            id: 8,
            name: "Steak",
            price: 340,
            qty: 0,
            img: "images/steak.jpg"
        }];

        $scope.comboID = $routeParams.comboID;
        $scope.combos = [];
        $scope.isEdit = $routeParams.comboID ? true : false;
        $scope.newCombo = {};
        $scope.init = function() {
            $scope.combos = comboProductservice.getComboList();
        }

        $scope.newFn = function() {
            $scope.newCombo = comboProductservice.getTemp();
        };

        $scope.addCombo = function() {
            $scope.newCombo.id = guid();
            $scope.combos.push($scope.newCombo);
            $scope.newFn();
            comboProductservice.clearTemp();
        };
        $scope.clearData = function() {
            comboProductservice.clearTemp();
        };
        $scope.deleteCombo = function(id) {
            comboProductservice.deleteCombo(id);

        };
        $scope.setTemp = function() {
            //$scope.newCart.cartName = "555";
            comboProductservice.setTemp($scope.newCombo);
        };
        $scope.removeItem = function(index) {
                $scope.newCombo.floor.splice(index, 1);
            },

            $scope.setVal = function() {
                // alert('');
                // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
                var result = comboProductservice.getCombo($scope.combos, $routeParams.comboID);
                console.log(result);
                if (result) {
                    $scope.newCombo = result;
                    $scope.setProduct();
                }

            };

        $scope.editFn = function() {
            comboProductservice.clearTemp();
        };
        $scope.setProduct = function() {
            if ($routeParams.floorId && $routeParams.comboID) {
                for (var i = 0; i < $scope.newCombo.floor.length; i++) { //หาชั้นที่จะแอดค่า
                    if ($routeParams.floorId == i + 1) {
                        var cartProducts = $scope.newCombo.floor[i].comboProd;
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
            console.log($scope.newCombo);
            var addItems = [];
            for (var i = 0; i < $scope.product.length; i++) {
                console.log($scope.product[i]);
                if ($scope.product[i].qty > 0) {
                    addItems.push($scope.product[i]);
                }
            }
            console.log($scope.newCombo);
            if (!$routeParams.comboID) {

            } else {
                $scope.newCombo = comboProductservice.getTemp();

            }
            for (var i = 0; i < $scope.newCombo.floor.length; i++) {
                if ($routeParams.floorId == i + 1) {
                    $scope.newCombo.floor[i].comboProd = addItems;
                    break;
                }
            }
        };

        $scope.init();

        if ($routeParams.comboID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }



        $scope.cart = ["Cart 001A", "Cart 002B", "Cart 003C", "Cart 004D", "Cart 005E", "Cart 006F", "Cart 007G", "Cart 008H"];
        $scope.img = ["images/hamburger.jpg", "images/Macaroni.jpg", "images/salad.jpg", "images/sandwich.jpg", "images/sapagetti.jpg"]

        
        $scope.limitNumber = 5;
        $scope.runNumber = 0;
        $scope.comboSet = [
            { "id": 1, "badge": 10, "img": "http://www.airasia.com/cdn/aa-images/common/meal/kmcb-skysales.png?sfvrsn=2" },
            { "id": 2, "badge": 23, "img": "http://aa-storage-int.s3.amazonaws.com/aa-images/common/meal/spcb-dotrez.png?sfvrsn=4" },
            { "id": 3, "badge": 1, "img": "http://aa-storage-int.s3.amazonaws.com/aa-images/common/meal/ak-sdak.png" },
            { "id": 4, "badge": 4, "img": "http://aa-storage-int.s3.amazonaws.com/aa-images/common/aameal-NLCB_7.png?sfvrsn=2" },
            { "id": 5, "badge": 8, "img": "http://aa-storage-int.s3.amazonaws.com/aa-images/common/aameal-swcb2.png?sfvrsn=2" },
            { "id": 6, "badge": 2, "img": "http://aa-storage-int.s3.amazonaws.com/aa-images/common/aameal-CRCB_131.png?sfvrsn=2" },
            { "id": 7, "badge": 30, "img": "http://aa-storage-int.s3.amazonaws.com/aa-images/common/aameal-BRCB_7.png?sfvrsn=2" },
            { "id": 8, "badge": 25, "img": "http://aa-storage-int.s3.amazonaws.com/aa-images/common/meal/ak-sdak.png" }
        ];
        $scope.scrollLeft = function() {
            if ($scope.runNumber > 0) {
                $scope.runNumber--;
            }
        };
        $scope.scrollRight = function() {
            if ($scope.runNumber < $scope.comboSet.length - $scope.limitNumber) {
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
    });
