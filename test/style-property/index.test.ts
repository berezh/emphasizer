import { emphasizeStyleProperty } from '../../src';

function cssProperty(
    from: string | number,
    to: string | number,
    fromRate: number,
    toRate: number,
    rate: number,
    value: string | number,
) {
    expect(emphasizeStyleProperty(from, to, fromRate, toRate, rate)).toEqual(value);
}

it('cssProperty: size-value', () => {
    cssProperty('0px', '10px', 0, 10, 5, '5px');
    cssProperty('0px 0px', '10px 10px', 0, 10, 5, '5px 5px');
    cssProperty('0px 0px 0px', '10px 10px 10px', 0, 10, 5, '5px 5px 5px');
    cssProperty('0px 0px 0px 0px', '10px 10px 10px 10px', 0, 10, 5, '5px 5px 5px 5px');
});

it('cssProperty: number', () => {
    cssProperty(0, 10, 0, 10, 5, 5);
});

it('cssProperty: color', () => {
    cssProperty('#000000', '#101010', 0, 10, 5, '#080808');
});

it('cssProperty: dimantion', () => {
    cssProperty('0 0px', '10 10px', 0, 10, 5, '5px 5px');
});

it('styleProperty: dimention - px', () => {
    expect(emphasizeStyleProperty('8px', '12px', 0.5)).toEqual('10px');
    expect(emphasizeStyleProperty('8px', '12px', 0, 2, 1)).toEqual('10px');
});

it('styleProperty: dimention - px px', () => {
    expect(emphasizeStyleProperty('8px 8px', '12px 12px', 0.5)).toEqual('10px 10px');
});

it('styleProperty: dimention - px px px px', () => {
    expect(emphasizeStyleProperty('8px 8px 8px 8px', '12px 12px 12px 12px', 0.5)).toEqual('10px 10px 10px 10px');
});

it('styleProperty: color - hex', () => {
    expect(emphasizeStyleProperty('#222222', '#444444', 0.5)).toEqual('#333333');
});

it('styleProperty: color - name', () => {
    expect(emphasizeStyleProperty('green', 'blue', 0.5)).toEqual('#004080');
});

it('styleProperty: color - rgb', () => {
    expect(emphasizeStyleProperty('rgb(0,0,0)', 'rgb(100,100,100)', 0.5)).toEqual('#323232');
});

