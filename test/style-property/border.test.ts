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

it('styleProperty: border', () => {
    expect(emphasizeStyleProperty('0px solid #000000', '10px solid #888888', 0.5)).toEqual('5px solid #444444');
});

it('styleProperty: border: color name', () => {
    expect(emphasizeStyleProperty('1px solid LightSkyBlue', '3px solid DarkBlue', 0.5)).toEqual('2px solid #4467c3');
});
