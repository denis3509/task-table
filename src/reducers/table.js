import {createReducer} from '../utils'
import * as types from '../constants/table'
const initialState = {
  table : [],
  searchInput : '',
  sortField : '',
  sortOrder: 1,
  isLoading : false,
  error: null,
  page : 1,
  pages: 1,
};

const tableReducer = createReducer( initialState, {
  [types.SET_TABLE] : (state,action) => {
    const {table} = action;
    Object.assign({},state,{table, sourceTable: table});
  },
  [types.SET_SEARCH_INPUT] : (state,action) => {
    const {searchInput} = action;

    return Object.assign({}, state, {searchInput});
  },
  [types.SET_SORT_FIELD] : (state,action) => {
    const {sortField : newSortField }= action;
    const {sortOrder, sortField : oldSortField} = state;
    let newSortOrder = sortOrder;
    if (newSortField === oldSortField) {
      newSortOrder = newSortOrder * -1;
    }
    return Object.assign({},state, {sortOrder: newSortOrder, sortField : newSortField})
  },
  [types.ADD_ROW] : (state,action) => {
    const {table} = state;
    const {row} = action;
    const newTable = [row,...table];
    Object.assign({},state,{table: newTable});
  },
  [types.FETCH_TABLE_REQUEST] : (state,action)=>{
    return Object.assign({},state,{isLoading: true, error: null, page :1, pages : 1,})
  },
  [types.FETCH_TABLE_SUCCESS] : (state,action) => {
    const {table} = action;
    return Object.assign({},state,{table, isLoading : false})
  },
  [types.FETCH_TABLE_FAILURE] : (state,action)=> {
    const {error} = action;
    return Object.assign({},state,{isLoading : false, error })
  }


});

export default tableReducer