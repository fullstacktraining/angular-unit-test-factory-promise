describe('promiseFactory', function() {

  beforeEach(module('fst'));

  // inject the rootScope and factory
  beforeEach(inject(function(_$rootScope_, _promiseFactory_){
    // The injector unwraps the underscores (_) from around the parameter names when matching

    // Generate a new scope
    scope = _$rootScope_.$new();
    // Expose the factory to the tests
    promiseFactory = _promiseFactory_;
  }));
  
  describe('getResponse method', function() {

    it('should resolve promise when passed true', function(done) {
      promiseFactory
        .getResponse(true)
        .then(function(res) {
          expect(res).toBe('This is totally true');
          done();
        });
      scope.$digest();
    });

    it('should resolve promise when passed false', function(done) {
      promiseFactory
        .getResponse(false)
        .then(function(res) {
          expect(res).toBe('This is clearly false');
          done();
        });
      scope.$digest();

    });

  });

});