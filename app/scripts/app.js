'use strict';

/**
 * @ngdoc overview
 * @name inflightHubApp
 * @description
 * # inflightHubApp
 *
 * Main module of the application.
 */
angular
    .module('inflightHubApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })

        .when('/setupCart', {
            templateUrl: 'views/setupCart.html',
            controller: 'setupCartCtrl',
            controllerAs: 'setupCart'

        })
        .when('/blackList', {
            templateUrl: 'views/blackList.html',
            controller: 'blackListCtrl',
            controllerAs: 'blackList'

        })
        .when('/promotionDiscount', {
            templateUrl: 'views/promotionDiscount.html',
            controller: 'promotionDiscountCtrl',
            controllerAs: 'promotionDiscount'

        })
        .when('/comboProduct', {
            templateUrl: 'views/comboProduct.html',
            controller: 'comboProductCtrl',
            controllerAs: 'comboProduct'

        })
        .when('/exchangeMoney', {
            templateUrl: 'views/exchangeMoney.html',
            controller: 'exchangeMoneyCtrl',
            controllerAs: 'exchangeMoney'

        })
        .when('/dailyAmount', {
            templateUrl: 'views/dailyAmount.html',
            controller: 'dailyAmountCtrl',
            controllerAs: 'dailyAmount'

        })
        .when('/dailyFlight', {
            templateUrl: 'views/dailyFlight.html',
            controller: 'dailyFlightCtrl',
            controllerAs: 'dailyFlight'

        })
        .when('/dailyIncluded', {
            templateUrl: 'views/dailyIncluded.html',
            controller: 'dailyIncludedCtrl',
            controllerAs: 'dailyIncluded'

        })
        .when('/dailyExcluded', {
            templateUrl: 'views/dailyExcluded.html',
            controller: 'dailyExcludedCtrl',
            controllerAs: 'dailyExcluded'

        })

        .when('/uploadCart', {
                templateUrl: 'views/uploadCart.html',
                controller: 'uploadCartCtrl',
                controllerAs: 'uploadCart'

            })
            .otherwise({
                redirectTo: '/'
            });
    });
