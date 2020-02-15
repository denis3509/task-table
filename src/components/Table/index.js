import React, {Fragment, useState} from 'react'
import Table from 'react-bootstrap/Table'
import SearchInput from './SearchInput'
import Container from 'react-bootstrap/Container'
import DropdownTables from './DropdownTables'
import ErrorOrLoading from "../../UI/ErrorOrLoading"
import FullView from "./FullView"
import Pagination from './Pagination'

const getSortOrderSign = (currentField, sortField, sortOrder) => {
  if (currentField === sortField) {
    return sortOrder === 1 ? '↑' : '↓'
  }
  return null;
};

const TableComponent = (props) => {
  const {
    table,
    sortField,
    sortOrder,
    tableActions,
    error,
    isLoading
  } = props;

  const [currentId, setCurrentId] = useState(undefined);
  const [activePage, setActivePage] = useState(1);
  const pages = Math.floor(table.length / 50) + 1;


  const handleClickField = (sortField) => () => {
    tableActions.setSortField(sortField);
    setActivePage(1);
  };
  const handleClickSearch = (searchInput) => {

    tableActions.setSearchInput(searchInput.trim());
    setActivePage(1);
  };

  const handleClickRow = (id) => () => {
    if (id === currentId) {
      setCurrentId(undefined);
    }
    else {
      setCurrentId(id);
    }
  };

  return (
    <Container>
      <DropdownTables
        tableActions={tableActions}
      />
      <SearchInput
        handleClickSearch={handleClickSearch}
      />
      <Table striped bordered hover size="sm">
        <thead>
        <tr>
          <th
            onClick={handleClickField('id')}>
            id {getSortOrderSign('id', sortField, sortOrder)}
          </th>
          <th
            onClick={handleClickField('firstName')}>
            First Name {getSortOrderSign('firstName', sortField, sortOrder)}
          </th>
          <th
            onClick={handleClickField('lastName')}>
            Last Name {getSortOrderSign('lastName', sortField, sortOrder)}
          </th>
          <th
            onClick={handleClickField('email')}>
            email {getSortOrderSign('email', sortField, sortOrder)}
          </th>
          <th
            onClick={handleClickField('phone')}>
            phone {getSortOrderSign('phone', sortField, sortOrder)}
          </th>
        </tr>
        </thead>
        {error || isLoading
          ? <td className={'empty-list'} colSpan="5">
            <ErrorOrLoading className="error-or-loading" error={error}/>
          </td>
          : <tbody>{!table.length
            ? <td className={'empty-list'} colSpan="5"><h6>Список пуст</h6></td>
            : table.slice((activePage-1)*50,activePage*50).map((item, index) => {
                return (<Fragment>
                    <tr key={item.id}
                        onClick={handleClickRow(item.id)}
                    >
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                    </tr>
                    {item.id === currentId
                      ? <tr key={item.id + 'a'}>
                        <td colSpan="5">
                          <FullView
                            {...item}
                          />

                        </td>
                      </tr>
                      : null

                    }

                  </Fragment>
                )
              }
            )

          }
          </tbody>
        }
      </Table>
      <Pagination
        className={'pagination'}
        activePage={activePage}
        pages={pages}
        setActivePage={setActivePage}
      />
    </Container>
  )

};


export default TableComponent