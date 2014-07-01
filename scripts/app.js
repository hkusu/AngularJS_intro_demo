'use strict';

angular.module('angularIntroTestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angular-intro'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
