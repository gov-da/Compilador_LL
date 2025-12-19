const tokenType = Object.freeze({
  CONST: 'CONST',
  VAR: 'VAR',
  PROCEDURE: 'PROCEDURE',
  BEGIN: 'BEGIN',
  END: 'END',
  COMMA: 'COMMA',
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  EQUAL: 'EQUAL',
  IDENTIFIER: 'id',
  NUMBER: 'num',
  L_PAREN: 'L_PAREN',
  R_PAREN: 'R_PAREN',
  SEMICOLON: 'SEMICOLON',
  DOT: 'DOT',
  EOF: 'EOF'
})

export { tokenType }