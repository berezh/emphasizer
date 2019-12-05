import { BaseParser, StylePropertyType } from './base-parser';
import { DimentionOption } from '../interfaces';
import { StylePropertyPatterns } from './style-property-patterns';

export class Dimention1Parser extends BaseParser {
    public get key(): string {
        return 'DimentionParser';
    }

    public isMatch(raw: StylePropertyType): boolean {
        return this.match(raw, StylePropertyPatterns.completeDimention1);
    }

    public parse(raw: StylePropertyType): DimentionOption[] {
        const dimension = this.parseDimention(raw);
        return [dimension];
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
