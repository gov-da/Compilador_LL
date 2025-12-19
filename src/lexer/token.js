class Token {
  constructor(type, value, line = 1) {
    this.type = type;
    this.value = value;
    this.line = line;
  }

  toString() {
    return `Token(${this.type}, ${this.value}) at line ${this.line}`;
  }
}

export { Token }