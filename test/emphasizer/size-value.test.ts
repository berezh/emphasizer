import { SizeValue } from "../../src/emphasizer";

it("Size-Value: isSize", () => {
    // isSingle
    expect(SizeValue.isSingle("1px")).toBeTruthy();
    expect(SizeValue.isSingle("1px;")).toBeTruthy();
    expect(SizeValue.isSingle(" 1px ;   ")).toBeTruthy();

    expect(SizeValue.isSingle("1px 1px")).toBeFalsy();

    // isDouble
    expect(SizeValue.isDouble("1px 1px")).toBeTruthy();
    expect(SizeValue.isDouble(" 1px     1px ")).toBeTruthy();

    expect(SizeValue.isDouble("1px")).toBeFalsy();

    // isTriple
    expect(SizeValue.isTriple("1px 1px 1px")).toBeTruthy();
    expect(SizeValue.isTriple(" 1px      1px 1px ;")).toBeTruthy();

    expect(SizeValue.isTriple("1px")).toBeFalsy();
    expect(SizeValue.isTriple("1px 1px")).toBeFalsy();

    // isQuadro
    expect(SizeValue.isQuadro("1px 1px 1px 1px")).toBeTruthy();
    expect(SizeValue.isQuadro(" 1px 1px 1px      1px;")).toBeTruthy();

    expect(SizeValue.isQuadro("1px")).toBeFalsy();
    expect(SizeValue.isQuadro("1px 1px")).toBeFalsy();
    expect(SizeValue.isQuadro("1px 1px 1px")).toBeFalsy();
    expect(SizeValue.isQuadro("1px 1px 1px 1px      1px")).toBeFalsy();
});

it("Size-Value: isSize diff units", () => {
    // isSingle
    expect(SizeValue.isDouble("1 1px")).toBeTruthy();
    expect(SizeValue.isDouble("1un 1px")).toBeTruthy();
    expect(SizeValue.isSize("1 1% 1")).toBeTruthy();
});

it("Size-Value: units parser: 1unit", () => {
    const c = new SizeValue("1unit");
    expect(c.dimension).toEqual("unit");
    expect(c.units).toMatchObject([
        {
            dimension: "unit",
            value: 1,
        },
    ]);
});

it("Size-Value: units parser: 1 2unit", () => {
    const c = new SizeValue("1 2unit");
    expect(c.dimension).toEqual("unit");
    expect(c.units).toMatchObject([
        {
            dimension: undefined,
            value: 1,
        },
        {
            dimension: "unit",
            value: 2,
        },
    ]);
});

it("Size-Value: units parser: 1unit 2unit 3unit 4unit", () => {
    const c = new SizeValue("1unit 2unit 3unit 4unit");
    expect(c.dimension).toEqual("unit");
    expect(c.units).toMatchObject([
        {
            dimension: "unit",
            value: 1,
        },
        {
            dimension: "unit",
            value: 2,
        },
        {
            dimension: "unit",
            value: 3,
        },
        {
            dimension: "unit",
            value: 4,
        },
    ]);
});

it("Size-Value: toString", () => {
    sizeValueTest("1px");
    sizeValueTest("1px 1px");
    sizeValueTest("1px 1px 1px");
    sizeValueTest("1px 1px 1px 1px");

    sizeValueTest("1 1px", "1px 1px");
    sizeValueTest("1 1% 1", "1% 1% 1%");
});

function sizeValueTest(raw: string, received?: string): void {
    expect(new SizeValue(raw).toString()).toEqual(received || raw);
}
