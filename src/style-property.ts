import { emphasizeNumber } from './number';
import { SizeUnit, SizeValue } from './size-value';
import { emphasizeColor } from './color';
import { Color } from 'jolor';

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

function emphasizeStylePropertyBase(
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

function emphasizeStyleProperty(fromValue: string | number, toValue: string | number, rate: number): string | number | undefined;
function emphasizeStyleProperty(
    fromValue: string | number,
    toValue: string | number,
    fromRate: number,
    toRate: number,
    rate: number,
): string | number | undefined;
function emphasizeStyleProperty(
    p1: string | number,
    p2: string | number,
    p3: number,
    p4?: number,
    p5?: number,
): string | number | undefined {
    if (typeof p4 === 'number' && typeof p5 === 'number') {
        return emphasizeStylePropertyBase(p1, p2, p3, p4, p5);
    } else {
        return emphasizeStylePropertyBase(p1, p2, 0, 1, p3);
    }
}

export { emphasizeStyleProperty };
