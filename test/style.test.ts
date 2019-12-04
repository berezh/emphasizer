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

it('style: number', () => {
    expect(
        emphasizeStyle(
            {
                fontSize: 8,
            },
            {
                fontSize: 12,
            },
            0.5,
        ),
    ).toMatchObject({
        fontSize: 10,
    });
});
