'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('blackListCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.bank = [{ Name: "SCB", people: 34 },
            { Name: "TMB", people: 37  },
            { Name: "KTB", people: 55  },
            { Name: "BBL", people: 23  },
            { Name: "GHB", people: 65  }
        ];
    	$scope.human = [3985763094,2938574938,0985673923,2048463930,3048364839,456584937565,03836576958];
});
