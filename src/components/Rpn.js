import React, {Component} from 'react';

class Rpn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pile: [],
        }
    }

    render() {
        return(
            <div>
                <div className="button">
                    <button name="UP" onClick={e => this.props.onClick(e.target.name)}>UP</button>
                    <button name="DOWN" onClick={e => this.props.onClick(e.target.name)}>DOWN</button><br/>
                    
                    <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                    <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                    <button name="x" onClick={e => this.props.onClick(e.target.name)}>x</button>
                    <button name="÷" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
                    
                    <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                    <button name="AC" onClick={e => this.props.onClick(e.target.name)}>AC</button><br/>
                    
                    <button name="x²" onClick={e => this.props.onClick(e.target.name)}>x²</button>
                    <button name="√" onClick={e => this.props.onClick(e.target.name)}>√</button>
                    <button name="SIN" onClick={e => this.props.onClick(e.target.name)}>SIN</button>
                    <button name="COS" onClick={e => this.props.onClick(e.target.name)}>COS</button>
                    <button name="TAN" onClick={e => this.props.onClick(e.target.name)}>TAN</button>
                    <button name="+/-" onClick={e => this.props.onClick(e.target.name)}>+/-</button><br/>

                    <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button><br/>
                    
                    <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button><br/>
                    
                    <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button><br/>
                    
                    <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                </div>
            </div>
        )
    }
}

export default Rpn;
