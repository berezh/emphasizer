import { ColorParser } from '../../../src/style-property/parsers/color-parser';

it('StyleParser: isMatch', () => {
    expect(new ColorParser().isMatch('#111111')).toBeTruthy();
});
