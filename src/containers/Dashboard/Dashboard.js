import { connect } from 'react-redux';
import actions from '../../actions';
import Dashboard from '../../views/Dashboard/Dashboard';

const {
    dashboard: { fetchGlobalDashboard },
    handlers: { setMessage },
} = actions;

export default connect(
    ({ dashboard, user }) => ({
        newSiteImages: dashboard.images.newSite,
        oldSiteImages: dashboard.images.oldSite,
        newSiteDescription: dashboard.description.newSite,
        oldSiteDescription: dashboard.description.oldSite,
        token:user.token,
    }),
    dispatch => ({
        fetchDashboard: (token) => {
            dispatch(fetchGlobalDashboard(token));
        },
        updateMessage: (txt) => dispatch(setMessage(txt)),
    })
)(Dashboard);