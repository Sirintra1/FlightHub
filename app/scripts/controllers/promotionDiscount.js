'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
  .controller('promotionDiscountCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.Promotion = ["Buy 500 Discount 100 THB.","Buy 500 Discount 90 THB.","Buy 3 Coke Free 1 Water", ];
    $scope.product = [{ 	
        					name:"Coke",
        					qty:1,
        					detail:"Outbound (cart 3)",
        					detailadd:"Left Front Outbound"
        				},{ 
        					name:"Snack",
        					qty:3,
        					detail:"inbound (cart 5)",
        					detailadd:"Left Front Inbound"
        				},{ 
        					name:"Banana",
        					qty:5,
        					detail:"Outbound (cart 1)",
        					detailadd:"Left Front Outbound"
        				}
        				];
  });
