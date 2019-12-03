// length: /\d+[a-z%]*/gi,
// number: /\d+/gi,
// dimension: /[a-z%]+/gi,
// lenght1: /^\s*(\s*\d+[a-z%]*\s*){1}\s*(;)?\s*$/gi,
// lenght2: /^\s*(\s*\d+[a-z%]*\s*){2}\s*(;)?\s*$/gi,
// lenght3: /^\s*(\s*\d+[a-z%]*\s*){3}\s*(;)?\s*$/gi,
// lenght4: /^\s*(\s*\d+[a-z%]*\s*){4}\s*(;)?\s*$/gi,

function dimentionValue(): string {
    return '\\d\+';
}

function hasDimentionUnit(): string {
    return '[a-z%]\+';
}

function anyDimentionUnit(): string {
    return '([a-z%])*';
}

function semicolon(): string {
    return ';';
}

function whiteSpace(): string {
    return '\\s\*';
}

function wrapStartEnd(input: string): string {
    return `\^${whiteSpace()}${input}${whiteSpace()}\$`;
}

function wrapOptional(input: string): string {
    return `(${input})?`;
}

function dimention(): string {
    return `${dimentionValue()}${anyDimentionUnit()}`;
}

function completeDimention(count: number = 1): string {
    const set: string[] = [];
    for (let i = 0; i < count; i++) {
        set.push(dimention());
    }

    return wrapStartEnd(`${set.join(whiteSpace())}${whiteSpace()}${wrapOptional(semicolon())}`);
}

export class StylePropertyPatterns {
    public static completeDimention(count: number = 1): RegExp {
        return new RegExp(completeDimention(count), 'gi');
    }

    public static dimention() {
        return new RegExp(dimention(), 'gi');
    }

    public static dimentionValue() {
        return new RegExp(dimentionValue(), 'gi');
    }

    public static hasDimentionUnit() {
        return new RegExp(hasDimentionUnit(), 'gi');
    }
}
