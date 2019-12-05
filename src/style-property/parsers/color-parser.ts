import { BaseParser, StylePropertyType } from './base-parser';
import { emphasizeColor } from '../../color';

export class ColorParser extends BaseParser {
    key = (): string => {
        return 'ColorParser';
    };

    isMatch = (raw: StylePropertyType): boolean => {
        return this.parserColor.isColor(this.toString(raw));
    };

    emphasize = (
        from: StylePropertyType,
        to: StylePropertyType,
        fromRate: number,
        toRate: number,
        rate: number,
    ): string => {
        return emphasizeColor(this.toString(from), this.toString(to), fromRate, toRate, rate);
    };
}
