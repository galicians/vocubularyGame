'use strict'


describe('busuu controllers', function() {

  beforeEach(module('busuuApp'))
  beforeEach(module('busuuServices'))

   describe('QuestionDisplayCtrl', function() {
    var scope, ctrl, createSession, Session

      beforeEach(inject(function($rootScope, $controller,$injector,$http) {
        scope = $rootScope.$new()
        ctrl = $controller('QuestionDisplayCtrl', {$scope: scope})
        createSession = function() {
          return $injector.get('Session')
        }
        Session = createSession()
      }))


      it('the session service should be available for testing the ctrl', function() {
        expect(Session).toBeTruthy();
      })

    

   })


})