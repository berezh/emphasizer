import { Emphasizer } from '../../src/emphasizer';

it('Emphasizer-number: same', () => {
    expect(Emphasizer.number(0, 10, 0, 10, 0)).toEqual(0);
    expect(Emphasizer.number(0, 10, 0, 10, 10)).toEqual(10);
    //
    expect(Emphasizer.number(0, 10, 0, 10, 5)).toEqual(5);
});

it('Emphasizer-number: adge', () => {
    expect(Emphasizer.number(100, 200, 0, 10, 0)).toEqual(100);
    expect(Emphasizer.number(100, 200, 0, 10, 5)).toEqual(150);
    expect(Emphasizer.number(100, 200, 0, 10, 10)).toEqual(200);
});

it('Emphasizer-number: versus', () => {
    expect(Emphasizer.number(10, 0, 0, 10, 1)).toEqual(9);
    expect(Emphasizer.number(0, 10, 10, 0, 1)).toEqual(9);
});

it('Emphasizer-number: adge 2', () => {
    expect(Emphasizer.number(255, 0, 5298, 2420069, 2420069)).toEqual(0);
    expect(Emphasizer.number(0, 255, 5298, 2420069, 2420069)).toEqual(255);
});

it('Emphasizer-number: font-size', () => {
    expect(Emphasizer.number(1, 3, 1, 4, 3)).toEqual(2.33);
});

// {fontSize: "1em"} {fontSize: "3em"} 1 4 3 {fontSize: "3em"}