import React from 'react';

const bouton = (props) => {
    const valeurs = {
        ".": "decimale",
        "0": "nombre",
        "1": "nombre",
        "2": "nombre",
        "3": "nombre",
        "4": "nombre",
        "5": "nombre",
        "6": "nombre",
        "7": "nombre",
        "8": "nombre",
        "9": "nombre",
        "+": "operation",
        "–": "operation",
        "×": "operation",
        "÷": "operation",
      }
      let btnVal = valeurs[props.valeur];

      return (
          <button type="button" className={btnVal} onClick={props.click}>
            {props.valeur}
          </button>
      )
}; 

export default bouton;
