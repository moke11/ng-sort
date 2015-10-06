'use strict';

describe('Controller: PivottestCtrl', function () {

  // load the controller's module
  beforeEach(module('ngSortApp'));

  var PivottestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PivottestCtrl = $controller('PivottestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PivottestCtrl.awesomeThings.length).toBe(3);
  });
});
