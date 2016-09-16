/*describe("getGreeting", function() {
  var greeter;
  beforeEach(module('app'));
  beforeEach(inject(function(_greeter_) {
    greeter = _greeter_;
  }));

  it("says Hello to me", function() {
    expect(greeter.getGreeting("Hanna")).toEqual("Hello Hanna");
  });
});*/


describe("a counter", function() {
  var counter;
  beforeEach(function() {
    counter = 0;
  });

  it("should increment by one", function() {
    // It's fairly unnecessary in this case, but in more
    // complex tests, a pre-assertion might be warranted:
    // expect(counter).toEqual(0);

    counter++;
    expect(counter).toEqual(1);
  });
});


describe("A test", function(){
  it("is true", function(){
    var test = true;
    expect(test).toBe(true);
  });
});
/*describe('Hello World', function(){
  var appCtrl;
  beforeEach(module('app'))
  beforeEach(inject(function ($controller) {
    appCtrl = $controller('AppCtrl');
  }))
  describe('AppCtrl', function(){
    it('should be have message of Hello', function () {
      expect(MainController.message).toBe('Hello')
    })
  })
})*/