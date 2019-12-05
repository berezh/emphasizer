import { StylePropertyPatterns } from './style-property-patterns';
import { BaseParser, StylePropertyType } from './base-parser';
import { emphasizeNumber } from '../../number';
import { emphasizeColor } from '../../color';
import { BorderOption } from '../interfaces';

export class BorderParser extends BaseParser {
    key = (): string => {
        return 'BorderParser';
    };

    isMatch = (raw: StylePropertyType): boolean => {
        return this.isInnerMatch(raw, StylePropertyPatterns.completeBorder);
    };

    parse = (text: StylePropertyType): BorderOption => {
        const splits = this.split(this.trimColor(text));
        const { value, dimension } = this.parseDimention(splits[0]);
        return {
            value,
            dimension,
            type: splits[1],
            color: splits[2],
        };

        // const raw = this.toString(text);
        // let value = 0;
        // let dimension: string | undefined;
        // let type = '';
        // let restRaw = raw;

        // const dimentionMatches = raw.match(StylePropertyPatterns.startDimention);
        // if (dimentionMatches) {
        //     const dimensionOption = this.parseDimention(dimentionMatches[0]);
        //     if (dimensionOption) {
        //         value = dimensionOption.value;
        //         dimension = dimensionOption.dimension;
        //     }
        //     restRaw = this.trim(raw.replace(dimentionMatches[0], ''));
        // }

        // const typeMatches = restRaw.match(/^\s*[a-z]+/gi);
        // if (typeMatches) {
        //     type = this.firstMatch(/[a-z]+/gi, typeMatches[0]) || '';
        //     restRaw = this.trim(restRaw.replace(typeMatches[0], ''));
        // }

        // return {
        //     value,
        //     dimension,
        //     type,
        //     color: restRaw,
        // };
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
        const { dimension, type } = from;
        const value = emphasizeNumber(from.value, to.value, fromRate, toRate, rate);
        const color = emphasizeColor(from.color, to.color, fromRate, toRate, rate);
        return `${value}${dimension || ''} ${type} ${color}`;
    };
}
