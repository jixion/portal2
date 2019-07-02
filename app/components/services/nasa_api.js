// @flow

angular.module('nasa_api', ['ngResource'])
    .factory('api.getApod', [
      '$resource',
      function ($resource) {
        return $resource(
            'apod'
        );
      }
    ])
    .factory('api.getNeo', [
        '$resource',
        function ($resource) {
            return $resource(
                'neo'
            );
        }
    ])
    .factory('api.getISS', [
      '$resource',
      function ($resource) {
        return $resource(
            'iss-now.json'
        );
      }
    ]);
