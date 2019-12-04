import { Dimention4Parser } from '../../../src/style-property/parsers';
import { DimentionOption } from '../../../src/style-property/interfaces';

it('Dimention1Parser: isMatch', () => {
    expect(new Dimention4Parser().isMatch('1px 2px 3px 4px')).toBeTruthy();
    expect(new Dimention4Parser().isMatch('1px 2px 3px 4px;')).toBeTruthy();
    expect(new Dimention4Parser().isMatch('1px 2px 3px 4px ;')).toBeTruthy();
});

it('Dimention1Parser: isMatch FALSE', () => {
    expect(new Dimention4Parser().isMatch('1px')).toBeFalsy();
    expect(new Dimention4Parser().isMatch('1px 1px')).toBeFalsy();
    expect(new Dimention4Parser().isMatch('1px 1px 1px')).toBeFalsy();
});

it('Dimention1Parser: parse', () => {
    const dimention1: DimentionOption = {
        value: 1,
        dimension: 'px',
    };
    const dimention2: DimentionOption = {
        value: 2,
        dimension: 'px',
    };
    const dimention3: DimentionOption = {
        value: 3,
        dimension: 'px',
    };
    const dimention4: DimentionOption = {
        value: 4,
        dimension: 'px',
    };
    expect(new Dimention4Parser().parse('1px 2px 3px 4px')).toMatchObject<DimentionOption[]>([
        dimention1,
        dimention2,
        dimention3,
        dimention4,
    ]);
});
