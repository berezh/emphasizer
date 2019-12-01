import { emphasizeStyleProperty } from '../src';

it('cssProperty: size-value', () => {
    cssProperty('0px', '10px', 0, 10, 5, '5px');
    cssProperty('0px 0px', '10px 10px', 0, 10, 5, '5px 5px');
    cssProperty('0px 0px 0px', '10px 10px 10px', 0, 10, 5, '5px 5px 5px');
    cssProperty('0px 0px 0px 0px', '10px 10px 10px 10px', 0, 10, 5, '5px 5px 5px 5px');
});

it('cssProperty: color', () => {
    cssProperty('#000000', '#101010', 0, 10, 5, '#080808');
});

it('cssProperty: dimantion', () => {
    cssProperty('0 0px', '10 10px', 0, 10, 5, '5px 5px');
});

function cssProperty(from: string, to: string, fromRate: number, toRate: number, rate: number, value: string) {
    expect(emphasizeStyleProperty(from, to, fromRate, toRate, rate)).toEqual(value);
}
