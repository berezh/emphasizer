import { emphasizeStyleProperty } from '../../src';

it('styleProperty untrivial: to undefinit', () => {
    expect(emphasizeStyleProperty('8px', undefined, 0.5)).toEqual('8px');
});

it('styleProperty untrivial: from undefinit', () => {
    expect(emphasizeStyleProperty(undefined, '8px', 0.5)).toEqual('8px');
});
