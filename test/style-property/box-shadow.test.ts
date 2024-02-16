import { emphasizeStyleProperty } from "../../src";

it("style: box-shadow: 2", () => {
  expect(emphasizeStyleProperty("boxShadow", "1px 2px #000000", "3px 4px #888888", 0.5)).toEqual("2px 3px #444444");
  expect(emphasizeStyleProperty("boxShadow", "inset 1px 1px #000000", "inset 3px 3px #888888", 0.5)).toEqual("inset 2px 2px #444444");
});
