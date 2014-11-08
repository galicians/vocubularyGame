'use strict';

/* Controllers */

var busuuControllers = angular.module('busuuControllers', []);

busuuControllers.controller('QuestionDisplayCtrl', ['$scope', 'Session', '$http', function($scope, Session, $http) {
    
    var session = new Session('es')

    session.getWords().then(function(){
      $scope.words = session.words
    }).then(function() {
      session.generateNewQuestion()
      $scope.question = session.currentQuestion()
      $scope.learning = session.learning
      $scope.user = session.user
      $scope.round = session.currentRound()
      session.generateAnswers(3)
      $scope.answers = session.roundAnswers
    })
    

  

  
    

 }]);


