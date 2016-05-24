'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
.controller('uploadCartAddController', function ($scope,$routeParams, uploadCartService) {
    

    $scope.uploads = uploadCartService.getUploads();
     for(var i=0 ; i<$scope.uploads.length;i++){
            console.log($scope.uploads[i]);
            if($scope.uploads[i].id == $routeParams.uploadID){
                console.log($scope.uploads[i]);
                $scope.showUpload = $scope.uploads[i];
                // $scope.products.splice(i, 1);
                break;
            }
            
        }
});