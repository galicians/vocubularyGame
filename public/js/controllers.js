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
      $scope.points = session.currentPoints()
      $scope.formData = {};
      $scope.isResponded = false
    }).then(function() {
      $scope.submitAnswer = function() {
        $scope.formData.userResponse 
        $scope.isResponded = true
        $scope.correct = session.correctResponse()

      }

     
    })

     



     // $scope.submitAnswer() {
     //  //will indicate if the answer is correct and will show the correct answer
     //  //if you choose the right question --> will display next question buttom
     //  //wrong answer the game ends


  
  
    

 }]);


