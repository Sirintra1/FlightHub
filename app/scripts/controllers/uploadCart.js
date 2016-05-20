'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
  .controller('uploadCartCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.cart = ["Cart 001A", "Cart 002B", "Cart 003C", "Cart 004D", "Cart 005E", "Cart 006F", "Cart 007G", "Cart 008H"];
        // $scope.img = ["images/hamburger.jpg", "images/Macaroni.jpg", "images/salad.jpg", "images/sandwich.jpg", "images/sapagetti.jpg"]
        $scope.product = [{ cart:"Cart 001A",
        					name:"Flight No. AK25",
        					detail:"Outbound (cart 3)",
        					detailadd:"Left Front Outbound"
        				},{ cart:"Cart 002B",
        					name:"Flight No. FD11",
        					detail:"inbound (cart 5)",
        					detailadd:"Left Front Inbound"
        				},{ cart:"Cart 003C",
        					name:"Flight No. EX8",
        					detail:"Outbound (cart 1)",
        					detailadd:"Left Front Outbound"
        				},{ cart:"Cart 004D",
        					name:"Flight No. TG33",
        					detail:"Outbound (cart 2)",
        					detailadd:"Left Front Outbound"
        				},{ cart:"Cart 005E",
        					name:"Flight No. PL88",
        					detail:"inbound (cart 3)",
        					detailadd:"Left Front Inbound"
        				}
        				];
  });
