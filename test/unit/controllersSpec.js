'use strict'


describe('busuu controllers', function() {

  beforeEach(module('busuuApp'))
  beforeEach(module('busuuServices'))

   describe('QuestionDisplayCtrl', function() {
    var scope, ctrl, createSession

      beforeEach(inject(function($rootScope, $controller,$injector) {
        scope = $rootScope.$new()
        ctrl = $controller('QuestionDisplayCtrl', {$scope: scope})
        createSession = function() {
          return $injector.get('Session')
        }
      }))


      it('should be defined', function() {
        var session = createSession()
        expect(session).toBeTruthy();
      })

      // it("should be intialized with all the words", function() {
      //   var session = new Session
      //   session.getWords()
      //   expect(scope.words.count()).toEqual(11)
      // })

   })


})