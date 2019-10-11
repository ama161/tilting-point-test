import React, { Component } from 'react';
import './Line.css';

class Line extends Component {
    render() {
        const line = this.props.line;
        return ( 
            <tr className={!line.verified ? "noVerified" : ""}>
                <td>{line.record.event_name || line.record.state_name}</td>
                <td>{JSON.stringify(line.record, null, '\t')}
                <br/>
                    {line.invalidFields ? 
                        line.invalidFields.map((field, index) => {
                            return `\nreason ${index+1}: ${field.reason}`
                    })
                    : '' }
                </td>
            </tr>
        );
    }
}
 
export default Line;