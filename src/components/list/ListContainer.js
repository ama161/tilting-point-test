import { connect } from 'react-redux'
import List from './List';

const mapStateToProps = (state, ownProps) => {
    return {
        items: state['data'],
    }
};

export default connect(
    mapStateToProps
)(List)
