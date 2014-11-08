'use strict';

/* Services */
var busuuServices = angular.module('busuuServices')




busuuServices.factory('Session', function () {

  function Session() {
    this.words = [{
      "en": "Good morning",
      "es": "Buenos días",
      def: "A conventional expression of greeting or farewell used in the morning."
    }, {
      "en": "Apple",
      "es": "Manzana",
      def: "The round fruit of an apple tree, which typically has thin green or red skin."
    }]
    this.questions = []
    this.roundAnswers = []
    this.learning
    this.mTongue
    this.user
    this.score = []
    this.roundPoints
  }
})