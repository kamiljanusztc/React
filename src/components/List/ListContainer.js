import { connect } from 'react-redux';
import List from './List';
import { getColumnsForList } from '../../redux/columnsRedux';
import { createActionAddColumn } from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id; {/* props.match zawiera informacje przekazywane przez Route, zawierające m.in. adres strony i parametry w nim zawarte – takie jak :id. */ }
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams, /* Rozpakowaliśmy zawartość listParams do zwracanego obiektu, aby właściwości takie jak title czy description zostały przekazane do komponentu List jako propsy. */
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});


export default connect(mapStateToProps, mapDispatchToProps)(List);