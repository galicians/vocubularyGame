

describe('busuuApp', function() {

  describe('bussuApp homepage', function() {

    beforeEach(function() {
      browser.get('/')
    })

    it("should display a question", function() {

      var question = element(by.binding('question'))
      
      expect(question).toBeDefined()
    })

  })


})