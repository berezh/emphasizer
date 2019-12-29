import { BorderParser } from '../../../src/style-property/parsers/border-parser';
import { BorderOption } from '../../../src/style-property/interfaces';

it('BorderParser: isMatch', () => {
    expect(new BorderParser().isMatch('1px solid red')).toBeTruthy();
    expect(new BorderParser().isMatch('0 dots #888888')).toBeTruthy();
    expect(new BorderParser().isMatch('0 dots rgba(255, 255, 255, 0.7)')).toBeTruthy();
    // false
});

it('BorderParser: isMatch - false', () => {
    // false
    expect(new BorderParser().isMatch('1px 1px #888888')).toBeFalsy();
    expect(new BorderParser().isMatch('1px 1px 1px #888888')).toBeFalsy();
});

it('BorderParser: parse', () => {
    expect(new BorderParser().parse('1px solid red')).toMatchObject<BorderOption>({
        value: 1,
        dimension: 'px',
        type: 'solid',
        color: 'red',
    });
    expect(new BorderParser().parse('0 dots     #888888')).toMatchObject<BorderOption>({
        value: 0,
        dimension: undefined,
        type: 'dots',
        color: '#888888',
    });
    expect(new BorderParser().parse('0% dots rgba(255, 255, 255, 0.7)')).toMatchObject<BorderOption>({
        value: 0,
        dimension: '%',
        type: 'dots',
        color: 'rgba(255,255,255,0.7)',
    });
});
