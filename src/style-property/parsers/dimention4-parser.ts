import { StylePropertyPatterns } from './style-property-patterns';
import { BaseParser, StylePropertyType } from './base-parser';
import { DimentionOption } from '../interfaces';

export class Dimention4Parser extends BaseParser {
    public get key(): string {
        return 'DimentionParser';
    }

    public isMatch(raw: StylePropertyType): boolean {
        return this.match(raw, StylePropertyPatterns.completeDimention4);
    }

    public parse(raw: StylePropertyType): DimentionOption[] {
        const options = this.parseDimentionSet(raw);
        return [options[0], options[1], options[2], options[3]];
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
