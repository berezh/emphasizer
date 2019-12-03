import { StylePropertyPatterns } from './style-property-patterns';

// const DimentionPatterns = {
//     length: /\d+[a-z%]*/gi,
//     number: /\d+/gi,
//     dimension: /[a-z%]+/gi,
//     lenght1: /^\s*(\s*\d+[a-z%]*\s*){1}\s*(;)?\s*$/gi,
//     lenght2: /^\s*(\s*\d+[a-z%]*\s*){2}\s*(;)?\s*$/gi,
//     lenght3: /^\s*(\s*\d+[a-z%]*\s*){3}\s*(;)?\s*$/gi,
//     lenght4: /^\s*(\s*\d+[a-z%]*\s*){4}\s*(;)?\s*$/gi,
// };

export interface DimentionUnit {
    value: number;
    dimension?: string;
}

export class DimentionParser {
    public static isSize(raw: string): boolean {
        return (
            DimentionParser.isSingle(raw) ||
            DimentionParser.isDouble(raw) ||
            DimentionParser.isTriple(raw) ||
            DimentionParser.isQuadro(raw)
        );
    }

    public static isSingle(raw: string): boolean {
        return DimentionParser.isMatched(StylePropertyPatterns.completeDimention(), raw);
    }

    public static isDouble(raw: string): boolean {
        return DimentionParser.isMatched(StylePropertyPatterns.completeDimention(2), raw);
    }

    public static isTriple(raw: string): boolean {
        return DimentionParser.isMatched(StylePropertyPatterns.completeDimention(3), raw);
    }

    public static isQuadro(raw: string): boolean {
        return DimentionParser.isMatched(StylePropertyPatterns.completeDimention(4), raw);
    }

    public static isMatched(pattern: RegExp | string, raw: string): boolean {
        return typeof raw === 'string' && raw.match(pattern) !== null;
    }

    public units: DimentionUnit[] = [];
    public dimension?: string;

    constructor(raw: string);
    constructor(units: DimentionUnit[]);

    constructor(p: any) {
        if (typeof p === 'string') {
            if (DimentionParser.isSize(p)) {
                this.units = this.parseUnits(p);
                const dimensionUnit = this.units.find(x => x.dimension);
                if (dimensionUnit) {
                    this.dimension = dimensionUnit.dimension;
                }
            }
        } else if (Array.isArray(p)) {
            this.units = p;
            const dimensionUnit = this.units.find(x => x.dimension);
            if (dimensionUnit) {
                this.dimension = dimensionUnit.dimension;
            }
        }
    }

    public toString(): string {
        let result = '';
        for (const unit of this.units) {
            result += `${unit.value}${this.dimension} `;
        }

        return result.replace(/\s*$/g, '');
    }

    public isMatched(instance: DimentionParser): boolean {
        return this.units.length === instance.units.length && this.dimension === instance.dimension;
    }

    private parseUnits(raw: string): DimentionUnit[] {
        const result: DimentionUnit[] = [];
        const matches = raw.match(StylePropertyPatterns.dimention());
        if (matches) {
            for (const match of matches) {
                const unit = {
                    value: parseFloat(this.firstMatch(StylePropertyPatterns.dimentionValue(), match) || '0'),
                    dimension: this.firstMatch(StylePropertyPatterns.hasDimentionUnit(), match),
                };
                result.push(unit);
            }
        }

        return result;
    }

    private firstMatch(pattern: RegExp | string, raw: string): string | undefined {
        let result;
        const matches = raw.match(pattern);
        if (matches) {
            result = matches[0];
        }

        return result;
    }
}
