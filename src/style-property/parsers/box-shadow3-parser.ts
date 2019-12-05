import { StylePropertyPatterns } from './style-property-patterns';
import { StylePropertyType } from './base-parser';
import { BoxShadowOption } from '../interfaces';
import { BoxShadowBaseParser } from './box-shadow-base-parser';

export class BoxShadow3Parser extends BoxShadowBaseParser {
    public matchBoxShadow(raw: StylePropertyType): boolean {
        return this.match(raw, StylePropertyPatterns.completeBoxShadow3);
    }

    public parse(text: StylePropertyType): BoxShadowOption {
        const splits = this.split(this.trimColor(text));
        const dimension1 = this.parseDimention(splits[0]);
        const dimension2 = this.parseDimention(splits[1]);
        const dimension3 = this.parseDimention(splits[2]);
        return {
            dimentions: [dimension1, dimension2, dimension3],
            color: splits[3],
        };
    }
}