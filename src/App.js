import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import  Rpn  from './components/Rpn';
import Result from './components/Result';

class App extends Component {

    constructor(){
        super();
        this.state = {
            result: "",
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };



    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="App">
                <h1> Calculatrice RPN </h1>

                <Result result={this.state.result}/>
                <Rpn onClick={this.onClick}/>
            </div>
        );
    }
}

export default App;
