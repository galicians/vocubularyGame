'use strict';

// Declare app level module which depends on filters, and services

var busuuApp = angular.module('busuuApp', [
  'busuuControllers',
  'busuuFilters',
  'busuuServices',
  'busuuDirectives',
  'ngRoute'
])

busuuApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/home', {
    controller: 'QuestionDisplayCtrl'
  }).when('/view2', {
    templateUrl: 'partials/partial2.html',
    controller: 'MyCtrl2'
  }).otherwise({
    redirectTo: '/home'
  });

  $locationProvider.html5Mode(true);
});