

describe('busuuApp', function() {

  describe('bussuApp homepage', function() {

    beforeEach(function() {
      browser.get('/')
    })

    it("should display a question", function() {
      var question = element(by.binding('question'))
      expect(question).toBeDefined()
    })

    it("should display 3 possible answers", function() {
      var answers = element.all(by.repeater('answer in answers'))
      expect(answers.count()).toEqual(3)
    })

    it("should display the submit button", function() {
      expect(element(by.id('submitAnswer'))).toBeDefined()
    })

    it("should display the button next question when users submits response", function() {
      expect(element(by.id('nextQuestion')).isDisplayed()).toBeFalsy();     
      element(by.id('submitAnswer')).click()
      expect(element(by.id('nextQuestion')).isDisplayed()).toBeTruthy();
    })




  })
})