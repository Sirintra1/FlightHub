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
                name: "Salad",
                price: 100,
                qty: 1,
                img: "images/sandwich.jpg"
            }]
        }, {
            floorId: 2,
            proProd: [{
                name: "Sandwich",
                price: 78,
                qty: 1,
                img: "images/sandwich.jpg"
            }]
        }],
        floorFree: [{
            floorFreeId: 1,
            proFree: [{
                name: "Soup",
                price: 100,
                qty: 1,
                img: "images/soup.jpg"
            }]
        }, {
            floorFreeId: 2,
            proFree: [{
                name: "Steak",
                price: 78,
                qty: 1,
                img: "images/steak.jpg"
            }]
        }]
    }];
    var varTemp = {
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
            }]
        };
    };
    var addType = "";
    this.setAddProductType = function(type){
        
        if(type == "addProduct"){
            addType = "addProduct";
        } else if(type == "addFreeProduct"){
            addType = "addFreeProduct";
        } else{
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
    
    this.getAddProductType = function(){
        return addType;
    }
});
