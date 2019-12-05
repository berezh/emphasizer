import {
    Dimention1Parser,
    Dimention2Parser,
    Dimention3Parser,
    Dimention4Parser,
    ColorParser,
    BorderParser,
    BoxShadow2Parser,
    BoxShadow3Parser,
    BoxShadow4Parser,
    BaseParser,
} from './parsers';

const dimention1 = new Dimention1Parser();
const dimention2 = new Dimention2Parser();
const dimention3 = new Dimention3Parser();
const dimention4 = new Dimention4Parser();
const color = new ColorParser();
const border = new BorderParser();
const boxShadow2 = new BoxShadow2Parser();
const boxShadow3 = new BoxShadow3Parser();
const boxShadow4 = new BoxShadow4Parser();

const d1 = [dimention1];
const d1to4 = [dimention1, dimention2, dimention3, dimention4];
const c1 = [color];

export const AllParsers: BaseParser[] = [
    dimention1,
    dimention2,
    dimention3,
    dimention4,
    color,
    border,
    boxShadow2,
    boxShadow3,
    boxShadow4,
];

export const ParserManager: {
    [key: string]: BaseParser[];
} = {
    width: d1,
    borderRadius: d1,
    fontSize: d1,
    margin: d1to4,
    padding: d1to4,
    color: c1,
    backgroundColor: c1,
    border: [border],
    boxShadow: [boxShadow2, boxShadow3, boxShadow4],
};
