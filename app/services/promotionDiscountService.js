'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('promotionDiscountService', function() {

    var promotions = [{
        id: 1,
        promotionName: "Buy 500 THB. Free Coke 1 Qty",
        proBy: ['By Bill', 'By Product'],
        percent: "20 %",
        bath: 100,
        offerBuy: "Test",
        card: "Test2",
        floorProduct: [{
            floorId: 1,
            proProd: [{
                id: 10,
                cate: "Drink",
                name: "Water",
                price: 20,
                stock: 37,
                qty: 1,
                img: "images/drink/1-Water.jpg"
            }]
        }, {
            floorId: 2,
            proProd: [{
                id: 1,
                cate: "Food",
                name: "KoloMee",
                price: 130,
                stock: 9,
                qty: 1,
                img: "images/food/AK-1-KoloMee.png"
            }]
        }],
        floorFree: [{
            floorFreeId: 1,
            proFree: [{
                id: 16,
                cate: "Drink",
                name: "Sprite",
                price: 30,
                stock: 67,
                qty: 1,
                img: "images/drink/7-sprite.jpg"
            }]
        }, {
            floorFreeId: 2,
            proFree: [{
                id: 25,
                cate: "Dessert",
                name: "Yamanishi Mochi",
                price: 30,
                stock: 36,
                qty: 1,
                img: "images/dessert/XJ-15-YamanishiMochi.png"
            }]
        }],
        floorOffer: [{
            floorOfferId: 1,
            proOffer: [{
                id: 16,
                cate: "Drink",
                name: "Sprite",
                price: 30,
                stock: 67,
                qty: 1,
                img: "images/drink/7-sprite.jpg"
            }]
        }, {
            floorOfferId: 2,
            proOffer: [{
                id: 25,
                cate: "Dessert",
                name: "Yamanishi Mochi",
                price: 30,
                stock: 36,
                qty: 1,
                img: "images/dessert/XJ-15-YamanishiMochi.png"
            }]
        }]
    }];
    var varTemp = {
        id: guid(),
        promotionName: "",
        proBy: "ByBill",
        percent: 0,
        bath: 0,
        offerBuy: "",
        card: "",
        floorProduct: [{
            floorId: 1,
            proProd: []
        }],
        floorFree: [{
            floorFreeId: 1,
            proFree: []
        }],
        floorOffer: [{
            floorOfferId: 1,
            proOffer: []
        }]
    };

    // var promotions = [{
    //     id: 1,
    //     promotionName: "Buy 500 THB. Free Coke 1 Qty."
    // }, {
    //     id: 2,
    //     promotionName: "Buy 3 Coke Free 1 Water"
    // }];

    this.getPromotionList = function() {
        return promotions;
    };

    this.getPromotion = function(arr, id) {
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    return arr[i];
                }
            }
            return [];
        }
        return [];

    };

    this.getTemp = function() {
        return varTemp;
    };
    this.setTemp = function(item) {
        varTemp = item;
    };
    this.clearTemp = function() {
        varTemp = {
            id: guid(),
            promotionName: "",
            proBy: "",
            percent: 0,
            bath: 0,
            offerBuy: "",
            card: "",
            floorProduct: [{
                floorId: 1,
                proProd: []
            }],
            floorFree: [{
                floorFreeId: 1,
                proFree: []
            }],
            floorOffer: [{
                floorOfferId: 1,
                proOffer: []
            }]
        };
    };
    var addType = "";
    this.setAddProductType = function(type) {

        if (type == "addProduct") {
            addType = "addProduct";
        } else if (type == "addFreeProduct") {
            addType = "addFreeProduct";
        } else if (type == "addOfferProduct") {
            addType = "addOfferProduct";
        } else {
            addType = "";
        }
    };

    this.deletePromotion = function(id) {
        for (var i = 0; i < promotions.length; i++) {
            if (promotions[i].id == id) {
                promotions.splice(i, 1);
                break;
            }
        }
        return promotions;
    };

    this.getAddProductType = function() {
        return addType;
    }
});
