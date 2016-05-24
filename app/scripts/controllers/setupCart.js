'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('setupCartCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.cart = ["Cart 001A", "Cart 002B", "Cart 003C", "Cart 004D", "Cart 005E", "Cart 006F", "Cart 007G", "Cart 008H"];
        $scope.img = ["images/hamburger.jpg", "images/Macaroni.jpg", "images/salad.jpg", "images/sandwich.jpg", "images/sapagetti.jpg"]
        $scope.product = [{ name:"Humburger",
        					price:130,
        					qty:1,
        					img:"images/hamburger.jpg"},
        					{ name:"Humburger",
        					price:130,
        					qty:1,
        					img:"images/hamburger.jpg"},
        					{ name:"Humburger",
        					price:130,
        					qty:1,
        					img:"images/hamburger.jpg"},
        					{ name:"Humburger",
        					price:130,
        					qty:1,
        					img:"images/hamburger.jpg"},
        					{ name:"Humburger",
        					price:130,
        					qty:1,
        					img:"images/hamburger.jpg"},
        					{ name:"Humburger",
        					price:130,
        					qty:1,
        					img:"images/hamburger.jpg"},
        					{ name:"Humburger",
        					price:130,
        					qty:1,
        					img:"images/hamburger.jpg"},
        					{ name:"Humburger",
        					price:130,
        					qty:1,
        					img:"images/hamburger.jpg"},
        					{ name:"Humburger",
        					price:130,
        					qty:1,
        					img:"images/hamburger.jpg"}
        					];

    });