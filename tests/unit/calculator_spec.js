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

  it('can subtract 4 from 7 and return 3', function() {
    calculator.add(7);
    calculator.operatorClick("-");
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('can multiply 3 by 5 and return 15', function() {
    calculator.add(3);
    calculator.operatorClick("*");
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('can divide 21 by 7 and return 3', function() {
    calculator.add(21);
    calculator.operatorClick("/");
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3)
  })

});
