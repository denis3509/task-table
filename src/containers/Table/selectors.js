import {createSelector} from 'reselect'

const findSubstr = (obj, str) => {

  str = str.toLowerCase();
  for (let [key, value] of Object.entries(obj)) {

    if ((typeof value === 'object') && (value !== null)) {
      return findSubstr(value, str)
    } else if (String(value).toLowerCase().indexOf(str) > -1) {
      return true;
    }
  }
  return false;
};

const getSearchInput = state => state.table.searchInput;
const getTable = state => state.table.table;
const getSortOrder = state => state.table.sortOrder;
const getSortField = state => state.table.sortField;

export const getFilteredTable = createSelector([getSearchInput, getTable], (searchInput, table) => {
  if (searchInput !== '') {

    return table.filter(item => findSubstr(item, searchInput));
  } else {
    return table;
  }
});

export const makeGetFilteredAndSortedTable = () => createSelector(
  [getSortOrder, getSortField, getFilteredTable],
  (sortOrder, sortField, table) => {
    const sortedTable = [...table];
    if (sortField !== '') {
      return sortedTable.sort((a, b) => {
        if (a[sortField] > b[sortField]) {
          return 1 * sortOrder;
        }
        if (a[sortField] < b[sortField]) {
          return -1 * sortOrder;
        }
        return 0;
      })
    } else {
      return sortedTable;
    }
  });