import { toHex } from 'jolor';
import { emphasizeColor, splitColor } from '../../src';

it('Emphasizer-number: adge', () => {
    emphColor([0, 100, 200], [10, 110, 210], 0, 10, 5, [5, 105, 205]);
    emphColor([0, 100, 200], [100, 200, 250], 0, 10, 5, [50, 150, 225]);
});

it('Emphasizer: green - blue', () => {
    emphColor([0, 255, 0], [0, 0, 255], 0, 10, 10, [0, 0, 255]);
    emphColor([0, 255, 0], [0, 0, 255], 0, 10, 0, [0, 255, 0]);
});

it('Emphasizer: minus', () => {
    emphColor([0, 255, 0], [0, 0, 255], 5298, 2420069, 2420069, [0, 0, 255]);
});

function emphColor(from: number[], to: number[], fromRate: number, toRate: number, rate: number, value: number[]) {
    expect(emphasizeColor(toHex(from) as any, toHex(to) as any, fromRate, toRate, rate)).toEqual(toHex(value));
}

it('color: range', () => {
    expect(splitColor('#000', '#333', 4)).toMatchObject(['#000000', '#111111', '#222222', '#333333']);
});

it('color: range 2', () => {
    expect(splitColor('#aaa', '#888', 4)).toMatchObject(['#aaaaaa', '#9f9f9f', '#939393', '#888888']);
});

// colorRange("#aaa", "#888", 4)
