import { ColorProperty } from 'csstype';
import { Color, toHex } from 'jolor';
import { SizeUnit, SizeValue } from './size-value';

// todo: test from == to, fromRate == toRate
// returns rated value
function emphasizeNumber(fromValue: number, toValue: number, fromRate: number, toRate: number, rate: number): number {
    const valueDirection = fromValue <= toValue;
    const minValue = Math.min(fromValue, toValue);
    const maxValue = Math.max(fromValue, toValue);
    const valueRange = maxValue - minValue;

    const rateDirection = fromRate <= toRate;
    const minRate = Math.min(fromRate, toRate);
    const maxRate = Math.max(fromRate, toRate);
    const rateRange = maxRate - minRate;

    let valueDelta = (valueRange / rateRange) * (rate - minRate);
    // to fixed 2
    valueDelta = Math.round(valueDelta * 100) / 100;

    if (valueDirection === rateDirection) {
        return keepRange(fromValue, toValue, minValue + valueDelta);
    } else {
        return keepRange(fromValue, toValue, maxValue - valueDelta);
    }
}

function keepRange(from: number, to: number, value: number): number {
    const max = Math.max(from, to);
    const min = Math.min(from, to);
    if (value < min) {
        return min;
    } else if (value > max) {
        return max;
    } else {
        return value;
    }
}

function emphasizeColor(
    fromValue: ColorProperty,
    toValue: ColorProperty,
    fromRate: number,
    toRate: number,
    rate: number,
): ColorProperty {
    const from = new Color(fromValue);
    const to = new Color(toValue);

    const r = Math.round(emphasizeNumber(from.rgbObject.r, to.rgbObject.r, fromRate, toRate, rate));
    const g = Math.round(emphasizeNumber(from.rgbObject.g, to.rgbObject.g, fromRate, toRate, rate));
    const b = Math.round(emphasizeNumber(from.rgbObject.b, to.rgbObject.b, fromRate, toRate, rate));
    const a = Math.round(emphasizeNumber(from.opacity, to.opacity, fromRate, toRate, rate));

    return toHex(r, g, b, a) || fromValue;
}

function splitColor(fromValue: ColorProperty, toValue: ColorProperty, count: number): ColorProperty[] {
    const result: ColorProperty[] = [];
    for (let i = 1; i <= count; i++) {
        result.push(emphasizeColor(fromValue, toValue, 1, count, i));
    }

    return result;
}

function sizeValue(
    fromValue: SizeValue,
    toValue: SizeValue,
    fromRate: number,
    toRate: number,
    rate: number,
): string | undefined {
    if (fromValue.isMatched(toValue)) {
        const dimension = fromValue.dimension;
        const units: SizeUnit[] = [];
        for (let i = 0; i < fromValue.units.length; i++) {
            const fromUnit = fromValue.units[i];
            const toUnit = toValue.units[i];
            units.push({
                dimension,
                value: emphasizeNumber(fromUnit.value, toUnit.value, fromRate, toRate, rate),
            });
        }

        return new SizeValue(units).toString();
    }

    return undefined;
}

function emphasizeStyleProperty(
    from: string | number,
    to: string | number,
    fromRate: number,
    toRate: number,
    rate: number,
): string | number | undefined {
    if (typeof from === 'number' && typeof to === 'number') {
        return emphasizeNumber(from, to, fromRate, toRate, rate);
    } else if (typeof from === 'string' && typeof to === 'string') {
        if (Color.isColor(from)) {
            return emphasizeColor(from, to, fromRate, toRate, rate);
        } else if (SizeValue.isSize(from)) {
            return sizeValue(new SizeValue(from), new SizeValue(to), fromRate, toRate, rate);
        } else {
            return from;
        }
    }

    return undefined;
}

function emphasizeStyle(
    from: React.CSSProperties,
    to: React.CSSProperties,
    fromRate: number,
    toRate: number,
    rate: number,
) {
    const result: React.CSSProperties = {};

    for (const key in from) {
        if (from.hasOwnProperty(key) && to.hasOwnProperty(key)) {
            (result as any)[key] = emphasizeStyleProperty((from as any)[key], (to as any)[key], fromRate, toRate, rate);
        }
    }

    return result;
}

export { emphasizeNumber, splitColor, emphasizeColor, emphasizeStyle, emphasizeStyleProperty };
