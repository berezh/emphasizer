import { Dimention2Parser } from "../../../src/style-property/parsers";
import { DimentionOption } from "../../../src/style-property/interfaces";

it("Dimention1Parser: isMatch", () => {
  expect(new Dimention2Parser().isMatch("1px 2px")).toBeTruthy();
  expect(new Dimention2Parser().isMatch("1px 2px;")).toBeTruthy();
  expect(new Dimention2Parser().isMatch("1px 2px ;")).toBeTruthy();
});

it("Dimention1Parser: isMatch FALSE", () => {
  expect(new Dimention2Parser().isMatch("1px")).toBeFalsy();
  expect(new Dimention2Parser().isMatch("1px 1px 1px")).toBeFalsy();
});

it("Dimention1Parser: parse", () => {
  const dimention1: DimentionOption = {
    value: 1,
    dimension: "px",
  };
  const dimention2: DimentionOption = {
    value: 2,
    dimension: "px",
  };
  expect(new Dimention2Parser().parse("1px 2px")).toMatchObject<DimentionOption[]>([dimention1, dimention2]);
});
