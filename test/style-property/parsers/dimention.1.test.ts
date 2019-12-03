import { Dimention1Parser, DimentionOption } from '../../../src/style-property/parsers';

it('Dimention1Parser: isMatch', () => {
    expect(new Dimention1Parser().isMatch('1px')).toBeTruthy();
    expect(new Dimention1Parser().isMatch('1px;')).toBeTruthy();
    expect(new Dimention1Parser().isMatch('1px ;')).toBeTruthy();
});

it('Dimention1Parser: isMatch FALSE', () => {
    expect(new Dimention1Parser().isMatch('1px 1px')).toBeFalsy();
});

it('Dimention1Parser: parse', () => {
    const dimention1: DimentionOption = {
        value: 1,
        dimension: 'px',
    };
    expect(new Dimention1Parser().parse('1px')).toMatchObject<DimentionOption[]>([dimention1]);
});
