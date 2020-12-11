import { SquarePipe } from './square.pipe';

describe('SquarePipe', () => {
  it('create an instance', () => {
    const pipe = new SquarePipe();
    expect(pipe).toBeTruthy();
  });

  it('value should be multiplied by itself', () => {
    const pipe = new SquarePipe();
    expect(pipe.transform(3)).toEqual(9);
  });

});
