'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
  .controller('promotionDiscountCtrl', function ($scope, promotionDiscountService, $filter, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.promotions = []; 
        $scope.isEdit = $routeParams.promotionID ? true : false; 
        $scope.newPromotion = {}; 
        $scope.init = function() { 
            $scope.promotions = promotionDiscountService.getPromotionList(); 
        } 

        $scope.newFn = function() { 
            $scope.newPromotion = {}; 
        }; 

        $scope.addPromotion = function() { 
            $scope.newPromotion.id = guid(); 
            $scope.promotions.push($scope.newPromotion); 
            $scope.newFn(); 
        }; 

 
        $scope.setVal = function() { 
           // alert(''); 
           // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID }); 
           var result = promotionDiscountService.getPromotion($scope.promotions,$routeParams.promotionID ); 
            console.log(result); 
            if (result) { 
                $scope.newPromotion = result; 
            } 

        }; 

        $scope.editFn = function() { 
            // 
        }; 
        $scope.init(); 

        if ($routeParams.promotionID) { 
            $scope.setVal(); 
        } else { 
            $scope.newFn(); 
        } 

 

 

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
