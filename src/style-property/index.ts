import { BaseParser } from './parsers';
import { emphasizeNumber } from '../number';
import { ParserManager, AllParsers } from './parser-manager';
import { SupportedStyleName } from './interfaces';

function emphasizeStylePropertyBase(
    name: SupportedStyleName | string,
    fromValue: string | number | undefined,
    toValue: string | number | undefined,
    fromRate: number,
    toRate: number,
    rate: number,
): string | number | undefined {
    if (typeof fromValue === 'number' && typeof toValue === 'number') {
        return emphasizeNumber(fromValue, toValue, fromRate, toRate, rate);
    } else {
        const parsers = ParserManager[name];
        if (parsers && parsers.length) {
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
                if (fromParser.key === toParser.key) {
                    return fromParser.emphasize(fromValue, toValue, fromRate, toRate, rate);
                }
            } else if (fromParser) {
                return fromValue;
            } else if (toParser) {
                return toValue;
            }
        }
    }

    return undefined;
}

function emphasizeStyleProperty(
    name: SupportedStyleName | string,
    fromValue: string | number | undefined,
    toValue: string | number | undefined,
    rate: number,
): string | number | undefined;
function emphasizeStyleProperty(
    name: SupportedStyleName | string,
    fromValue: string | number | undefined,
    toValue: string | number | undefined,
    fromRate: number,
    toRate: number,
    rate: number,
): string | number | undefined;
function emphasizeStyleProperty(
    p0: string,
    p1: string | number | undefined,
    p2: string | number | undefined,
    p3: number,
    p4?: number,
    p5?: number,
): string | number | undefined {
    if (typeof p4 === 'number' && typeof p5 === 'number') {
        return emphasizeStylePropertyBase(p0, p1, p2, p3, p4, p5);
    } else {
        return emphasizeStylePropertyBase(p0, p1, p2, 0, 1, p3);
    }
}

export { emphasizeStyleProperty };
