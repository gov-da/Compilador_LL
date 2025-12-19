import { LexerError } from "./lexer-error.js";
import { Token } from "./token.js";
import { tokenType } from "./token-type.js";

class Lexer {
  constructor(input) {
    this.input = input;
    this.pos = 0;
    this.line = 1;
    this.currentChar = input[0] || null;
  }

  advance() {
    if (this.currentChar === '\n') {
      this.line++;
    }

    this.pos++;
    if (this.pos < this.input.length) {
      this.currentChar = this.input[this.pos];
    } else {
      this.currentChar = null;
    }
  }

  skipWhiteSpace() {
    while (this.currentChar !== null && /\s/.test(this.currentChar)) {
      this.advance();
    }
  }

  readNumber() {
    let result = '';
    let startLine = this.line;

    while (this.currentChar !== null && /\d/.test(this.currentChar)) {
      result += this.currentChar;
      this.advance();
    }

    const num = parseInt(result, 10);
    return new Token(tokenType.NUMBER, num, startLine);
  }

  readIdentifier() {
    let result = '';
    let startLine = this.line;

    while (this.currentChar !== null && /[a-zA-Z_]/.test(this.currentChar)) {
      result += this.currentChar;
      this.advance();
    }

    const upperResult = result.toUpperCase();
    if (tokenType[upperResult]) {
      return new Token(tokenType[upperResult], result, startLine);  // Retorna el tipo keyword
    }

    return new Token(tokenType.IDENTIFIER, result, startLine)
  }

  getNextToken() {
    this.skipWhiteSpace();

    if (this.currentChar === null) {
      return new Token(tokenType.EOF, '$', this.line)
    }

    const currentLine = this.line;

    try {
      if (/\d/.test(this.currentChar)) {
        return this.readNumber();
      }
      if (/[a-zA-Z_]/.test(this.currentChar)) {
        return this.readIdentifier();
      }
      switch (this.currentChar) {
        case ',':
          this.advance();
          return new Token(tokenType.COMMA, ',', currentLine);
        case '+':
          this.advance();
          return new Token(tokenType.PLUS, '+', currentLine);
        case '-':
          this.advance();
          return new Token(tokenType.MINUS, '-', currentLine);
        case '*':
          this.advance();
          return new Token(tokenType.MULTIPLY, '*', currentLine);
        case '/':
          this.advance();
          return new Token(tokenType.DIVIDE, '/', currentLine);
        case '=':
          this.advance();
          return new Token(tokenType.EQUAL, '=', currentLine);
        case '(':
          this.advance();
          return new Token(tokenType.L_PAREN, '(', currentLine);
        case ')':
          this.advance();
          return new Token(tokenType.R_PAREN, ')', currentLine);
        case ';':
          this.advance();
          return new Token(tokenType.SEMICOLON, ';', currentLine);
        case '.':
          this.advance();
          return new Token(tokenType.DOT, '.', currentLine);
        default:
          throw new LexerError(`Caracter inesperado: ${this.currentChar}`, currentLine);
      }


    } catch (error) {
      if (error instanceof LexerError) {
        throw error;
      }
      throw new LexerError(`Error en lexer: ${error.message}`, currentLine);
    }
  }

  *tokenIterator() {
    let token;
    do {
      token = this.getNextToken();
      yield token;
    } while (token.type !== tokenType.EOF);
  }
}

export { Lexer }