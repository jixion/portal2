// @flow

angular.module('wow_api', ['ngResource'])
    .factory('api.getCharacter', [
      '$resource', 'WOW_API_HOST', 'WOW_API_KEY',
      function ($resource, WOW_API_HOST, WOW_API_KEY) {
        return $resource(
            WOW_API_HOST + '/character/uldum/Carnfed?locale=en_US&apikey=' + WOW_API_KEY
        );
      }
    ]);
