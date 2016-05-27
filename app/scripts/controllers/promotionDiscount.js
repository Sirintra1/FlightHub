'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('promotionDiscountCtrl', function($scope, promotionDiscountService, $filter, $routeParams) {
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
        $scope.promotionID = $routeParams.promotionID;
        $scope.promotions = [];
        $scope.isEdit = $routeParams.promotionID ? true : false;
        $scope.newPromotion = {};
        $scope.init = function() {
            $scope.promotions = promotionDiscountService.getPromotionList();
        }

        $scope.newFn = function() {
            $scope.newPromotion = promotionDiscountService.getTemp();
        };

        $scope.setTemp = function() {
            //$scope.newCart.cartName = "555";
            promotionDiscountService.setTemp($scope.newPromotion);
        };
        $scope.addPromotion = function() {
            $scope.newPromotion.id = guid();
            $scope.promotions.push($scope.newPromotion);
            $scope.newFn();
            promotionDiscountService.clearTemp();
        };

        $scope.clearData = function() {
             promotionDiscountService.clearTemp();
        }; 

        $scope.addFloor = function() {
            $scope.newPromotion.floorProduct.push({
                floorId: ($scope.newPromotion.floorProduct.length + 1),
                proProd: []
            });
            console.log($scope.newPromotion);
        };

        $scope.addFloor2 = function() {
            $scope.newPromotion.floorFree.push({
                floorFreeId: ($scope.newPromotion.floorFree.length + 1),
                proProd: []
            });
            console.log($scope.newPromotion);
        };

         $scope.deletePromotion = function(id){
            promotionDiscountService.deletePromotion(id);
        };

        $scope.removeItem = function(index) {
                $scope.newPromotion.floorProduct.splice(index, 1);
            },
            $scope.removeItem2 = function(index) {
                $scope.newPromotion.floorFree.splice(index, 1);
            },


        $scope.setVal = function() {
            // alert(''); 
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID }); 
            var result = promotionDiscountService.getPromotion($scope.promotions, $routeParams.promotionID);
            console.log(result);
            if (result) {
                $scope.newPromotion = result;
            }

        };

        $scope.editFn = function() {
            promotionDiscountService.clearTemp();
        };

        $scope.setAddTypeVal = "";
        $scope.getAddTypeVal = "";
        $scope.setAddType = function(addType) {
            $scope.setAddTypeVal = addType;
            promotionDiscountService.setAddProductType($scope.setAddTypeVal);
        }
        $scope.addProduct = function() {
            console.log($scope.newPromotion);
            var addItems = [];
            for (var i = 0; i < $scope.product.length; i++) {
                console.log($scope.product[i]);
                if ($scope.product[i].qty > 0) {
                    addItems.push($scope.product[i]);
                }
            }
            console.log($scope.newPromotion);
            if (!$routeParams.promotionID) {

            } else {
                $scope.newPromotion = promotionDiscountService.getTemp();
            }
            $scope.getAddTypeVal = promotionDiscountService.getAddProductType();
            if ($scope.getAddTypeVal == "addProduct") {
                for (var i = 0; i < $scope.newPromotion.floorProduct.length; i++) {
                    if ($routeParams.floorId == i + 1) {
                        $scope.newPromotion.floorProduct[i].proProd = addItems;
                        $scope.isAddProduct = false;
                        break;
                    }
                }
            }

            if ($scope.getAddTypeVal == "addFreeProduct") {
                for (var i = 0; i < $scope.newPromotion.floorFree.length; i++) {
                    if ($routeParams.floorId == i + 1) {
                        $scope.newPromotion.floorFree[i].proFree = addItems;
                        $scope.isAddFreeProduct = false;
                        break;
                    }
                }
            }
            promotionDiscountService.setAddProductType("");
        };
        $scope.init();

        if ($routeParams.promotionID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }


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


        // $scope.Promotion = ["Buy 500 Discount 100 THB.", "Buy 500 Discount 90 THB.", "Buy 3 Coke Free 1 Water", ];
        // $scope.product = [{
        //     name: "Coke",
        //     qty: 1,
        //     detail: "Outbound (cart 3)",
        //     detailadd: "Left Front Outbound"
        // }, {
        //     name: "Snack",
        //     qty: 3,
        //     detail: "inbound (cart 5)",
        //     detailadd: "Left Front Inbound"
        // }, {
        //     name: "Banana",
        //     qty: 5,
        //     detail: "Outbound (cart 1)",
        //     detailadd: "Left Front Outbound"
        // }];
    });
