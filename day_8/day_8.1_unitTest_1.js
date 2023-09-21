const assert = require('assert');

function add(a, b) {
  return a + b;
}
      
// Unit test for the add function
const result = add(2, 3);
assert.strictEqual(result, 4, '2 + 3 should equal 5')
