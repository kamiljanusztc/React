import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists, // provide the component with an array, contained in app state
});

export default connect(mapStateToProps)(Home);