import { emphasizeStyleProperty } from '../../src';
import { SupportedStyleName } from '../../src/style-property/interfaces';

function cssProperty(
    name: SupportedStyleName,
    from: string | number,
    to: string | number,
    fromRate: number,
    toRate: number,
    rate: number,
    value: string | number,
) {
    expect(emphasizeStyleProperty(name, from, to, fromRate, toRate, rate)).toEqual(value);
}

it('cssProperty: size-value', () => {
    cssProperty('margin', '0px', '10px', 0, 10, 5, '5px');
    cssProperty('margin', '0px 0px', '10px 10px', 0, 10, 5, '5px 5px');
    cssProperty('margin', '0px 0px 0px', '10px 10px 10px', 0, 10, 5, '5px 5px 5px');
    cssProperty('margin', '0px 0px 0px 0px', '10px 10px 10px 10px', 0, 10, 5, '5px 5px 5px 5px');
});

it('cssProperty: number', () => {
    cssProperty('margin', 0, 10, 0, 10, 5, 5);
});

it('cssProperty: color', () => {
    cssProperty('color', '#000000', '#101010', 0, 10, 5, '#080808');
});

it('cssProperty: dimantion', () => {
    cssProperty('margin', '0 0px', '10 10px', 0, 10, 5, '5px 5px');
});

it('styleProperty: dimention - px', () => {
    expect(emphasizeStyleProperty('margin', '8px', '12px', 0.5)).toEqual('10px');
    expect(emphasizeStyleProperty('margin', '8px', '12px', 0, 2, 1)).toEqual('10px');
});

it('styleProperty: dimention - px px', () => {
    expect(emphasizeStyleProperty('margin', '8px 8px', '12px 12px', 0.5)).toEqual('10px 10px');
});

it('styleProperty: dimention - px px px px', () => {
    expect(emphasizeStyleProperty('margin', '8px 8px 8px 8px', '12px 12px 12px 12px', 0.5)).toEqual('10px 10px 10px 10px');
});

it('styleProperty: color - hex', () => {
    expect(emphasizeStyleProperty('color', '#222222', '#444444', 0.5)).toEqual('#333333');
});

it('styleProperty: color - name', () => {
    expect(emphasizeStyleProperty('color', 'green', 'blue', 0.5)).toEqual('#004080');
});

it('styleProperty: color - rgb', () => {
    expect(emphasizeStyleProperty('color', 'rgb(0,0,0)', 'rgb(100,100,100)', 0.5)).toEqual('#323232');
});
