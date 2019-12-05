import { StylePropertyPatterns } from './style-property-patterns';
import { StylePropertyType } from './base-parser';
import { DimentionOption } from '../interfaces';
import { DimentionBaseParser } from './dimention-base-parser';

export class Dimention3Parser extends DimentionBaseParser {
    public isMatch(raw: StylePropertyType): boolean {
        return this.match(raw, StylePropertyPatterns.completeDimention3);
    }

    public parse(raw: StylePropertyType): DimentionOption[] {
        const options = this.parseDimentionSet(raw);
        return [options[0], options[1], options[2]];
    }

    public get propertyNames(): string[] {
        return ['margin', 'padding'];
    }
}
