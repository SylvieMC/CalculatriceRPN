import React, {Component} from 'react';
import Enter from "./Enter";
import Drop from "./Drop";
import DropAll from "./DropAll";
import Annuler from "./Annuler";
import Bouton from "./Bouton";
import Swap from "./Swap";
import '../css/style.css';

class Rpn extends Component {

    constructor(){
        super();
        this.state = {
            pile: [0,0,0,0,0,0,0,0,0,0,0,0,0],
            swap1: null,
            swap2: null
        }
    }
    stackPile = () => {
        const pileVal = this.state.pile;
        this.setState({pile: [0,...pileVal]});
    }

    clearAll = () => {
        this.setState({pile: [0,0,0,0]})
    }

    unstackPile = () => {
        let pileVal = [...this.state.pile];
        pileVal.splice(0, 1);
        this.setState({pile: pileVal});
        pileVal[0] = 0;
    }

    swapArray = () => {
        let pileVal = [...this.state.pile];
        [pileVal[0], pileVal[1]] = [pileVal[1], pileVal[0]];
        this.setState({pile: pileVal});
        console.log(pileVal);
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

    addition = () => {
        const pileVal = this.state.pile
        let updateInput = parseFloat(pileVal[1], 10) + parseFloat(pileVal[0], 10)
        updateInput = updateInput.toString()
        this.setState({pile: [updateInput,...pileVal.slice(2)]})

    }

    soustraction = () => {
        const pileVal = this.state.pile
        let updateInput = parseFloat(pileVal[1], 10) - parseFloat(pileVal[0], 10)
        updateInput = updateInput.toString()
        this.setState({pile: [updateInput,...pileVal.slice(2)]})

    }

    multiplication = () => {
        const pileVal = this.state.pile
        let updateInput = parseFloat(pileVal[1], 10) * parseFloat(pileVal[0], 10)
        updateInput = updateInput.toString()
        this.setState({pile: [updateInput,...pileVal.slice(2)]})

    }

    decimale = () => {
        const pileVal = this.state.pile;
        let updateInput = pileVal[0];
        updateInput = updateInput.toString();

        if (!updateInput.includes('.')){
            updateInput = updateInput + '.';
            this.setState({pile: [updateInput,...pileVal.slice(1)]});
        }
    }

    division = () => {
        const pileVal = this.state.pile
        let updateInput = parseFloat(pileVal[1], 10) / parseFloat(pileVal[0], 10)
        updateInput = updateInput.toString()
        this.setState({pile: [updateInput,...pileVal.slice(2)]})

    }

    render() {
        return (
            <div className="App">
                <h1> Calculatrice RPN </h1>
                <div className="input">
                    <div className="display">
                   {this.state.pile[3]}
                    </div>
                    <div className="display">
                    {this.state.pile[2]}
                    </div>
                    <div className="display">
                    {this.state.pile[1]}
                    </div>
                    <div className="display">
                    {this.state.pile[0]}
                    </div>
                </div>
                <div className="calculatrice">
                    
                <Enter click={() => this.stackPile()}/>
                <Swap click={() => this.swapArray()} />
                <Drop click={() => this.unstackPile()} />
                <DropAll click={() => this.clearAll()} />
                <p></p><p></p><p></p><p></p>
                <Bouton valeur='1' click={() => this.ajouterValeur(1)}/>
                <Bouton valeur='2' click={() => this.ajouterValeur(2)}/>
                <Bouton valeur='3' click={() => this.ajouterValeur(3)}/>
                <Bouton valeur='4' click={() => this.ajouterValeur(4)}/>
                <Bouton valeur='5' click={() => this.ajouterValeur(5)}/>
                <Bouton valeur='6' click={() => this.ajouterValeur(6)}/>
                <Bouton valeur='7' click={() => this.ajouterValeur(7)}/>
                <Bouton valeur='8' click={() => this.ajouterValeur(8)}/>
                <Bouton valeur='9' click={() => this.ajouterValeur(9)}/>
                <Bouton valeur='0' click={() => this.ajouterValeur(0)}/>
                <Bouton valeur='.' click={() => this.decimale()}/>
                <Annuler click={() => this.annulerEntree()}/>
                <Bouton valeur='+' click={() => this.addition()} />
                <Bouton valeur='-' click={() => this.soustraction()}/>
                <Bouton valeur='x' click={() => this.multiplication()}/>
                <Bouton valeur='÷' click={() => this.division()}/>
                </div>
                <h4> Sylvie Mohamed Cassim - Sadi Debbal </h4>
            </div>
            
        );
    }
}

export default Rpn;
