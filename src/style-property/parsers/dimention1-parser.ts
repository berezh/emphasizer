import { StylePropertyType } from './base-parser';
import { DimentionOption } from '../interfaces';
import { StylePropertyPatterns } from './style-property-patterns';
import { DimentionBaseParser } from './dimention-base-parser';

export class Dimention1Parser extends DimentionBaseParser {
    public matchDimention(raw: StylePropertyType): boolean {
        return this.match(raw, StylePropertyPatterns.completeDimention1);
    }

    public parse(raw: StylePropertyType): DimentionOption[] {
        const dimension = this.parseDimention(raw);
        return [dimension];
    }
}
