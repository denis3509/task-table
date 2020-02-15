import * as types from '../constants/table'

function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = {type};
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    });
    return action
  }
}

export const addRow = makeActionCreator(types.ADD_ROW, 'row');
export const setTable = makeActionCreator(types.SET_TABLE, 'table');
export const setSearchInput = makeActionCreator(types.SET_SEARCH_INPUT, 'searchInput');
export const setSortField = makeActionCreator(types.SET_SORT_FIELD, 'sortField');

export const fetchTable = (url) => async dispatch => {
  dispatch({
    type: types.FETCH_TABLE_REQUEST
  });
  try {
    const response = await fetch(url);
    const table = await response.json();
    dispatch({
      type : types.FETCH_TABLE_SUCCESS,
      table
    })

  }
  catch (e) {
    dispatch({
      type : types.FETCH_TABLE_FAILURE,
      error : 'ошибка загрузки',
    })
  }
};