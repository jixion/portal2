

describe('portal.space module', function() {
    'use strict';
    var $controller;
    var $rootScope;
    var $httpBackend;
    var getApodReturn = {
        data:
            {
                hdurl: 'test',
                explanation: 'test',
                date: 'test',
                title: 'adsf'
            }
    };
    var getNeoReturn = {};
    var getIssReturn = {};
    beforeEach(function () {
        module('portal.space');
        module(function ($provide) {
           $provide.constant('NASA_API_HOST', '');
           $provide.constant('NASA_NEO_HOST', '');
           $provide.constant('NASA_API_KEY', '');
        });
        inject(function($injector){
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
        });
        $httpBackend.whenGET(/apod.*/).respond(200, getApodReturn);
        $httpBackend.whenGET(/feed.*/).respond(200, getNeoReturn);
        $httpBackend.whenGET(/iss-now.json/).respond(200, getIssReturn);
    });

    it('should ....', inject(function($controller) {
        //spec body
        var spaceCtrl = $controller('SpaceCtrl');
        expect(spaceCtrl).toBeDefined();
        $httpBackend.flush();
        expect(spaceCtrl.ready1).toEqual(true);
    }));
});