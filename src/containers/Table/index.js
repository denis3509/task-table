import React, {PureComponent} from 'react'
import TableComponent from '../../components/Table/index'
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import * as tableActions from '../../actions/table'
import {urls} from "../../constants/network";
import {makeGetFilteredAndSortedTable} from "./selectors";

const TableContainer = WrappedComponent => {
  return class Table extends PureComponent {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.props.tableActions.fetchTable(urls['small']);
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  };
};

const mapStateToProps = (state, props) => {
  const getFilteredAndSorted = makeGetFilteredAndSortedTable();
  return {
    table: getFilteredAndSorted(state, props),
    sortOrder: state.table.sortOrder,
    sortField: state.table.sortField,
    isLoading: state.table.isLoading,
    error: state.table.error,

  }
};
const mapDispatchToProps = (dispatch) => ({
  tableActions: bindActionCreators(tableActions, dispatch)
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  TableContainer
)(TableComponent)