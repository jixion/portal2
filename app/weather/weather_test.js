

describe('portal.weather module', function() {
    'use strict';
    var $controller;
    var $rootScope;
    var $httpBackend;
    var $scope;
    var apiResponse = { test: 'test' };
    beforeEach(function () {
        module('portal.weather');
        module(function ($provide) {
            $provide.constant('WXUG_HOST', '');
            $provide.constant('WXUG_API_KEY', '');
        });
        inject(function($injector){
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
        });
        $httpBackend.whenGET(/geolookup.*/).respond(200, apiResponse);
    });

    describe('weather controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var weatherCtrl = $controller('WeatherCtrl', { $scope: $scope });
            $httpBackend.flush();
            expect(weatherCtrl).toBeDefined();
            expect(weatherCtrl.owmResults).toBeDefined();
        }));

    });
});