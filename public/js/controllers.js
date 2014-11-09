'use strict';

/* Controllers */

var busuuControllers = angular.module('busuuControllers', []);

busuuControllers.controller('QuestionDisplayCtrl', ['$scope', 'Session', '$http', function($scope, Session, $http) {
    
    var session = new Session('es')

    session.getWords().then(function(){
      $scope.words = session.words
    }).then(function() {
      newRound()
    }).then(function() {
      $scope.submitAnswer = function() {
        $scope.formData.userResponse 
        $scope.isResponded = true
        $scope.correct = session.correctResponse()
        if( $scope.correct != $scope.formData.userResponse || $scope.round == 3 ) endGame()
        } 
    }).then(function() {
      $scope.nextQuestion = function() {
      newRound()
      }
    })

  function endGame() {
    // show score and give the option to the user to enter name
    //If he does, the score is sent to the server, and will appear on "High score" subpage of the app. This subpage will download highscore list, using $http AngularJS service.
  }


     
   function newRound() {
      session.generateNewQuestion()
      $scope.question = session.currentQuestion()
      $scope.learning = session.learning
      $scope.user = session.user
      $scope.round = session.currentRound()
      session.generateAnswers(2)
      $scope.answers = session.roundAnswers
      $scope.points = session.currentPoints()
      $scope.formData = {};
      $scope.isResponded = false
   }
  
    

 }]);


