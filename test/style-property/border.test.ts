import { emphasizeStyleProperty } from '../../src';

it('styleProperty: border', () => {
    expect(emphasizeStyleProperty('border', '0px solid #000000', '10px solid #888888', 0.5)).toEqual(
        '5px solid #444444'
    );
});

it('styleProperty: border - false', () => {
    expect(emphasizeStyleProperty('width', '0px solid #000000', '10px solid #888888', 0.5)).toEqual(undefined);
});

it('styleProperty: border: color name', () => {
    expect(emphasizeStyleProperty('border', '1px solid LightSkyBlue', '3px solid DarkBlue', 0.5)).toEqual(
        '2px solid #4467c3'
    );
});
