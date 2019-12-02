# emphasizer

React style emphasizer

<a href="https://www.npmjs.com/package/emphasizer">
    <img src="https://nodei.co/npm/emphasizer.png?mini=true">
</a>

## Usage

### Installation:

```jsx
npm install emphasizer
```

## <a href="https://i2ui-examples.now.sh/emphasizer" target="_blank">LIVE DEMO</a>

## Methods

-   [emphasizeStyle()](#emphasizestyle)
-   [emphasizeStyleProperty()](#emphasizestyleproperty)
-   [emphasizeNumber()](#emphasizenumber)

<br/>

### emphasizeStyle(...)

```jsx
function emphasizeStyle(fromStyle: React.CSSProperties, toStyle: React.CSSProperties, rate: number): React.CSSProperties;
```

_Parameters:_

-   `fromStyle`: style with lowest significance
-   `toStyle`: style with highest significance
-   `rate`: rate of emphasized style. Must be fraction from `0` to `1`

_Returns:_ emphasized style

```jsx
function emphasizeStyle(
    fromStyle: React.CSSProperties,
    toStyle: React.CSSProperties,
    fromRate: number,
    toRate: number,
    rate: number,
): React.CSSProperties;
```

_Parameters:_

-   `fromStyle`: style with lowest significance
-   `toStyle`: style with highest significance
-   `fromRate`: min rate value
-   `toRate`: max rate value
-   `rate`: rate of emphasized style. Must be value from `fromRate` to `toRate`

_Returns:_ emphasized style

_Example_

```js
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
```

### emphasizeStyleProperty(...)

```jsx
function emphasizeStyleProperty(
    fromValue: string | number,
    toValue: string | number,
    rate: number
): string | number | undefined;
```

_Parameters:_

-   `fromValue`: style property value with lowest significance
-   `toValue`: style property value with highest significance
-   `rate`: rate of emphasized style property. Must be fraction from `0` to `1`

_Returns:_ emphasized style property value

```jsx
function emphasizeStyleProperty(
    fromValue: string | number,
    toValue: string | number,
    fromRate: number,
    toRate: number,
    rate: number,
): string | number | undefined;
```

_Parameters:_

-   `fromValue`: style property value with lowest significance
-   `toValue`: style property value with highest significance
-   `fromRate`: min rate value
-   `toRate`: max rate value
-   `rate`: rate of emphasized style property. Must be value from `fromRate` to `toRate`

_Returns:_ emphasized style property value

_Example_

```js
// dimention
emphasizeStyleProperty('8px', '12px', 0.5); // => '10px'
emphasizeStyleProperty('8px', '12px', 0, 2, 1); // => '10px'

emphasizeStyleProperty('8px 8px', '12px 12px', 0.5); // => '10px 10px'
emphasizeStyleProperty('8px 8px 8px 8px', '12px 12px 12px 12px', 0.5); // =>  '10px 10px 10px 10px'

// color
emphasizeStyleProperty('#222222', '#444444', 0.5); // => '#333333'
emphasizeStyleProperty('green', 'blue', 0.5); // => '#004080'
emphasizeStyleProperty('rgb(0,0,0)', 'rgb(100,100,100)', 0.5); // => '#323232'
```

### emphasizeNumber(...)

```jsx
function emphasizeNumber(fromValue: number, toValue: number, rate: number): number;
```

_Parameters:_

-   `fromValue`: value with lowest significance
-   `toValue`: value with highest significance
-   `rate`: rate of emphasized value. Must be fraction from `0` to `1`

_Returns:_ emphasized value

```jsx
function emphasizeNumber(fromValue: number, toValue: number, fromRate: number, toRate: number, rate: number): number;
```

_Parameters:_

-   `fromValue`: value with lowest significance
-   `toValue`: value with highest significance
-   `fromRate`: min rate value
-   `toRate`: max rate value
-   `rate`: rate of emphasized style property. Must be value from `fromRate` to `toRate`

_Returns:_ emphasized value

_Example_

```js
emphasizeNumber(0, 10, 0.5); // => 5
emphasizeNumber(0, 10, 2, 4, 3); // => 5
```
