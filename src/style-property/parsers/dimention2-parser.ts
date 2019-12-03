import { StylePropertyPatterns } from './style-property-patterns';
import { BaseParser, StylePropertyType } from './base-parser';
import { DimentionOption } from './dimention1-parser';

export class Dimention2Parser extends BaseParser {
    key = (): string => {
        return 'DimentionParser';
    };

    isMatch = (raw: StylePropertyType): boolean => {
        return this.isInnerMatch(raw, StylePropertyPatterns.completeDimention2);
    };

    parse = (raw: StylePropertyType): DimentionOption[] => {
        const options = this.parseDimentionSet(raw);
        return [options[0], options[1]];
    };

    emphasize = (fromValue: StylePropertyType, toValue: StylePropertyType, fromRate: number, toRate: number, rate: number): string => {
        const from = this.parse(fromValue);
        const to = this.parse(toValue);
        return this.emphasizeDimentionSet(from, to, fromRate, toRate, rate);
    };
}
