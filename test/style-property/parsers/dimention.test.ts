import { DimentionParser } from '../../../src';

it('Size-Value: isSize', () => {
    // isSingle
    expect(DimentionParser.isSingle('1px')).toBeTruthy();
    expect(DimentionParser.isSingle('1px;')).toBeTruthy();
    expect(DimentionParser.isSingle(' 1px ;   ')).toBeTruthy();

    expect(DimentionParser.isSingle('1px 1px')).toBeFalsy();

    // isDouble
    expect(DimentionParser.isDouble('1px 1px')).toBeTruthy();
    expect(DimentionParser.isDouble(' 1px     1px ')).toBeTruthy();

    expect(DimentionParser.isDouble('1px')).toBeFalsy();

    // isTriple
    expect(DimentionParser.isTriple('1px 1px 1px')).toBeTruthy();
    expect(DimentionParser.isTriple(' 1px      1px 1px ;')).toBeTruthy();

    expect(DimentionParser.isTriple('1px')).toBeFalsy();
    expect(DimentionParser.isTriple('1px 1px')).toBeFalsy();

    // isQuadro
    expect(DimentionParser.isQuadro('1px 1px 1px 1px')).toBeTruthy();
    expect(DimentionParser.isQuadro(' 1px 1px 1px      1px;')).toBeTruthy();

    expect(DimentionParser.isQuadro('1px')).toBeFalsy();
    expect(DimentionParser.isQuadro('1px 1px')).toBeFalsy();
    expect(DimentionParser.isQuadro('1px 1px 1px')).toBeFalsy();
    expect(DimentionParser.isQuadro('1px 1px 1px 1px      1px')).toBeFalsy();
});

it('Size-Value: isSize diff units', () => {
    // isSingle
    expect(DimentionParser.isDouble('1 1px')).toBeTruthy();
    expect(DimentionParser.isDouble('1un 1px')).toBeTruthy();
    expect(DimentionParser.isSize('1 1% 1')).toBeTruthy();
});

it('Size-Value: units parser: 1unit', () => {
    const c = new DimentionParser('1unit');
    expect(c.dimension).toEqual('unit');
    expect(c.units).toMatchObject([
        {
            dimension: 'unit',
            value: 1,
        },
    ]);
});

it('Size-Value: units parser: 1 2unit', () => {
    const c = new DimentionParser('1 2unit');
    expect(c.dimension).toEqual('unit');
    expect(c.units).toMatchObject([
        {
            dimension: undefined,
            value: 1,
        },
        {
            dimension: 'unit',
            value: 2,
        },
    ]);
});

it('Size-Value: units parser: 1unit 2unit 3unit 4unit', () => {
    const c = new DimentionParser('1unit 2unit 3unit 4unit');
    expect(c.dimension).toEqual('unit');
    expect(c.units).toMatchObject([
        {
            dimension: 'unit',
            value: 1,
        },
        {
            dimension: 'unit',
            value: 2,
        },
        {
            dimension: 'unit',
            value: 3,
        },
        {
            dimension: 'unit',
            value: 4,
        },
    ]);
});

it('Size-Value: toString', () => {
    sizeValueTest('1px');
    sizeValueTest('1px 1px');
    sizeValueTest('1px 1px 1px');
    sizeValueTest('1px 1px 1px 1px');

    sizeValueTest('1 1px', '1px 1px');
    sizeValueTest('1 1% 1', '1% 1% 1%');
});

function sizeValueTest(raw: string, received?: string): void {
    expect(new DimentionParser(raw).toString()).toEqual(received || raw);
}
