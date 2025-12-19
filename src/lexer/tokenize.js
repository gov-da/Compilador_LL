import { Lexer } from "./lexer.js";

function tokenize(input) {
  const lexer = new Lexer(input);
  return Array.from(lexer.tokenIterator());
}

export { tokenize }