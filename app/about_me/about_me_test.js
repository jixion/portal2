

describe('portal.about_me module', function() {
  'use strict';
  var $controller;
  var $rootScope;
  var $httpBackend;
  beforeEach(function () {
    module('portal.about_me');
    module(function ($provide) {
      $provide.constant('WOW_API_HOST', '');
      $provide.constant('WOW_API_KEY', '');
      $provide.constant('WOW_API_GRAPHICS', '');
    });
    inject(function($injector){
      $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');
      $httpBackend = $injector.get('$httpBackend');
    });
    $httpBackend.whenGET(/character.*/).respond(200, {});
  });

  describe('about_me controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var aboutMeCtrl = $controller('AboutMeCtrl');
      expect(aboutMeCtrl).toBeDefined();
      $httpBackend.flush();
      expect(aboutMeCtrl.ready).toEqual(true);
    }));

  });
});