import shortid from 'shortid';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns'; // w stalej zapisana jest nazwa wlasciwosci stanu
const createActionName = name => `app/${reducerName}/${name}`; //Służy ona do zamiany nazwy akcji na dłuższy identyfikator, składający się z trzech członów

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer
export default function reducer(statePart = [], action = {}) { //zwróci nową tablicę, w której znajdzie się rozpakowany dotychczasowy stan, oraz dodany nowy obiekt.
  switch (action.type) { //sprawdzamy typ akcji
    case ADD_COLUMN:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}