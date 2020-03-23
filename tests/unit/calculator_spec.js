var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 1 and 4 and return 5', function() {
    calculator.add(1);
    calculator.operatorClick("+");
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5)
  })

});
