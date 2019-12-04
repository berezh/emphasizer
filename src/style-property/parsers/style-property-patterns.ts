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

function startDimention(): string {
    return `^${whiteSpace()}${dimentionValue()}${anyDimentionUnit()}`;
}

function completeDimention(count = 1): string {
    const set: string[] = [];
    for (let i = 0; i < count; i++) {
        set.push(dimention());
    }

    return wrapStartEnd(`${set.join(whiteSpace())}${whiteSpace()}${wrapOptional(semicolon())}`);
}

function color(): string {
    return '[a-z0-9\,\(\)#\. ]+';
}

function type(): string {
    return '[a-z]+';
}

function completeBorder(): string {
    // 1px solid gray|#111|rgb(10,10,10)
    return wrapStartEnd(
        `${dimention()}${whiteSpace()}${type()}${whiteSpace()}${color()}${whiteSpace()}${wrapOptional(semicolon())}`,
    );
}

export class StylePropertyPatterns {
    public static completeDimention1 = new RegExp(completeDimention(1), 'gi');

    public static completeDimention2 = new RegExp(completeDimention(2), 'gi');

    public static completeDimention3 = new RegExp(completeDimention(3), 'gi');

    public static completeDimention4 = new RegExp(completeDimention(4), 'gi');

    public static dimention = new RegExp(dimention(), 'gi');

    public static startDimention = new RegExp(startDimention(), 'gi');

    public static dimentionValue = new RegExp(dimentionValue(), 'gi');

    public static hasDimentionUnit = new RegExp(hasDimentionUnit(), 'gi');

    public static completeBorder = new RegExp(completeBorder(), 'gi');
}
