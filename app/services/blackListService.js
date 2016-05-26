'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('blackListService', function() {


    // var fileName_select = "";
    //     $scope.fileNameList = [];
    //     $scope.fileName = {
    //         "id": guid(),
    //         "name": "xxx"
    //     };

    //     $('#fileSelected').on('change', function(evt) {
    //         var files = $(evt.currentTarget).get(0).files;

    //         if (files.length > 0) {
    //             fileName_select = files[0].name;
    //         }
    //     });
    var blackLists = [{
        "id": 1,
        "name": "aaa",
        "listIds": [{
            "id": 1,
            "cardID": "11111111111"
        }, {
            "id": 2,
            "cardID": "22222222222"
        }]
    }];

    // $scope.addFileName = function() {
    //     $scope.fileName.name = fileName_select;
    //     $scope.fileNameList.push($scope.fileName);
    //     $scope.fileName = {};
    // };


    // $scope.bank = [{ Name: "SCB", people: 34 },
    //     { Name: "TMB", people: 37 },
    //     { Name: "KTB", people: 55 },
    //     { Name: "BBL", people: 23 },
    //     { Name: "GHB", people: 65 }
    // ];
    // $scope.human = [3985763094, 2938574938, 0985673923, 2048463930, 3048364839, 456584937565, 03836576958];

    this.getBlackLists = function() {
        return blackLists;
    }

    this.getBlackList = function(id) {
        var result = {};
        for (var i = 0; i < blackLists.length; i++) {
            if (blackLists[i].id == id) {
                result = blackLists[i];
                break;
            }
        }
        return result;
    };


    this.addBlackList = function(item) {
        blackLists.push(item);
    };


    this.getFileNameList = function() {
        return fileName;
    };

    this.getFileName = function(arr, id) {
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

    this.deleteBlackList = function(id) {
        for (var i = 0; i < blackLists.length; i++) {
            if (blackLists[i].id == id) {
                blackLists.splice(i, 1);
                break;
            }
        }
        return blackLists;
    };

});
