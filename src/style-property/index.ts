import {
    ColorParser,
    Dimention1Parser,
    Dimention2Parser,
    Dimention3Parser,
    Dimention4Parser,
    BorderParser,
    BaseParser,
    BoxShadow2Parser,
    BoxShadow3Parser,
    BoxShadow4Parser,
} from './parsers';
import { emphasizeNumber } from '../number';

function initParsers(): BaseParser[] {
    return [
        new Dimention1Parser(),
        new Dimention2Parser(),
        new Dimention3Parser(),
        new Dimention4Parser(),
        new ColorParser(),
        new BorderParser(),
        new BoxShadow2Parser(),
        new BoxShadow3Parser(),
        new BoxShadow4Parser(),
    ];
}

const parsers: BaseParser[] = initParsers();

function emphasizeStylePropertyBase(
    fromValue: string | number | undefined,
    toValue: string | number | undefined,
    fromRate: number,
    toRate: number,
    rate: number,
): string | number | undefined {
    if (typeof fromValue === 'number' && typeof toValue === 'number') {
        return emphasizeNumber(fromValue, toValue, fromRate, toRate, rate);
    } else {
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
