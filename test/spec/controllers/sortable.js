'use strict';

describe('Controller: SortableCtrl', function () {

  // load the controller's module
  beforeEach(module('ngSortApp'));

  var SortableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SortableCtrl = $controller('SortableCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SortableCtrl.awesomeThings.length).toBe(3);
  });
});
