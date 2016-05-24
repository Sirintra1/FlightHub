'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('comboProductCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        // $scope.cart = ["Cart 001A", "Cart 002B", "Cart 003C", "Cart 004D", "Cart 005E", "Cart 006F", "Cart 007G", "Cart 008H"];
        // $scope.img = ["images/hamburger.jpg", "images/Macaroni.jpg", "images/salad.jpg", "images/sandwich.jpg", "images/sapagetti.jpg"]
        // $scope.product = [{
        //     name: "Humburger",
        //     price: 130,
        //     qty: 1,
        //     img: "images/hamburger.jpg"
        // }, {
        //     name: "Humburger",
        //     price: 130,
        //     qty: 1,
        //     img: "images/hamburger.jpg"
        // }, {
        //     name: "Humburger",
        //     price: 130,
        //     qty: 1,
        //     img: "images/hamburger.jpg"
        // }, {
        //     name: "Humburger",
        //     price: 130,
        //     qty: 1,
        //     img: "images/hamburger.jpg"
        // }, {
        //     name: "Humburger",
        //     price: 130,
        //     qty: 1,
        //     img: "images/hamburger.jpg"
        // }, {
        //     name: "Humburger",
        //     price: 130,
        //     qty: 1,
        //     img: "images/hamburger.jpg"
        // }, {
        //     name: "Humburger",
        //     price: 130,
        //     qty: 1,
        //     img: "images/hamburger.jpg"
        // }, {
        //     name: "Humburger",
        //     price: 130,
        //     qty: 1,
        //     img: "images/hamburger.jpg"
        // }, {
        //     name: "Humburger",
        //     price: 130,
        //     qty: 1,
        //     img: "images/hamburger.jpg"
        // }];

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
    });
