import { BaseParser, StylePropertyType } from './base-parser';
import { DimentionOption } from '../interfaces';

export abstract class DimentionBaseParser extends BaseParser {
    public abstract parse(text: StylePropertyType): DimentionOption[];
    public abstract matchDimention(text: StylePropertyType): boolean;

    public get key(): string {
        return 'DimentionParser';
    }

    public isMatch(raw: StylePropertyType): boolean {
        return this.matchDimention(raw);
    }

    public emphasize(
        fromValue: StylePropertyType,
        toValue: StylePropertyType,
        fromRate: number,
        toRate: number,
        rate: number,
    ): string {
        const from = this.parse(fromValue);
        const to = this.parse(toValue);
        return this.emphasizeDimentionSet(from, to, fromRate, toRate, rate);
    }
}
