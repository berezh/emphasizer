import { BaseParser, StylePropertyType } from './base-parser';
import { emphasizeColor } from '../../color';
import { ColorRegexPattern } from 'jolor/lib/units';

export class ColorParser extends BaseParser {
    private colorParser = new ColorRegexPattern();

    public get key(): string {
        return 'ColorParser';
    }

    public isMatch(raw: StylePropertyType): boolean {
        return this.colorParser.isColor(this.toString(raw));
    }

    public emphasize(
        from: StylePropertyType,
        to: StylePropertyType,
        fromRate: number,
        toRate: number,
        rate: number
    ): string {
        return emphasizeColor(this.toString(from), this.toString(to), fromRate, toRate, rate);
    }

    public get propertyNames(): string[] {
        return ['color'];
    }
}
