import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);
export const getSearchedCardsForColumn = ({ cards }, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)); //sprawdza czy tytul karty pasuje do wyszukiwanej frazy

// action name creator
const reducerName = 'cards'; // w stalej zapisana jest nazwa wlasciwosci stanu
const createActionName = name => `app/${reducerName}/${name}`; //Służy ona do zamiany nazwy akcji na dłuższy identyfikator, składający się z trzech członów

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = [], action = {}) { //zwróci nową tablicę, w której znajdzie się rozpakowany dotychczasowy stan, oraz dodany nowy obiekt.
  switch (action.type) { //sprawdzamy typ akcji
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}