import { StylePropertyPatterns } from './style-property-patterns';
import { BaseParser, StylePropertyType } from './base-parser';
import { DimentionOption } from '../interfaces';

export class Dimention3Parser extends BaseParser {
    key = (): string => {
        return 'DimentionParser';
    };

    isMatch = (raw: StylePropertyType): boolean => {
        return this.isInnerMatch(raw, StylePropertyPatterns.completeDimention3);
    };

    parse = (raw: StylePropertyType): DimentionOption[] => {
        const options = this.parseDimentionSet(raw);
        return [options[0], options[1], options[2]];
    };

    emphasize = (
        fromValue: StylePropertyType,
        toValue: StylePropertyType,
        fromRate: number,
        toRate: number,
        rate: number,
    ): string => {
        const from = this.parse(fromValue);
        const to = this.parse(toValue);
        return this.emphasizeDimentionSet(from, to, fromRate, toRate, rate);
    };
}