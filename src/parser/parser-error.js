import { Token } from "../lexer/token.js";

export class ParserError {
  constructor() {
    this.counterLine = 0;
    this.flag = true;
  }

  Error(stackElement, tokenElement) {
    return (
      this.LineError(tokenElement.line) +
      "Se recibió: '" +
      (tokenElement.value === "$" ? "Fin de cadena" : tokenElement.type) +
      "'. Y se esperaba: '" +
      this.ExpectedTokens(stackElement) +
      "'."
    );
  }

  LineError(numberLine) {
    let msj = "";

    if (this.counterLine !== numberLine) {
      this.counterLine = numberLine;
      if (this.flag) {
        msj = "Error en la linea " + this.counterLine + "\n";
        this.flag = false;
      } else {
        msj = "\nError en la linea " + this.counterLine + "\n";
      }
    }

    return msj;
  }

  ExpectedTokens(stackElement) {
    let msj;

    switch (stackElement) {
      case "BLOQUE":
        msj = "CONST | VAR | PROCEDURE | id | BEGIN | $";
        break;
      case "M":
        msj = ", | ;";
        break;
      case "V":
        msj = "VAR | PROCEDURE | id | BEGIN | . | ;";
        break;
      case "B":
        msj = ", | ;";
        break;
      case "P":
        msj = "PROCEDURE | id | BEGIN | . | ;";
        break;
      case "PROPOSICION":
        msj = "PROCEDURE | id | BEGIN | . | ; | END";
        break;
      case "R":
        msj = "id | BEGIN";
        break;
      case "S":
        msj = "; | END";
        break;
      case "EXP":
        msj = "+ | - | id | num | (";
        break;
      case "E":
        msj = "+ | - | . | ; | END | )";
        break;
      case "TERM":
        msj = "id | num | (";
        break;
      case "T":
        msj = "* | / | + | - | . | ; | END | )";
        break;
      case "FACTOR":
        msj = "id | num | )";
        break;
      default:
        msj = stackElement;
    }

    return msj;
  }
}
