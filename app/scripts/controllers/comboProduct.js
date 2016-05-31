'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('comboProductCtrl', function($scope, productService,comboProductservice, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

          $scope.productCom = [{
            id: 1,
            cate: "Food",
            name: "KoloMee",
            price: 130,
            stock:10,
            qty: 0,
            img: "images/food/AK-1-KoloMee.png"
        }, {
            id: 2,
            cate: "Food",
            name: "Shepherds Pie",
            price: 230,
            stock:10,
            qty: 0,
            img: "images/food/AK-2-ShepherdsPie.png"
        }, {
            id: 3,
            cate: "Food",
            name: "Pak Nassers Nasi Lemak",
            price: 100,
            stock:10,
            qty: 0,
            img: "images/food/AK-6-PakNassersNasiLemak.png"
        }, {
            id: 4,
            cate: "Food",
            name: "Nasi Dagang with Chicken Curry",
            price: 90,
            stock:100,
            qty: 0,
            img: "images/food/AK-7-NasiDagangwithChickenCurry.png"
        }, {
            id: 5,
            cate: "Food",
            name: "Tomato Rice with Ayam Percik",
            price: 146,
            stock:100,
            qty: 0,
            img: "images/food/AK-8-TomatoRicewithAyamPercik.png"
        }, {
            id: 6,
            cate: "Food",
            name: "Roast Chicken with Cream Sauce",
            price: 99,
            stock:100,
            qty: 0,
            img: "images/food/AK-11-RoastChickenwithCreamSauce.png"
        }, {
            id: 7,
            cate: "Food",
            name: "Ginger Fried Rice",
            price: 78,
            stock:100,
            qty: 0,
            img: "images/food/AK-12-GingerFriedRicewithVegetarianChickenV.png"
        }, {
            id: 8,
            cate: "Food",
            name: "Vegetable Briyani",
            price: 340,
            stock:100,
            qty: 0,
            img: "images/food/AK-13-VegetableBriyaniV.png"
        }, {
            id: 9,
            cate: "Food",
            name: "Chicken Rice",
            price: 120,
            stock:100,
            qty: 0,
            img: "images/food/AK-14-ChickenRice.png"
        }, {
            id: 10,
            cate: "Drink",
            name: "Water",
            price: 20,
            stock:100,
            qty: 0,
            img: "images/drink/1-Water.jpg"
        }, {
            id: 11,
            cate: "Drink",
            name: "Pepsi",
            price: 50,
            stock:100,
            qty: 0,
            img: "images/drink/2-Pepsi.jpg"
        }, {
            id: 12,
            cate: "Drink",
            name: "Cocacola",
            price: 50,
            stock:100,
            qty: 0,
            img: "images/drink/3-Cocacola.jpg"
        }, {
            id: 13,
            cate: "Drink",
            name: "Green Fanta",
            price: 30,
            stock:100,
            qty: 0,
            img: "images/drink/4-GreenFanta.jpg"
        }, {
            id: 14,
            cate: "Drink",
            name: "Red Fanta",
            price: 30,
            stock:100,
            qty: 0,
            img: "images/drink/5-RedFanta.jpg"
        }, {
            id: 15,
            cate: "Drink",
            name: "Orange Fanta",
            price: 30,
            stock:100,
            qty: 0,
            img: "images/drink/6-OrangeFanta.jpg"
        }, {
            id: 16,
            cate: "Drink",
            name: "Sprite",
            price: 30,
            stock:100,
            qty: 0,
            img: "images/drink/7-sprite.jpg"
        }, {
            id: 17,
            cate: "Fast",
            name: "Chicken Satay Wrap",
            price: 95,
            stock:100,
            qty: 0,
            img: "images/fast/AK-9-ChickenSatayWrap.png"
        }, {
            id: 18,
            cate: "Fast",
            name: "Chicken Tikka Sandwich",
            price: 65,
            stock:100,
            qty: 0,
            img: "images/fast/I5-13-ChickenTikkaSandwichwithMintMayo.jpg"
        }, {
            id: 19,
            cate: "Fast",
            name: "Assorted Sandwiches",
            price: 135,
            stock:100,
            qty: 0,
            img: "images/fast/QC-12-AssortedSandwiches.png"
        }, {
            id: 20,
            cate: "Fast",
            name: "CornBell Peppers Sandwich",
            price: 65,
            stock:100,
            qty: 0,
            img: "images/fast/I5-14-CornBellPeppersSandwichwithPestoMayoInMarbleBread.jpg"
        }, {
            id: 21,
            cate: "Fast",
            name: "Frankster Chicken",
            price: 65,
            stock:100,
            qty: 0,
            img: "images/fast/QC-10-FranksterChicken.png"
        }, {
            id: 22,
            cate: "Fast",
            name: "Deli Chicken Focaccia Sandwich",
            price: 125,
            stock:100,
            qty: 0,
            img: "images/fast/XJ-7-DeliChickenFocacciaBreadSandwich.jpg"
        }, {
            id: 23,
            cate: "Dessert",
            name: "Pancakes Maple Syrup Butter",
            price: 100,
            stock:100,
            qty: 0,
            img: "images/dessert/QC-8-PancakesMapleSyrupButter.png"
        }, {
            id: 24,
            cate: "Dessert",
            name: "Banana Cake with Malee",
            price: 120,
            stock:100,
            qty: 0,
            img: "images/dessert/XJ-16-BananaCakewithMaleeOrangeJuice.jpg"
        }, {
            id: 25,
            cate: "Dessert",
            name: "Yamanishi Mochi",
            price: 90,
            stock:100,
            qty: 0,
            img: "images/dessert/XJ-15-YamanishiMochi.png"
        }, {
            id: 26,
            cate: "combo",
            name: "Macand Cheese Ribena",
            price: 310,
            stock:100,
            qty: 0,
            img: "images/combo/AK-5-KidsMealMacandCheeseRibena.png"
        }, {
            id: 27,
            cate: "Combo",
            name: "Roti Canai With ChickenCurry",
            price: 290,
            stock:100,
            qty: 0,
            img: "images/combo/AK-4-RotiCanaiWithChickenCurryTehTarik.png"
        }, {
            id: 28,
            cate: "Combo",
            name: "American Breakfast Set",
            price: 300,
            stock:100,
            qty: 0,
            img: "images/combo/XJ-13-AmericanBreakfastSet.jpg"
        }, {
            id: 29,
            cate: "Combo",
            name: "Mee Goreng Mamak TehTarik",
            price: 270,
            stock:100,
            qty: 0,
            img: "images/combo/AK-3-MeeGorengMamakTehTarik.png"
        }, {
            id: 30,
            cate: "Combo",
            name: "Chicken Rice Soup Set",
            price: 250,
            stock:100,
            qty: 0,
            img: "images/combo/XJ-12-ChickenRiceSoupSet.jpg"
        }];

       // $scope.productCom = productService.getProduct();


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
            if ($routeParams.floorId && $routeParams.comboID && typeof $scope.newCombo.floor != "undefined") {
                for (var i = 0; i < $scope.newCombo.floor.length; i++) { //หาชั้นที่จะแอดค่า
                    if ($routeParams.floorId == i + 1) {
                        var cartProducts = $scope.newCombo.floor[i].comboProd;
                        for (var p = 0; p < $scope.productCom.length; p++) { //หาขนาดของโปรดัก
                            for (var j = 0; j < cartProducts.length; j++) { //หาขนาดของโปรดักที่อยู่ในรถเข็น
                                if ($scope.productCom[p].id == cartProducts[j].id) {
                                    $scope.productCom[p].qty = cartProducts[j].qty;
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
            for (var i = 0; i < $scope.productCom.length; i++) {
                console.log($scope.productCom[i]);
                if ($scope.productCom[i].qty > 0) {
                    addItems.push($scope.productCom[i]);
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
             item.stock -= 1;
        };
        $scope.clickRemove = function(item) {
            if (item.qty > 0) {
                item.qty -= 1;
                 item.stock += 1;
                return true;
            } else {
                return false;
            }
        };

        $scope.food = $filter("filter")($scope.productCom, { cate: "Food" });
        $scope.drink = $filter("filter")($scope.productCom, { cate: "Drink" });
        $scope.fast = $filter("filter")($scope.productCom, { cate: "Fast" });
        $scope.dessert = $filter("filter")($scope.productCom, { cate: "Dessert" });
        $scope.combo = $filter("filter")($scope.productCom, { cate: "Combo" });

        $scope.productType = "Food";
        $scope.changeType = function(type) {
            $scope.productType = type;
        };
    });
