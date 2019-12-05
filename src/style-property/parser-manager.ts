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
const b1 = [border];

// const s: React.CSSProperties = {};

export const ParserManager: {
    [key: string]: BaseParser[];
} = {
    // width
    width: d1,
    minWidth: d1,
    maxWidth: d1,
    // height
    height: d1,
    minHeight: d1,
    maxHeight: d1,
    // border
    border: b1,
    borderColor: c1,
    borderBottom: b1,
    borderBottomColor: c1,
    borderBottomWidth: d1,
    borderLeft: b1,
    borderLeftColor: c1,
    borderLeftWidth: d1,
    borderRight: b1,
    borderRightColor: c1,
    borderRightWidth: d1,
    borderTop: b1,
    borderTopColor: c1,
    borderTopWidth: d1,
    // borderRadius
    borderRadius: d1to4,
    borderBottomLeftRadius: d1,
    borderBottomRightRadius: d1,
    borderTopLeftRadius: d1,
    borderTopRightRadius: d1,
    // padding
    padding: d1to4,
    paddingBottom: d1,
    paddingLeft: d1,
    paddingRight: d1,
    paddingTop: d1,
    // margin
    margin: d1to4,
    marginBottom: d1,
    marginLeft: d1,
    marginRight: d1,
    marginTop: d1,
    // positon
    bottom: d1,
    left: d1,
    right: d1,
    top: d1,
    // color
    color: c1,
    backgroundColor: c1,
    caretColor: c1,
    outlineColor: c1,
    textDecorationColor: c1,
    //
    fontSize: d1,
    boxShadow: [boxShadow2, boxShadow3, boxShadow4],
};
