import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            data :'Initial data...'
        }

        this.updateState= this.updateState.bind(this);
    };
    
    updateState(e){
        this.setState({data: e.target.value});
    } 
    
    render(){
        return(
            <div>
                <Content updateFunction={this.updateState} updateValue={this.state.data}>
                </Content>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <input type='text' value={this.props.updateValue} onChange={this.props.updateFunction} />
                <h3>{this.props.updateValue}</h3>
            </div>
        )
    }
}

export default App;
