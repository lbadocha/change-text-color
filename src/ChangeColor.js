import React, {Component} from 'react';


class ChangeColor extends Component {


    constructor() {
        super();

        this.state = {
            colorClass: 'blue',
            headingText: 'Treść nagłówka'
        }
    }

    changeColor = (event) => {
        this.setState({colorClass: event.target.value});
    }

    changeText = (event) => {
        this.setState({headingText: event.target.value})
    }


    render() {
        return (
            <div>
                <h2 className={this.state.colorClass}>{this.state.headingText}</h2>
                <button onClick={this.changeColor} value="red">Czerwony</button>
                <button onClick={this.changeColor} value="green"> Zielony</button>
                <button onClick={this.changeColor} value="blue">Niebieski</button>
                <input type="text" value={this.state.headingText} placeholder="Wpisz tekst nagłówka" onChange={this.changeText} />
            </div>
        )
    }

}

export default ChangeColor;