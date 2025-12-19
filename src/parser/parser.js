import { PARSING_TABLE } from "./parsing-table.js";
import { ParserError } from './parser-error.js';

export class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.PARSING_TABLE = PARSING_TABLE;
    this.current = 0;
    this.stack = ['$', PARSING_TABLE[1][0].trim()];
    this.stackStatus = "";
    this.errorMessage = "";
    this.errorHandler = new ParserError();
  }

  parse() {
    let hasError = false;

    while (
      !hasError &&
      (this.stack[this.stack.length - 1].trim() !== '$' ||
        (this.tokens.length > 0 && this.tokens[0].value !== "$"))
    ) {
      let row = this.TableRowPosition(this.stack[this.stack.length - 1]);
      let currentToken = this.tokens[0];
      let column = this.TableColumnPosition(
        currentToken.type === 'id' || currentToken.type === 'num'
          ? currentToken.type
          : currentToken.value
      );

      if (row === -1) {
        const top = this.stack[this.stack.length - 1];
        const matches = (top === 'id' || top === 'num')
          ? currentToken.type === top
          : currentToken.value === top;

        if (matches) {
          this.stack.pop();
          this.tokens.shift();
        } else {
          this.errorMessage = this.errorHandler.Error(top, currentToken);
          hasError = true; // rompe el while
        }
      } else {
        switch (this.PARSING_TABLE[row][column].trim()) {
          case "VACIO":
            this.stack.pop();
            break;

          case "ERROR":
            this.errorMessage = this.errorHandler.Error(
              this.stack[this.stack.length - 1],
              this.tokens[0]
            );
            hasError = true; // rompe el while
            break;

          default:
            this.stack.pop();
            this.AddStack(this.PARSING_TABLE[row][column].trim());
            break;
        }
      }

      this.StackStatus();
      console.log(this.stackStatus)
    }
    return this.stackStatus;
  }

  TableRowPosition(element) {
    let row;
    for (row = 0; row < this.PARSING_TABLE.length; row++) {
      if (this.PARSING_TABLE[row][0].trim() === element) {
        break;
      }
    }
    return row === this.PARSING_TABLE.length ? -1 : row;
  }

  TableColumnPosition(element) {
    let column;
    for (column = 0; column < this.PARSING_TABLE[0].length; column++) {
      if (this.PARSING_TABLE[0][column].trim() === element) {
        break;
      }
    }
    return column;
  }

  AddStack(element) {
    let initialPosition = 0;
    let finalPosition;
    let auxStack = [];

    while (true) {
      finalPosition = element.indexOf(" ", initialPosition);
      if (finalPosition !== -1) {
        auxStack.push(element.substring(initialPosition, finalPosition));
        initialPosition = finalPosition + 1;
      } else {
        auxStack.push(element.substring(initialPosition));
        break;
      }
    }

    while (auxStack.length > 0) {
      this.stack.push(auxStack.pop());
    }
  }

  StackStatus() {
    this.stackStatus = this.stackStatus || "";

    for (let element of this.stack) {
      this.stackStatus += element + " ";
    }

    this.stackStatus += "\n";
  }
}