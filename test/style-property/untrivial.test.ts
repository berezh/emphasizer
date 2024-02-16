import { emphasizeStyleProperty } from "../../src";

it("styleProperty untrivial: to undefinit", () => {
  expect(emphasizeStyleProperty("width", "8px", undefined, 0.5)).toEqual("8px");
});

it("styleProperty untrivial: from undefinit", () => {
  expect(emphasizeStyleProperty("width", undefined, "8px", 0.5)).toEqual("8px");
});
