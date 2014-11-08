'use strict';

/* Controllers */

var busuuControllers = angular.module('busuuControllers', []);

busuuControllers.controller('QuestionDisplayCtrl', ['$scope', 'Session', '$http', function($scope, Session, $http) {
    
    $http.get('js/words.json').success(function(data) {
      $scope.words = data
    })


    // var currentSession = new Session
    // $scope.words = currentSession.words

 }]);


