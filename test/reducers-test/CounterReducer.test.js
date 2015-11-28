import chai from "chai"
const expect = chai.expect;

import CounterReducer from "../../app/js/reducers/CounterReducer"

describe('CounterReducer', function () {
  it('should have a default of 0', function () {
    expect(CounterReducer({}, {type: "INIT"})).to.equal(0);
  });

  it('should increment by 1 on INCREMENT', function () {
    expect(CounterReducer(1, {type: "INCREMENT"})).to.equal(2);
  });

  it('should decrement by 1 on DECREMENT', function () {
    expect(CounterReducer(2, {type: "DECREMENT"})).to.equal(1);
  });
})
