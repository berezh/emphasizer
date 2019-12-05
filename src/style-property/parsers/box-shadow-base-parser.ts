import { BaseParser, StylePropertyType } from './base-parser';
import { BoxShadowOption } from '../interfaces';
import { emphasizeColor } from '../../color';

export abstract class BoxShadowBaseParser extends BaseParser {
    public abstract parse(text: StylePropertyType): BoxShadowOption;
    public abstract matchBoxShadow(text: StylePropertyType): boolean;

    public get key(): string {
        return 'BoxShadowParser';
    }

    public isMatch(text: StylePropertyType): boolean {
        return this.matchBoxShadow(text);
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
        const dimentionString = this.emphasizeDimentionSet(from.dimentions, to.dimentions, fromRate, toRate, rate);
        const color = emphasizeColor(from.color, to.color, fromRate, toRate, rate);
        return `${from.inset && to.inset ? `inset ` : ''}${dimentionString} ${color}`;
    }
}
