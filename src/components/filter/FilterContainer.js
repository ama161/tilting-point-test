import { connect } from 'react-redux'
import Filter from './Filter';
import { getSearch } from '../../services/services';

const mapStateToProps = (state, ownProps) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: (gameId, provider, tpdId) => {dispatch(getSearch(gameId, provider, tpdId))},
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)
