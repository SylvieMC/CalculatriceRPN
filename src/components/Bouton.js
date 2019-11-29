import React from 'react';
import '../css/style.css';

const bouton = (props) => {
    const valeurs = {
        ".": "bouton decimale",
        "0": "bouton nombre",
        "1": "bouton nombre",
        "2": "bouton nombre",
        "3": "bouton nombre",
        "4": "bouton nombre",
        "5": "bouton nombre",
        "6": "bouton nombre",
        "7": "bouton nombre",
        "8": "bouton nombre",
        "9": "bouton nombre",
        "+": "bouton operation",
        "-": "bouton operation",
        "x": "bouton operation",
        "÷": "bouton operation",
      }
      let btnVal = valeurs[props.valeur];

      return (
          <button type="button" className={btnVal} onClick={props.click}>
            {props.valeur}
          </button>
      )
};

export default bouton;
