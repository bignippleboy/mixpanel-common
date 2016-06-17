import expect from 'expect.js';

import { formattedNumber } from '../lib/util';

describe('formattedNumber()', function() {
  it('leaves ints untouched', function() {
    expect(formattedNumber(5)).to.equal(5);
  });

  it('defaults to precision=2', function() {
    expect(formattedNumber(5.12345)).to.equal(5.12);
  });

  it('takes a precision argument', function() {
    expect(formattedNumber(5.12345, 4)).to.equal(5.1235);
  });

  it('works with scientific notation', function() {
    expect(formattedNumber(1e100)).to.equal(1e100);
  });
});
