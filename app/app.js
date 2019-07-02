// @flow

// Declare app level module which depends on views, and components
angular.module('portal', [
  'ngRoute',
  'ui.bootstrap',
  'portal.about_me',
  'portal.space',
  'portal.weather',
  'portal.resume'
])
    .config(['$locationProvider', '$routeProvider', '$compileProvider',
      function ($locationProvider, $routeProvider, $compileProvider) {
        var isLocal = location.host.match(/localhost/);
        $compileProvider.debugInfoEnabled(isLocal);
        $routeProvider.otherwise({ redirectTo: '/about_me' });
      }
    ])
    .constant('NASA_API_HOST', '/planetary/')
    .constant('NASA_API_KEY', '8b8ivohwBVjazxt1Ex7v0ScVEjh2yPTEjctGSHqn')
    .constant('NASA_NEO_HOST', '/neo/rest/v1/')
    .constant('WXUG_API_KEY', '8f5e2db418afff44')
    .constant('WXUG_HOST', '/api')
    .constant('WXUG_CITY', 'Fort_Lauderdale')
    .constant('WXUG_STATE', 'FL')
    .constant('LICID', '77ppockgerpdq6')
    .constant('LICS', '9V2FtSAT93CDzRNO');
