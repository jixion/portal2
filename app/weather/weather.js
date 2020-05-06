// @flow

angular.module('portal.weather', ['ngRoute', 'owm_api', 'portal.can_has_drag'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/weather', {
        templateUrl: 'weather/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'wc'
      });
    }])

    .controller('WeatherCtrl', [
      'api.getZip',
      function (gcs) {
        var wc = this;
        var zips = [
            {
                zip: '33301',
                country: 'us'
            },
            {
                zip: '76643',
                country: 'us'
            },
            {
                zip: '73301',
                country: 'us'
            }
        ];
        _.set(wc, 'getCardinalDir', function (dir) {
            if (dir < 45 || dir >= 315) return 'North';
            if (dir >= 45 && dir < 135) return 'East';
            if (dir >= 135 && dir < 225) return 'South';
            if (dir >= 225 && dir < 315) return 'West';
            return 'none';
        });
        _.set(wc, 'owmResults', []);
        function getZip(z, c) {
            return gcs.get({ zip: z, country: c }).$promise;
        }
        function getFahrenheit(kelvin) {
            return (kelvin - 273.15) × 9/5 + 32;
        }
        _.each(zips, function (cs) {
            getZip(_.get(cs, 'zip'), _.get(cs, 'country'))
                .then(function (result) {
                    _.set(result, 'fahrenheit', getFahrenheit(result.main.temp));
                    _.get(wc, 'owmResults').push(result);
                });
        });
      }
    ]);
