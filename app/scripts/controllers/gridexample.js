'use strict';

/**
 * @ngdoc function
 * @name ngSortApp.controller:GridexampleCtrl
 * @description
 * # GridexampleCtrl
 * Controller of the ngSortApp
 */
angular.module('ngSortApp')
  .controller('GridExampleCtrl', function ($scope) {
    $scope.myData = [
      {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
      },
      {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
      },
      {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
      }
    ];
  });
