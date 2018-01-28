import test from 'tape';

import {
  ROOT,
  PARAGRAPH,
  BLOCKQUOTE,
  HEADING,
  CODE,
  INLINE_CODE,
  YAML,
  HTML,
  LIST,
  LIST_ITEM,
  TABLE,
  TABLE_ROW,
  TABLE_CELL,
  THEMATIC_BREAK,
  BREAK,
  EMPHASIS,
  STRONG,
  DELETE,
  LINK,
  IMAGE,
  FOOTNOTE,
  LINK_REFERENCE,
  IMAGE_REFERENCE,
  FOOTNOTE_REFERENCE,
  DEFINITION,
  FOOTNOTE_DEFINITION,
  TEXT_NODE
} from './index';

test('mdastscript', t => {
  t.equal(ROOT, 'root', 'should export ROOT type constant');
  t.equal(PARAGRAPH, 'paragraph', 'should export PARAGRAPH type constant');
  t.equal(BLOCKQUOTE, 'blockquote', 'should export BLOCKQUOTE type constant');
  t.equal(HEADING, 'heading', 'should export HEADING type constant');
  t.equal(CODE, 'code', 'should export CODE type constant');
  t.equal(INLINE_CODE, 'inlineCode', 'should export INLINE_CODE type constant');
  t.equal(YAML, 'yaml', 'should export YAML type constant');
  t.equal(HTML, 'html', 'should export HTML type constant');
  t.equal(LIST, 'list', 'should export LIST type constant');
  t.equal(LIST_ITEM, 'listItem', 'should export LIST_ITEM type constant');
  t.equal(TABLE, 'table', 'should export TABLE type constant');
  t.equal(TABLE_ROW, 'tableRow', 'should export TABLE_ROW type constant');
  t.equal(TABLE_CELL, 'tableCell', 'should export TABLE_CELL type constant');
  t.equal(THEMATIC_BREAK, 'thematicBreak', 'should export THEMATIC_BREAK type constant');
  t.equal(BREAK, 'break', 'should export BREAK type constant');
  t.equal(EMPHASIS, 'emphasis', 'should export EMPHASIS type constant');
  t.equal(STRONG, 'strong', 'should export STRONG type constant');
  t.equal(DELETE, 'delete', 'should export DELETE type constant');
  t.equal(LINK, 'link', 'should export LINK type constant');
  t.equal(IMAGE, 'image', 'should export IMAGE type constant');
  t.equal(FOOTNOTE, 'footnote', 'should export FOOTNOTE type constant');
  t.equal(LINK_REFERENCE, 'linkReference', 'should export LINK_REFERENCE type constant');
  t.equal(IMAGE_REFERENCE, 'imageReference', 'should export IMAGE_REFERENCE type constant');
  t.equal(FOOTNOTE_REFERENCE, 'footnoteReference', 'should export FOOTNOTE_REFERENCE type constant');
  t.equal(DEFINITION, 'definition', 'should export DEFINITION type constant');
  t.equal(FOOTNOTE_DEFINITION, 'footnoteDefinition', 'should export FOOTNOTE_DEFINITION type constant');
  t.equal(TEXT_NODE, 'textNode', 'should export TEXT_NODE type constant');

  t.end();
});
