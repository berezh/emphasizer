import { StylePropertyPatterns } from './style-property-patterns';
import { StylePropertyType } from './base-parser';
import { BoxShadowOption } from '../interfaces';
import { BoxShadowBaseParser } from './box-shadow-base-parser';

export class BoxShadow2Parser extends BoxShadowBaseParser {
    public matchBoxShadow(raw: StylePropertyType): boolean {
        return this.match(raw, StylePropertyPatterns.completeBoxShadow2);
    }

    public parse(text: StylePropertyType): BoxShadowOption {
        let raw = this.toString(text);
        const inset = /\s*inset\s*/gi.test(raw);
        if (inset) {
            raw = raw.replace(/inset/gi, '');
        }

        // .replace('inset', '');
        const splits = this.split(this.trimColor(raw));
        const dimension1 = this.parseDimention(splits[0]);
        const dimension2 = this.parseDimention(splits[1]);
        return {
            inset,
            dimentions: [dimension1, dimension2],
            color: splits[2],
        };
    }
}
