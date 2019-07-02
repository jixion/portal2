// @flow

angular.module('portal.space', ['ngRoute', 'nasa_api'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/space', {
        templateUrl: 'space/space.html',
        controller: 'SpaceCtrl',
        controllerAs: 'sc'
      });
    }])

    .controller('SpaceCtrl', [
      'api.getApod', 'api.getNeo', 'api.getISS',
      function (nasaGetApod, nasaGetNeo, getISS) {
        var sc = this;
        var nasaPromise = nasaGetApod.get().$promise;
        var neoPromise = nasaGetNeo.get().$promise;
        var issPromise = getISS.get().$promise;
        _.set(sc, 'ready1', false);
        _.set(sc, 'ready2', false);
        _.set(sc, 'ready3', false);
        nasaPromise.then(function (data) {
          _.set(sc, 'apod', _.get(data, 'hdurl', ''));
          _.set(sc, 'apodInfo', _.get(data, 'explanation', ''));
          _.set(sc, 'apodDate', _.get(data, 'date', ''));
          _.set(sc, 'apodTitle', _.get(data, 'title', ''));
          _.set(sc, 'ready2', true);
        });
        neoPromise.then(function (data) {
          _.set(sc, 'today', new Date().toISOString().substring(0, 10));
          _.set(sc, 'neo', data);
          _.set(sc, 'ready3', true);
        });
        issPromise.then(function (data) {
          _.set(sc, 'iss', data);
          _.set(sc, 'ready1', true);
        });
      }]);
