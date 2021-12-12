import { StylePropertyPatterns } from './style-property-patterns';
import { BaseParser, StylePropertyType } from './base-parser';
import { emphasizeNumber } from '../../number';
import { emphasizeColor } from '../../color';
import { BorderOption } from '../interfaces';

export class BorderParser extends BaseParser {
    public get key(): string {
        return 'BorderParser';
    }

    public isMatch(raw: StylePropertyType): boolean {
        return this.match(raw, StylePropertyPatterns.completeBorder);
    }

    public parse(text: StylePropertyType): BorderOption {
        const splits = this.split(this.trimColor(text));
        const { value, dimension } = this.parseDimention(splits[0]);
        return {
            value,
            dimension,
            type: splits[1],
            color: splits[2],
        };
    }

    public emphasize(
        fromValue: StylePropertyType,
        toValue: StylePropertyType,
        fromRate: number,
        toRate: number,
        rate: number
    ): string {
        const from = this.parse(fromValue);
        const to = this.parse(toValue);
        const { dimension, type } = from;
        const value = emphasizeNumber(from.value, to.value, fromRate, toRate, rate);
        const color = emphasizeColor(from.color, to.color, fromRate, toRate, rate);
        return `${value}${dimension || ''} ${type} ${color}`;
    }

    public get propertyNames(): string[] {
        return ['border'];
    }
}
