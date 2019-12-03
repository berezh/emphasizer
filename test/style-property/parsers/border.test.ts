import { BorderParser, BorderOption } from '../../../src/style-property/parsers';

it('BorderParser: isMatch', () => {
    expect(new BorderParser().isMatch('1px solid red')).toBeTruthy();
    expect(new BorderParser().isMatch('0 dots #888888')).toBeTruthy();
    expect(new BorderParser().isMatch('0 dots rgba(255, 255, 255, 0.7)')).toBeTruthy();
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
        color: 'rgba(255, 255, 255, 0.7)',
    });
});
