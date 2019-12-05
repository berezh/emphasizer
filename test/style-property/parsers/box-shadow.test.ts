import { BoxShadow2Parser } from '../../../src/style-property/parsers/box-shadow2-parser';
import { BoxShadow3Parser } from '../../../src/style-property/parsers/box-shadow3-parser';
import { BoxShadow4Parser } from '../../../src/style-property/parsers/box-shadow4-parser';
import { BoxShadowOption } from '../../../src/style-property/interfaces';

it('BoxShadow2Parser: isMatch', () => {
    // true
    expect(new BoxShadow2Parser().isMatch('1px 1px #111')).toBeTruthy();
    expect(new BoxShadow2Parser().isMatch('inset 1px 1px #111')).toBeTruthy();
    expect(new BoxShadow2Parser().isMatch('1px 1px #111 inset')).toBeTruthy();
    // false
    expect(new BoxShadow2Parser().isMatch('1px 1px 1px #111')).toBeFalsy();
});

it('BoxShadow2Parser: parse', () => {
    expect(new BoxShadow2Parser().parse('1px 2px red')).toMatchObject<BoxShadowOption>({
        dimentions: [{ value: 1, dimension: 'px' }, { value: 2, dimension: 'px' }],
        color: 'red',
        inset: false,
    });

    expect(new BoxShadow2Parser().parse('inset 1px 2px #111')).toMatchObject<BoxShadowOption>({
        dimentions: [{ value: 1, dimension: 'px' }, { value: 2, dimension: 'px' }],
        color: '#111',
        inset: true,
    });
});

it('BoxShadow2Parser: isMatch false', () => {
    // false
    expect(new BoxShadow2Parser().isMatch('1px 1px 1px #111')).toBeFalsy();
});

it('BoxShadow3Parser: isMatch', () => {
    // true
    expect(new BoxShadow3Parser().isMatch('1px 1px 1px #111')).toBeTruthy();
    expect(new BoxShadow3Parser().isMatch('1px 1px 1px #111 inset')).toBeTruthy();
    // false
    expect(new BoxShadow3Parser().isMatch('1px 1px 1px 1px #111')).toBeFalsy();
});

it('BoxShadow4Parser: isMatch', () => {
    // true
    expect(new BoxShadow4Parser().isMatch('1px 1px 1px 1px #111')).toBeTruthy();
    expect(new BoxShadow4Parser().isMatch('inset 1px 1px 1px 1px #111')).toBeTruthy();
    // false
    expect(new BoxShadow4Parser().isMatch('1px 1px 1px #111')).toBeFalsy();
});
