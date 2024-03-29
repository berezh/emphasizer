import { emphasizeNumber } from "../src";

describe("Emphasizer-number", () => {
  it("simple", () => {
    expect(emphasizeNumber(0, 10, 0)).toEqual(0);
    expect(emphasizeNumber(0, 10, 1)).toEqual(10);
    //
    expect(emphasizeNumber(0, 10, 0.5)).toEqual(5);
    expect(emphasizeNumber(0, 10, 2, 4, 3)).toEqual(5);
  });

  it("min, max, value equals", () => {
    expect(emphasizeNumber(10, 10, 10, 10, 10)).toEqual(10);
  });

  it("same", () => {
    expect(emphasizeNumber(0, 10, 0, 10, 0)).toEqual(0);
    expect(emphasizeNumber(0, 10, 0, 10, 10)).toEqual(10);
    //
    expect(emphasizeNumber(0, 10, 0, 10, 5)).toEqual(5);
  });

  it("adge", () => {
    expect(emphasizeNumber(100, 200, 0, 10, 0)).toEqual(100);
    expect(emphasizeNumber(100, 200, 0, 10, 5)).toEqual(150);
    expect(emphasizeNumber(100, 200, 0, 10, 10)).toEqual(200);
  });

  it("versus", () => {
    expect(emphasizeNumber(10, 0, 0, 10, 1)).toEqual(9);
    expect(emphasizeNumber(0, 10, 10, 0, 1)).toEqual(9);
  });

  it("adge 2", () => {
    expect(emphasizeNumber(255, 0, 5298, 2420069, 2420069)).toEqual(0);
    expect(emphasizeNumber(0, 255, 5298, 2420069, 2420069)).toEqual(255);
  });

  it("font-size", () => {
    expect(emphasizeNumber(1, 3, 1, 4, 3)).toEqual(2.33);
  });
});

// {fontSize: "1em"} {fontSize: "3em"} 1 4 3 {fontSize: "3em"}
