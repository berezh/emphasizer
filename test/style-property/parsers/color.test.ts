import { ColorParser } from '../../../src/style-property/parsers';

it('StyleParser: isMatch', () => {
    expect(new ColorParser().isMatch('#111111')).toBeTruthy();
});

it('StyleParser: parse', () => {
    expect(new ColorParser().parse('#111111')).toEqual('#111111');
});
