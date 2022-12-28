import { NumberWithDoubleDigitsPipe } from './number-with-double-digits.pipe';

describe('NumberWithDoubleDigitsPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberWithDoubleDigitsPipe();
    expect(pipe).toBeTruthy();
  });
});
