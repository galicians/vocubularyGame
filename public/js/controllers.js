'use strict';

/* Controllers */

var busuuControllers = angular.module('busuuControllers', []);

busuuControllers.controller('QuestionDisplayCtrl', ['$scope', 'Session', '$http', function($scope, Session, $http) {
    
    var session = new Session('spanish')

    session.getWords().then(function(){
      $scope.words = session.words
    }).then(function() {
      $scope.number = session._generateRandNumber()
    })
    
    

    $scope.lan = session.learning

  
    

 }]);


