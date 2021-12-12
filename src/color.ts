import { ColorProperty } from 'csstype';
import { Color, toHex } from 'jolor';
import { emphasizeNumber } from './number';

function emphasizeColorBase(
    fromValue: ColorProperty,
    toValue: ColorProperty,
    fromRate: number,
    toRate: number,
    rate: number
): ColorProperty {
    const from = new Color(fromValue);
    const to = new Color(toValue);

    const r = Math.round(emphasizeNumber(from.rgbObject.r, to.rgbObject.r, fromRate, toRate, rate));
    const g = Math.round(emphasizeNumber(from.rgbObject.g, to.rgbObject.g, fromRate, toRate, rate));
    const b = Math.round(emphasizeNumber(from.rgbObject.b, to.rgbObject.b, fromRate, toRate, rate));
    const a = Math.round(emphasizeNumber(from.opacity, to.opacity, fromRate, toRate, rate));

    return toHex(r, g, b, a) || fromValue;
}

function emphasizeColor(fromValue: ColorProperty, toValue: ColorProperty, rate: number): ColorProperty;
function emphasizeColor(
    fromValue: ColorProperty,
    toValue: ColorProperty,
    fromRate: number,
    toRate: number,
    rate: number
): ColorProperty;
function emphasizeColor(p1: ColorProperty, p2: ColorProperty, p3: number, p4?: number, p5?: number): ColorProperty {
    if (typeof p4 === 'number' && typeof p5 === 'number') {
        return emphasizeColorBase(p1, p2, p3, p4, p5);
    } else {
        return emphasizeColorBase(p1, p2, 0, 1, p3);
    }
}

function splitColor(fromValue: ColorProperty, toValue: ColorProperty, count: number): ColorProperty[] {
    const result: ColorProperty[] = [];
    for (let i = 1; i <= count; i++) {
        result.push(emphasizeColorBase(fromValue, toValue, 1, count, i));
    }

    return result;
}

export { emphasizeColor, splitColor };
