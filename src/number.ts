// todo: test from == to, fromRate == toRate
// returns rated value
function emphasizeNumberBase(
    fromValue: number,
    toValue: number,
    fromRate: number,
    toRate: number,
    rate: number
): number {
    const valueDirection = fromValue <= toValue;
    const minValue = Math.min(fromValue, toValue);
    const maxValue = Math.max(fromValue, toValue);
    const valueRange = maxValue - minValue;

    const rateDirection = fromRate <= toRate;
    const minRate = Math.min(fromRate, toRate);
    const maxRate = Math.max(fromRate, toRate);
    const rateRange = maxRate - minRate;

    let valueDelta = (valueRange / rateRange) * (rate - minRate);
    // to fixed 2
    valueDelta = Math.round(valueDelta * 100) / 100;

    if (valueDirection === rateDirection) {
        return keepRange(fromValue, toValue, minValue + valueDelta);
    } else {
        return keepRange(fromValue, toValue, maxValue - valueDelta);
    }
}

function keepRange(from: number, to: number, value: number): number {
    const max = Math.max(from, to);
    const min = Math.min(from, to);
    if (value < min) {
        return min;
    } else if (value > max) {
        return max;
    } else {
        return value;
    }
}

function emphasizeNumber(fromValue: number, toValue: number, rate: number): number;
function emphasizeNumber(fromValue: number, toValue: number, fromRate: number, toRate: number, rate: number): number;
function emphasizeNumber(p1: number, p2: number, p3: number, p4?: number, p5?: number): number {
    if (typeof p4 === 'number' && typeof p5 === 'number') {
        return emphasizeNumberBase(p1, p2, p3, p4, p5);
    } else {
        return emphasizeNumberBase(p1, p2, 0, 1, p3);
    }
}

export { emphasizeNumber };
