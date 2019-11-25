import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Bouton from './components/Bouton';
import Entree from './components/Entree';
import Annuler from './components/Annuler';

class App extends Component {

    constructor(){
        super();
        this.state = {
            pile: [0,0,0,0,0,0,0,0,0],
        }
    }
    stackPile = () => {
        const pileVal = this.state.pile;
        this.setState({pile: [0,...pileVal]});
    }

    annulerEntree = () => {
        const pileVal = this.state.pile;
        let updateInput = pileVal[0];
        updateInput = updateInput ? updateInput.toString().slice(0,-1) : updateInput;
        updateInput = updateInput ? updateInput : 0;
        this.setState({pile: [updateInput,...pileVal.slice(1)]});
      }

    ajouterValeur = (value) => {
        const pileVal = this.state.pile;
        let updateInput = pileVal[0];
        updateInput = updateInput ? updateInput.toString() + value.toString() : value.toString();
        this.setState({pile: [updateInput,...pileVal.slice(1)]});
      }

    render() {
        return (
            <div className="App">
                <h1> Calculatrice RPN </h1>

                <p>{this.state.pile[3]}<br/>
                {this.state.pile[2]}<br/>
                {this.state.pile[1]}</p>
                <h3>{this.state.pile[0]}</h3>
                <hr/>
                <Entree click={() => this.stackPile()}/>
                <Annuler click={() => this.annulerEntree()}/>
                <br/>
                <Bouton valeur='1' click={() => this.ajouterValeur(1)}/>
                <Bouton valeur='2' click={() => this.ajouterValeur(2)}/>
                <Bouton valeur='3' click={() => this.ajouterValeur(3)}/>
                <br/>
                <Bouton valeur='4' click={() => this.ajouterValeur(4)}/>
                <Bouton valeur='5' click={() => this.ajouterValeur(5)}/>
                <Bouton valeur='6' click={() => this.ajouterValeur(6)}/>
                <br/>
                <Bouton valeur='7' click={() => this.ajouterValeur(7)}/>
                <Bouton valeur='8' click={() => this.ajouterValeur(8)}/>
                <Bouton valeur='9' click={() => this.ajouterValeur(9)}/>
                <br/>
                <Bouton valeur='.'/>
                <Bouton valeur='0' click={() => this.ajouterValeur(0)}/>
                <br/>
                <br/>
                <Bouton valeur='SIN'/>
                <Bouton valeur='COS'/>
                <Bouton valeur='TAN'/>
                <br/>
                <Bouton valeur='+/-'/>
                <Bouton valeur='x²'/>
                <Bouton valeur='√'/>
                <br/>
                <Bouton valeur='+'/>
                <Bouton valeur='-'/>
                <Bouton valeur='x'/>
                <Bouton valeur='÷'/>
            </div>
        );
    }
}

export default App;
