import { StylePropertyPatterns } from './style-property-patterns';
import { BaseParser, StylePropertyType } from './base-parser';
import { BoxShadowOption } from '../interfaces';
import { BoxShadowBaseParser } from './box-shadow-base-parser';

export class BoxShadow4Parser extends BoxShadowBaseParser {
    public matchBoxShadow(raw: StylePropertyType): boolean {
        return this.match(raw, StylePropertyPatterns.completeBoxShadow4);
    }

    public parse(text: StylePropertyType): BoxShadowOption {
        const splits = this.split(this.trimColor(text));
        const dimension1 = this.parseDimention(splits[0]);
        const dimension2 = this.parseDimention(splits[1]);
        const dimension3 = this.parseDimention(splits[2]);
        const dimension4 = this.parseDimention(splits[3]);
        return {
            dimentions: [dimension1, dimension2, dimension3, dimension4],
            color: splits[4],
        };
    }
}