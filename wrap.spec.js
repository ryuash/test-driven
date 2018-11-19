const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('returns input if str length is less than col arg',()=>{
      expect(wrap('wingman',10)).to.equal('wingman');
      expect(wrap('puppyloves',10)).to.equal('puppyloves');
  });
  it('breaks the line if col is less than str length',()=>{
      expect(wrap('puppy loves',6)).to.equal('puppy\nloves');
      expect(wrap('puppy loves',5)).to.equal('puppy\nloves');
  });
});