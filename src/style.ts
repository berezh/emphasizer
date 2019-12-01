import { emphasizeStyleProperty } from './style-property';

function emphasizeStyleBase(
    from: React.CSSProperties,
    to: React.CSSProperties,
    fromRate: number,
    toRate: number,
    rate: number,
): React.CSSProperties {
    const result: React.CSSProperties = {};

    for (const key in from) {
        if (from.hasOwnProperty(key) && to.hasOwnProperty(key)) {
            (result as any)[key] = emphasizeStyleProperty((from as any)[key], (to as any)[key], fromRate, toRate, rate);
        }
    }

    return result;
}

function emphasizeStyle(from: React.CSSProperties, to: React.CSSProperties, rate: number): React.CSSProperties;
function emphasizeStyle(
    from: React.CSSProperties,
    to: React.CSSProperties,
    fromRate: number,
    toRate: number,
    rate: number,
): React.CSSProperties;
function emphasizeStyle(
    p1: React.CSSProperties,
    p2: React.CSSProperties,
    p3: number,
    p4?: number,
    p5?: number,
): React.CSSProperties {
    if (typeof p4 === 'number' && typeof p5 === 'number') {
        return emphasizeStyleBase(p1, p2, p3, p4, p5);
    } else {
        return emphasizeStyleBase(p1, p2, 0, 1, p3);
    }
}

export { emphasizeStyle };
