import { tokenType } from "./token-type.js";

function getClassForType(type) {
  switch (type) {
    case tokenType.NUMBER: return 'number';
    case tokenType.IDENTIFIER: return 'identifier';
    case tokenType.PLUS: return '+';
    case tokenType.MINUS: return '-';
    case tokenType.MULTIPLY: return '*';
    case tokenType.DIVIDE: return '/';
    case tokenType.L_PAREN: return '(';
    case tokenType.R_PAREN: return ')';
    default: return 'eof';
  }
}

export { getClassForType };