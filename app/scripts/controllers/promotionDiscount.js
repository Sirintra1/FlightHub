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
            id: 1,
            cate: "Food",
            name: "KoloMee",
            price: 130,
            qty: 0,
            img: "images/food/AK-1-KoloMee.png"
        }, {
            id: 2,
            cate: "Food",
            name: "Shepherds Pie",
            price: 230,
            qty: 0,
            img: "images/food/AK-2-ShepherdsPie.png"
        }, {
            id: 3,
            cate: "Food",
            name: "Pak Nassers Nasi Lemak",
            price: 100,
            qty: 0,
            img: "images/food/AK-6-PakNassersNasiLemak.png"
        }, {
            id: 4,
            cate: "Food",
            name: "Nasi Dagang with Chicken Curry",
            price: 90,
            qty: 0,
            img: "images/food/AK-7-NasiDagangwithChickenCurry.png"
        }, {
            id: 5,
            cate: "Food",
            name: "Tomato Rice with Ayam Percik",
            price: 146,
            qty: 0,
            img: "images/food/AK-8-TomatoRicewithAyamPercik.png"
        }, {
            id: 6,
            cate: "Food",
            name: "Roast Chicken with Cream Sauce",
            price: 99,
            qty: 0,
            img: "images/food/AK-11-RoastChickenwithCreamSauce.png"
        }, {
            id: 7,
            cate: "Food",
            name: "Ginger Fried Rice Vegetarian Chicken",
            price: 78,
            qty: 0,
            img: "images/food/AK-12-GingerFriedRicewithVegetarianChickenV.png"
        }, {
            id: 8,
            cate: "Food",
            name: "Vegetable Briyani",
            price: 340,
            qty: 0,
            img: "images/food/AK-13-VegetableBriyaniV.png"
        }, {
            id: 9,
            cate: "Food",
            name: "Chicken Rice",
            price: 120,
            qty: 0,
            img: "images/food/AK-14-ChickenRice.png"
        }, {
            id: 10,
            cate: "Drink",
            name: "Water",
            price: 20,
            qty: 0,
            img: "images/drink/1-Water.jpg"
        }, {
            id: 11,
            cate: "Drink",
            name: "Pepsi",
            price: 50,
            qty: 0,
            img: "images/drink/2-Pepsi.jpg"
        }, {
            id: 12,
            cate: "Drink",
            name: "Cocacola",
            price: 50,
            qty: 0,
            img: "images/drink/3-Cocacola.jpg"
        }, {
            id: 13,
            cate: "Drink",
            name: "Green Fanta",
            price: 30,
            qty: 0,
            img: "images/drink/4-GreenFanta.jpg"
        }, {
            id: 14,
            cate: "Drink",
            name: "Red Fanta",
            price: 30,
            qty: 0,
            img: "images/drink/5-RedFanta.jpg"
        }, {
            id: 15,
            cate: "Drink",
            name: "Orange Fanta",
            price: 30,
            qty: 0,
            img: "images/drink/6-OrangeFanta.jpg"
        }, {
            id: 16,
            cate: "Drink",
            name: "Sprite",
            price: 30,
            qty: 0,
            img: "images/drink/7-sprite.jpg"
        }, {
            id: 17,
            cate: "Fast",
            name: "Chicken Satay Wrap",
            price: 30,
            qty: 0,
            img: "images/fast/AK-9-ChickenSatayWrap.png"
        }, {
            id: 18,
            cate: "Fast",
            name: "Chicken Tikka Sandwich",
            price: 30,
            qty: 0,
            img: "images/fast/I5-13-ChickenTikkaSandwichwithMintMayo.jpg"
        }, {
            id: 19,
            cate: "Fast",
            name: "Assorted Sandwiches",
            price: 30,
            qty: 0,
            img: "images/fast/QC-12-AssortedSandwiches.png"
        }, {
            id: 20,
            cate: "Fast",
            name: "CornBell Peppers Sandwich",
            price: 30,
            qty: 0,
            img: "images/fast/I5-14-CornBellPeppersSandwichwithPestoMayoInMarbleBread.jpg"
        }, {
            id: 21,
            cate: "Fast",
            name: "Frankster Chicken",
            price: 30,
            qty: 0,
            img: "images/fast/QC-10-FranksterChicken.png"
        }, {
            id: 22,
            cate: "Fast",
            name: "Deli Chicken Focaccia Sandwich",
            price: 30,
            qty: 0,
            img: "images/fast/XJ-7-DeliChickenFocacciaBreadSandwich.jpg"
        }, {
            id: 23,
            cate: "Dessert",
            name: "Pancakes Maple Syrup Butter",
            price: 30,
            qty: 0,
            img: "images/dessert/QC-8-PancakesMapleSyrupButter.png"
        }, {
            id: 24,
            cate: "Dessert",
            name: "Banana Cake with Malee OrangeJ uice",
            price: 30,
            qty: 0,
            img: "images/dessert/XJ-16-BananaCakewithMaleeOrangeJuice.jpg"
        }, {
            id: 25,
            cate: "Dessert",
            name: "Yamanishi Mochi",
            price: 30,
            qty: 0,
            img: "images/dessert/XJ-15-YamanishiMochi.png"
        }, {
            id: 26,
            cate: "combo",
            name: "Macand Cheese Ribena",
            price: 30,
            qty: 0,
            img: "images/combo/AK-5-KidsMealMacandCheeseRibena.png"
        }, {
            id: 27,
            cate: "Combo",
            name: "Roti Canai With ChickenCurry",
            price: 30,
            qty: 0,
            img: "images/combo/AK-4-RotiCanaiWithChickenCurryTehTarik.png"
        }, {
            id: 28,
            cate: "Combo",
            name: "American Breakfast Set",
            price: 30,
            qty: 0,
            img: "images/combo/XJ-13-AmericanBreakfastSet.jpg"
        }, {
            id: 29,
            cate: "Combo",
            name: "Mee Goreng Mamak TehTarik",
            price: 30,
            qty: 0,
            img: "images/combo/AK-3-MeeGorengMamakTehTarik.png"
        }, {
            id: 30,
            cate: "Combo",
            name: "Chicken Rice Soup Set",
            price: 30,
            qty: 0,
            img: "images/combo/XJ-12-ChickenRiceSoupSet.jpg"
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
            for (var i = 0; i < $scope.product.length; i++) {
                if ($scope.product[i].name == item.name) {
                    item.qty += 1;
                } else {
                    $scope.product[i].qty = 0;
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


        
        $scope.food = $filter("filter")($scope.product, { cate: "Food" });
        $scope.drink = $filter("filter")($scope.product, { cate: "Drink" });
        $scope.fast = $filter("filter")($scope.product, { cate: "Fast" });
        $scope.dessert = $filter("filter")($scope.product, { cate: "Dessert" });
        $scope.combo = $filter("filter")($scope.product, { cate: "Combo" });

        $scope.productType = "Food";
        $scope.changeType = function(type) {
            $scope.productType = type;
        };
    });
