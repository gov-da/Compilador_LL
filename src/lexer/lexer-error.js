class LexerError extends Error {
  constructor(message, line) {
    super(message);
    this.name = 'Lexer Error';
    this.line = line;
  }

  toString() {
    return `${this.name}: ${this.message} en la línea ${this.line}`
  }
}

export { LexerError }