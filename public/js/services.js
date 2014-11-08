'use strict';

/* Services */
var busuuServices = angular.module('busuuServices',[])


busuuServices.factory('Session', [ '$http', function($http) {

  var Session =  function(lang) {
    this.words
    this.questions = []
    this.roundAnswers = []
    this.learning = lang
    this.mTongue ="en"
    this.user = "user"
    this.score = []
    this.roundPoints
  }

  Session.prototype.getWords = function() {
     var self = this
     return $http.get('js/words.json').then(function(response) {
      self.words = response.data
      return response
    })
  }

  Session.prototype._generateRandNumber =  function() {
    var self = this
    var totalWords = self.words.length - 1
    return Math.floor(Math.random() * totalWords)
  }

  Session.prototype.generateNewQuestion = function() {
    var self = this
    var randNumber = self._generateRandNumber() 
    while ( self._isQuestionRepeated(randNumber) ) { randNumber = self._generateRandNumber() }
    self.questions.push(randNumber) 
  }

  Session.prototype._isQuestionRepeated = function(num) {
     var self = this
    return self.questions.indexOf(num) !== -1
  }

  Session.prototype.currentQuestion = function() {
    var self = this
    var last = self.questions.length - 1
    return self.words[last]
  }

  Session.prototype.correctResponse = function() {
     var self = this
    return self.currentQuestion()[self.learning]
  }

  Session.prototype.isResponseRepeated = function(num) {
    var self = this
    return self.roundAnswers.indexOf(self.words[num][self.learning]) !== -1
  }

  Session.prototype.generateFakeAnswer = function() {
    var self = this
    var randNumber = self._generateRandNumber()
    while ( self.isResponseRepeated(randNumber) ) { randNumber = self._generateRandNumber() }
    return self.words[randNumber][self.learning]
  }

  Session.prototype.generateAnswers = function(num) {
    var self = this
     self.roundAnswers.push(self.correctResponse())
    for(var i = 0; i < num; i++){ self.roundAnswers.push(self.generateFakeAnswer()) }
  }

  Session.prototype.shuffleAnswers = function(){
    var self = this
      self.roundAnswers = shuffle(self.roundAnswers)
  }

  Session.prototype.currentRound = function() {
    var self = this
    return self.questions.length
  }

  Session.prototype.isUserResponseCorrect = function(userAnswer){
    var self = this
    return userAnswer == self.correctResponse()
  }

  Session.prototype.updateScore = function(userAnswer) {
    var self = this
    if (self.isUserResponseCorrect(userAnswer)) self.score.push(self.roundPoints)
  }

  Session.prototype.getKeyphrase = function(){
    var self = this
    return self.currentQuestion().def
  }

  function shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) { 
          var j = Math.floor(Math.random() * (i + 1))
          var temp = array[i]
          array[i] = array[j]
          array[j] = temp
      }
      return array
  }



  return Session
}])

