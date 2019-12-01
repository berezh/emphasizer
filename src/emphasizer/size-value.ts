const SizePatterns = {
    length: /\d+[a-z%]*/gi,
    number: /\d+/gi,
    dimension: /[a-z%]+/gi,
    lenght1: /^\s*(\s*\d+[a-z%]*\s*){1}\s*(;)?\s*$/gi,
    lenght2: /^\s*(\s*\d+[a-z%]*\s*){2}\s*(;)?\s*$/gi,
    lenght3: /^\s*(\s*\d+[a-z%]*\s*){3}\s*(;)?\s*$/gi,
    lenght4: /^\s*(\s*\d+[a-z%]*\s*){4}\s*(;)?\s*$/gi,
};

export interface SizeUnit {
    value: number;
    dimension?: string;
}

export class SizeValue {
    public static isSize(raw: string): boolean {
        return SizeValue.isSingle(raw) || SizeValue.isDouble(raw) || SizeValue.isTriple(raw) || SizeValue.isQuadro(raw);
    }

    public static isSingle(raw: string): boolean {
        return SizeValue.isMatched(SizePatterns.lenght1, raw);
    }

    public static isDouble(raw: string): boolean {
        return SizeValue.isMatched(SizePatterns.lenght2, raw);
    }

    public static isTriple(raw: string): boolean {
        return SizeValue.isMatched(SizePatterns.lenght3, raw);
    }

    public static isQuadro(raw: string): boolean {
        return SizeValue.isMatched(SizePatterns.lenght4, raw);
    }

    public static isMatched(pattern: RegExp, raw: string): boolean {
        return typeof raw === 'string' && raw.match(pattern) !== null;
    }

    public units: SizeUnit[] = [];
    public dimension?: string;

    constructor(raw: string);
    constructor(units: SizeUnit[]);

    constructor(p: any) {
        if (typeof p === 'string') {
            if (SizeValue.isSize(p)) {
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

    public isMatched(instance: SizeValue): boolean {
        return this.units.length === instance.units.length && this.dimension === instance.dimension;
    }

    private parseUnits(raw: string): SizeUnit[] {
        const result: SizeUnit[] = [];
        const matches = raw.match(SizePatterns.length);
        if (matches) {
            for (const match of matches) {
                const unit = {
                    value: parseFloat(this.firstMatch(SizePatterns.number, match) || '0'),
                    dimension: this.firstMatch(SizePatterns.dimension, match),
                };
                result.push(unit);
            }
        }

        return result;
    }

    private firstMatch(pattern: RegExp, raw: string): string | undefined {
        let result;
        const matches = raw.match(pattern);
        if (matches) {
            result = matches[0];
        }

        return result;
    }
}
