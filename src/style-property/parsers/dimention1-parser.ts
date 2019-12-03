import { StylePropertyPatterns } from './style-property-patterns';
import { BaseParser, StylePropertyType } from './base-parser';
import { emphasizeNumber } from '../../number';

export interface DimentionOption {
    value: number;
    dimension?: string;
}

export class Dimention1Parser extends BaseParser {
    key = (): string => {
        return 'DimentionParser';
    };

    isMatch = (raw: StylePropertyType): boolean => {
        return this.isInnerMatch(raw, StylePropertyPatterns.completeDimention1);
    };

    parse = (raw: StylePropertyType): DimentionOption[] => {
        const dimension = this.parseDimention(raw);
        return [dimension];
    };

    emphasize = (fromValue: StylePropertyType, toValue: StylePropertyType, fromRate: number, toRate: number, rate: number): string => {
        const from = this.parse(fromValue);
        const to = this.parse(toValue);
        return this.emphasizeDimentionSet(from, to, fromRate, toRate, rate);
    };
}
