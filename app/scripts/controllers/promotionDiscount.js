'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('promotionDiscountCtrl', function($scope, productService,promotionDiscountService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.productPro = productService.getProduct();

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
            for (var i = 0; i < $scope.productPro.length; i++) {
                console.log($scope.productPro[i]);
                if ($scope.productPro[i].qty > 0) {
                    addItems.push($scope.productPro[i]);
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
            for (var i = 0; i < $scope.productPro.length; i++) {
                if ($scope.productPro[i].name == item.name) {
                    item.qty += 1;
                } else {
                    $scope.productPro[i].qty = 0;
                }
            }
        };
        $scope.clickRemove = function(item) {
            if (item.qty > 0) {
                item.qty -= 1;
                return true;
            } else {
                return false;
            }
        };


        
        $scope.food = $filter("filter")($scope.productPro, { cate: "Food" });
        $scope.drink = $filter("filter")($scope.productPro, { cate: "Drink" });
        $scope.fast = $filter("filter")($scope.productPro, { cate: "Fast" });
        $scope.dessert = $filter("filter")($scope.productPro, { cate: "Dessert" });
        $scope.combo = $filter("filter")($scope.productPro, { cate: "Combo" });

        $scope.productType = "Food";
        $scope.changeType = function(type) {
            $scope.productType = type;
        };
    });
