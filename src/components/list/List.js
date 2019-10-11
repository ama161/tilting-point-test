import React, { Component } from 'react';
import Line from '../line/Line';
import './List.css';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        }
    }
    
    /**
     * 17.0: Remove componentWillMount, componentWillReceiveProps, and componentWillUpdate . 
     * (Only the new “UNSAFE_” lifecycle names will work from this point forward.)
     * @param {*} nextProps 
     */
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.items){
          this.setState({items: nextProps.items})
        }
    }

    render() {
        return ( 
            this.state.items.length === 0
                ? 'Enter search filters'
                :<table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map((item, index) => {
                                return <Line line={item} key={'line' + index}/>
                            })
                        }
                    </tbody>
                </table>
        );
    }
}
 
export default List;