import { emphasizeNumber } from '../number';
import {
    DimentionUnit,
    DimentionParser,
    ColorParser,
    Dimention1Parser,
    Dimention2Parser,
    Dimention3Parser,
    Dimention4Parser,
    BorderParser,
} from './parsers';
import { emphasizeColor } from '../color';
import { Color } from 'jolor';
import { BaseParser } from './parsers/base-parser';

const parsers: BaseParser[] = [
    // new ColorParser(),
    // new Dimention1Parser(),
    // new Dimention2Parser(),
    // new Dimention3Parser(),
    // new Dimention4Parser(),
    // new BorderParser(),
];

// function sizeValue(
//     fromValue: DimentionParser,
//     toValue: DimentionParser,
//     fromRate: number,
//     toRate: number,
//     rate: number,
// ): string | undefined {
//     // if (fromValue.isMatched(toValue)) {
//     //     const dimension = fromValue.dimension;
//     //     const units: DimentionUnit[] = [];
//     //     for (let i = 0; i < fromValue.units.length; i++) {
//     //         const fromUnit = fromValue.units[i];
//     //         const toUnit = toValue.units[i];
//     //         units.push({
//     //             dimension,
//     //             value: emphasizeNumber(fromUnit.value, toUnit.value, fromRate, toRate, rate),
//     //         });
//     //     }

//     //     return new DimentionParser(units).toString();
//     // }

//     const fromParser: BaseParser;
//     const toParser: BaseParser;

//     for (let i = 0; i < parsers.length; i++) {
//         const parser = parsers[i];
//         if(parser.isMatch(fromValue))
//     }

//     return undefined;
// }

function emphasizeStylePropertyBase(
    fromValue: string | number | undefined,
    toValue: string | number | undefined,
    fromRate: number,
    toRate: number,
    rate: number,
): string | number | undefined {
    // if (typeof from === 'number' && typeof to === 'number') {
    //     return emphasizeNumber(from, to, fromRate, toRate, rate);
    // } else if (typeof from === 'string' && typeof to === 'string') {
    //     if (Color.isColor(from)) {
    //         return emphasizeColor(from, to, fromRate, toRate, rate);
    //     } else if (DimentionParser.isSize(from)) {
    //         return sizeValue(new DimentionParser(from), new DimentionParser(to), fromRate, toRate, rate);
    //     }
    // }

    // return from === undefined ? to : from;

    let fromParser: BaseParser | undefined = undefined;
    let toParser: BaseParser | undefined = undefined;

    for (let i = 0; i < parsers.length; i++) {
        const parser = parsers[i];
        if (!fromParser) {
            if (parser.isMatch(fromValue)) {
                fromParser = parser;
            }
        }
        if (!toParser) {
            if (parser.isMatch(toValue)) {
                toParser = parser;
            }
        }
        if (fromParser && toParser) {
            break;
        }
    }

    if (fromParser && toParser) {
        if (fromParser.key() === toParser.key()) {
            return fromParser.emphasize(fromValue, toValue, fromRate, toRate, rate);
        }
    }

    return undefined;
}

function emphasizeStyleProperty(
    fromValue: string | number | undefined,
    toValue: string | number | undefined,
    rate: number,
): string | number | undefined;
function emphasizeStyleProperty(
    fromValue: string | number | undefined,
    toValue: string | number | undefined,
    fromRate: number,
    toRate: number,
    rate: number,
): string | number | undefined;
function emphasizeStyleProperty(
    p1: string | number | undefined,
    p2: string | number | undefined,
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
