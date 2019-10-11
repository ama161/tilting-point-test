import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    render() {
        let gameId = '';
        let provider = '';
        let tpdId = '';
        return (
            <div className="filter">
                <input 
                    type="text" 
                    placeholder="Game ID" 
                    onBlur={(e) => gameId = e.target.value}/>
                <input 
                    type="text" 
                    placeholder="Provider" 
                    onBlur={(e) => provider = e.target.value}/>
                <input 
                    type="text" 
                    placeholder="TPD ID" 
                    onBlur={(e) => tpdId = e.target.value}/>
                <button 
                    onClick={() => this.props.search(gameId, provider, tpdId)}>SEARCH
                </button>
            </div>
        );
    }
}
 

export default Filter;