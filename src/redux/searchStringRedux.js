// selectors
//zwraca wartość właściwości searchString, zapisanej bezpośrednio w stanie aplikacji
export const getSearchString = (state) => state.searchString;
export const countAllCards = ({cards}) => cards.length;
// wyszuka karty pasujace do searchString i je policzy
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString'; //nazwa wlasciwosci stanu, na ktorej bedziemy wykonywac akcje
const createActionName = name => `app/${reducerName}/${name}`; // zmiana nazwy na dluzszy identyfikator

// actions types
export const CHANGE = createActionName('CHANGE'); 

// action creators 
// export const createActionChange = payload => ({ payload: { ...payload }, type: CHANGE });
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}

