export const PARSING_TABLE = [
  [
    "             ", "CONST             ", "VAR       ", "PROCEDURE                 ", "BEGIN                     ", "END   ", ",             ", "+         ", "-         ", "*           ", "/           ", "=     ", "id          ", "num       ", "(         ", ")     ", ";               ", ".     ", "$     "
  ],
  [
    "PROGRAMA     ", "BLOQUE .          ", "BLOQUE .  ", "BLOQUE .                  ", "BLOQUE .                  ", "ERROR ", "ERROR         ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "BLOQUE .    ", "ERROR     ", "ERROR     ", "ERROR ", "ERROR           ", "ERROR ", "VACIO "
  ],
  [
    "BLOQUE       ", "CONST id = num M  ", "V         ", "V                         ", "V                         ", "ERROR ", "ERROR         ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "V           ", "ERROR     ", "ERROR     ", "ERROR ", "VACIO           ", "ERROR ", "ERROR "
  ],
  [
    "M            ", "ERROR             ", "ERROR     ", "ERROR                     ", "ERROR                     ", "ERROR ", ", id = num M  ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "ERROR       ", "ERROR     ", "ERROR     ", "ERROR ", "; V             ", "ERROR ", "ERROR "
  ],
  [
    "V            ", "ERROR             ", "VAR id B  ", "P                         ", "P                         ", "ERROR ", "ERROR         ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "P           ", "ERROR     ", "ERROR     ", "ERROR ", "VACIO           ", "ERROR ", "ERROR "
  ],
  [
    "B            ", "ERROR             ", "ERROR     ", "ERROR                     ", "ERROR                     ", "ERROR ", ", id B        ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "ERROR       ", "ERROR     ", "ERROR     ", "ERROR ", "; P             ", "ERROR ", "ERROR "
  ],
  [
    "P            ", "ERROR             ", "ERROR     ", "PROCEDURE id ; BLOQUE ; P ", "PROPOSICION               ", "ERROR ", "ERROR         ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "PROPOSICION ", "ERROR     ", "ERROR     ", "ERROR ", "VACIO           ", "VACIO ", "ERROR "
  ],
  [
    "PROPOSICION  ", "ERROR             ", "ERROR     ", "ERROR                     ", "R                         ", "VACIO ", "ERROR         ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "R           ", "ERROR     ", "ERROR     ", "ERROR ", "VACIO           ", "VACIO ", "ERROR "
  ],
  [
    "R            ", "ERROR             ", "ERROR     ", "ERROR                     ", "BEGIN PROPOSICION S END   ", "ERROR ", "ERROR         ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "id = EXP    ", "ERROR     ", "ERROR     ", "ERROR ", "ERROR           ", "ERROR ", "ERROR "
  ],
  [
    "S            ", "ERROR             ", "ERROR     ", "ERROR                     ", "ERROR                     ", "VACIO ", "ERROR         ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "ERROR       ", "ERROR     ", "ERROR     ", "ERROR ", "; PROPOSICION S ", "ERROR ", "ERROR "
  ],
  [
    "EXP          ", "ERROR             ", "ERROR     ", "ERROR                     ", "ERROR                     ", "ERROR ", "ERROR         ", "+ TERM E  ", "- TERM E  ", "ERROR       ", "ERROR       ", "ERROR ", "TERM E      ", "TERM E    ", "TERM E    ", "ERROR ", "ERROR           ", "ERROR ", "ERROR "
  ],
  [
    "E            ", "ERROR             ", "ERROR     ", "ERROR                     ", "ERROR                     ", "VACIO ", "ERROR         ", "+ TERM E  ", "- TERM E  ", "ERROR       ", "ERROR       ", "ERROR ", "ERROR       ", "ERROR     ", "ERROR     ", "VACIO ", "VACIO           ", "VACIO ", "ERROR "
  ],
  [
    "TERM         ", "ERROR             ", "ERROR     ", "ERROR                     ", "ERROR                     ", "ERROR ", "ERROR         ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "FACTOR T    ", "FACTOR T  ", "FACTOR T  ", "ERROR ", "ERROR           ", "ERROR ", "ERROR "
  ],
  [
    "T            ", "ERROR             ", "ERROR     ", "ERROR                     ", "ERROR                     ", "VACIO ", "ERROR         ", "VACIO     ", "VACIO     ", "* FACTOR T  ", "/ FACTOR T  ", "ERROR ", "ERROR       ", "ERROR     ", "ERROR     ", "VACIO ", "VACIO           ", "VACIO ", "ERROR "
  ],
  [
    "FACTOR       ", "ERROR             ", "ERROR     ", "ERROR                     ", "ERROR                     ", "ERROR ", "ERROR         ", "ERROR     ", "ERROR     ", "ERROR       ", "ERROR       ", "ERROR ", "id          ", "num       ", "( EXP )   ", "ERROR ", "ERROR           ", "ERROR ", "ERROR "
  ]
];