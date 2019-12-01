import { emphasizeStyle } from '../src';

it('style: simple', () => {
    expect(
        emphasizeStyle(
            {
                width: '8px',
                margin: '2px 2px',
                color: '#222222',
            },
            {
                width: '12px',
                margin: '6px 6px',
                color: '#888888',
            },
            0.5,
        ),
    ).toMatchObject({
        width: '10px',
        margin: '4px 4px',
        color: '#555555',
    });
});

// it('styleProperty: dimention - px', () => {
//     expect(emphasizeStyleProperty('8px', '12px', 0.5)).toEqual('10px');
//     expect(emphasizeStyleProperty('8px', '12px', 0, 2, 1)).toEqual('10px');
// });

// it('styleProperty: dimention - px px', () => {
//     expect(emphasizeStyleProperty('8px 8px', '12px 12px', 0.5)).toEqual('10px 10px');
// });

// it('styleProperty: dimention - px px px px', () => {
//     expect(emphasizeStyleProperty('8px 8px 8px 8px', '12px 12px 12px 12px', 0.5)).toEqual('10px 10px 10px 10px');
// });

// it('styleProperty: color - hex', () => {
//     expect(emphasizeStyleProperty('#222222', '#444444', 0.5)).toEqual('#333333');
// });

// it('styleProperty: color - name', () => {
//     expect(emphasizeStyleProperty('green', 'blue', 0.5)).toEqual('#004080');
// });

// it('styleProperty: color - rgb', () => {
//     expect(emphasizeStyleProperty('rgb(0,0,0)', 'rgb(100,100,100)', 0.5)).toEqual('#323232');
// });
