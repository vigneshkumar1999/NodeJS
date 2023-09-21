const { expect } = require('chai');
      
function add(a, b) {
  return a + b;
}
     
// Functional test for the add function
describe('Addition', function() {
  it('should return the correct sum', function() {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
});
