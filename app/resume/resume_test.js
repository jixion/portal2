

describe('portal.resume module', function() {
  'use strict';
  var $controller;
  var $rootScope;
  var resumeCtrl;
  beforeEach(function () {
    module('portal.resume');
    inject(function($injector){
      $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');
    });
    resumeCtrl = $controller('ResumeCtrl', { $scope: $rootScope });
  });
  it('should flockin work', function() {
    expect(resumeCtrl).toBeDefined();
  });
  it('should have the open resume object', function () {
    expect(resumeCtrl.resume).toBeDefined();
  })

});