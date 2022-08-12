import { ProdutoPipe } from './produto.pipe';

describe('ProdutoPipe', () => {
  it('create an instance', () => {
    const pipe = new ProdutoPipe();
    expect(pipe).toBeTruthy();
  });
});
