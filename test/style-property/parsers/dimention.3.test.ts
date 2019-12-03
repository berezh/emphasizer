import { Dimention3Parser, DimentionOption } from '../../../src/style-property/parsers';

it('Dimention1Parser: isMatch', () => {
    expect(new Dimention3Parser().isMatch('1px 2px 3px')).toBeTruthy();
    expect(new Dimention3Parser().isMatch('1px 2px 3px;')).toBeTruthy();
    expect(new Dimention3Parser().isMatch('1px 2px 3px ;')).toBeTruthy();
});

it('Dimention1Parser: isMatch FALSE', () => {
    expect(new Dimention3Parser().isMatch('1px')).toBeFalsy();
    expect(new Dimention3Parser().isMatch('1px 1px')).toBeFalsy();
    expect(new Dimention3Parser().isMatch('1px 1px 1px 1px')).toBeFalsy();
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
    expect(new Dimention3Parser().parse('1px 2px 3px')).toMatchObject<DimentionOption[]>([
        dimention1,
        dimention2,
        dimention3,
    ]);
});
