import chai from "chai"
const expect = chai.expect;

import CoreReducer from "../../app/js/reducers/CoreReducer"

describe('CoreReducer', function () {
  it('should have a counter param with a default of 0', function () {
    expect(CoreReducer(null, {type: "INIT"})).to.deep.equal({
      counter: 0
    });
  });
})
