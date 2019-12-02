import { emphasizeStyle } from '../src';

it('style untrivial: to undefinit', () => {
    expect(emphasizeStyle({ width: '8px' }, {}, 0.5)).toEqual({ width: '8px' });
});

it('style untrivial: from undefinit', () => {
    expect(emphasizeStyle({}, { width: '8px' }, 0.5)).toEqual({ width: '8px' });
});

// it('styleProperty untrivial: from undefinit', () => {
//     expect(emphasizeStyleProperty(undefined, '8px', 0.5)).toEqual('8px');
// });
