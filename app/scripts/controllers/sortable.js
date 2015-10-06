'use strict';

/**
 * @ngdoc function
 * @name ngSortApp.controller:SortableCtrl
 * @description
 * # SortableCtrl
 * Controller of the ngSortApp
 */
angular.module('ngSortApp')
  .controller('SortableCtrl', function ($scope) {


    $scope.items = [{
      name: 'pancakes',
      displayorder: 1,
    }, {
      name: 'sausage',
      displayorder: 2,
    }]

    $scope.sortableOptions = {
      containment: '#sortableContainer',
      orderChanged: function(event){
        console.log(event.source);
        console.log(event.dest);
      }
    };
  });
