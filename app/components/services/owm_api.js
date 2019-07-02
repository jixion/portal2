angular.module('owm_api', ['ngResource'])
    .factory('api.getZip', [
        '$resource',
        function ($resource) {
            return $resource(
                'owm/:zip/:country',
                {
                    zip: '@zip',
                    country: '@country'
                }
            );
        }
    ])
;