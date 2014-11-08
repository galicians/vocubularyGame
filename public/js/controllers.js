'use strict';

/* Controllers */

var busuuControllers = angular.module('busuuControllers', []);

busuuControllers.controller('QuestionDisplayCtrl', ['$scope', 'Session', '$http', function($scope, Session, $http) {
    $scope.session = new Session

    $http.get('js/words.json').success(function(data) {
      $scope.session.words = data
    })
 

  
    

 }]);


