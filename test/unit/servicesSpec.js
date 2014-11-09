'use strict';

describe('busuuServices', function() {
  var session

  beforeEach(module('busuuApp'));

  beforeEach(inject(function(Session) {
    session = new Session('es')
    session.words = [   
    {
      "en": "Good morning",
      "es": "Buenos dias",
      "def": "A conventional expression of greeting or farewell used in the morning."
    }, 
    {
      "en": "Apple",
      "es": "Manzana",
      "def": "The round fruit of an apple tree, which typically has thin green or red skin."
    }, 
    {
      "en": "Brother",
      "es": "Hermano",
      "def": "A man or boy in relation to other sons and daughters of his parents."
    }, 
    {
      "en": "Red",
      "es": "Rojo",
      "def": "The colour of blood, fire, or rubies."
    }]
  }))

 it("should be defined", function() {
    expect(session).toBeDefined()
  })

  it("needs questions to be defined", function() {
    expect(session.questions).toBeDefined()
  })

  it("needs roundAnswers to be defined", function() {
    expect(session.roundAnswers).toBeDefined()
  })

  it("needs score to be defined", function() {
    expect(session.score).toBeDefined()
  })

  it("should generate random numbers", function() {
    expect(session._generateRandNumber()).toBeLessThan(session.words.length)
    expect(session._generateRandNumber()).toBeGreaterThan(-1)
  })

  it("knows when a question is repeated", function() {
    session.questions.push(1)
    expect(session._isQuestionRepeated(1)).toBeTruthy()
  })

  it("generates a new question from words", function() {
    session.generateNewQuestion()
    expect(session.questions.length).toEqual(1)
  })

  it("can access to the current question", function() {
    session.generateNewQuestion()
    expect(session.words).toContain(session.currentQuestion())
  })

  it("knows what is the correct response to the current question", function() {
    session.generateNewQuestion()
    expect(session.correctResponse()).toEqual(session.currentQuestion()['es'])
  })

  it("generates as many answers as you need per round", function() {
    session.generateNewQuestion()
    session.generateAnswers(2)
    expect(session.roundAnswers.length).toEqual(3)
  })

  it("includes the correct response between the answers generated", function() {
    session.generateNewQuestion()
    session.generateAnswers(2)
    expect(session.roundAnswers).toContain(session.correctResponse())
  })

  it("provides the current round", function() {
    session.generateNewQuestion()
    expect(session.currentRound()).toEqual(1)
  })

  it("knows when the user response is correct", function() {
    session.questions.push(0)
    expect(session.isUserResponseCorrect('Buenos dias')).toBeTruthy()
  })

  it("the number of points per correct answer can be modified between rounds", function() {
    session.roundPoints = 5
    expect(session.roundPoints).toEqual(5)
  })

  it("keeps the count of the points per round on score", function() {
    session.roundPoints = 5
    session.questions.push(0)
    session.updateScore('Buenos dias')
    expect(session.score[1]).toEqual(5)
  })

  it("provides the keyphrase of the current question", function() {
    session.questions.push(1)
    expect(session.getKeyphrase()).toEqual("A conventional expression of greeting or farewell used in the morning.")
  })



});