

angular.module('portal.about_me', ['ngRoute', 'wow_api'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/about_me', {
    templateUrl: 'about_me/about_me.html',
    controller: 'AboutMeCtrl',
    controllerAs: 'amc'
  });
}])

.controller('AboutMeCtrl', [
  function () {
    var amc = this;
    _.set(amc, 'ready', false);
    _.set(amc, 'email', 'jeff@' + window.location.hostname);
    _.set(amc, 'ready', true);
  }]);
