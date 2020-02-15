import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const PaginationItem = ({activePage, number, pages, handleClick}) => {

  if (number > 2 && number < pages - 1) {
    return <Pagination.Item
      onClick={handleClick}
      active={activePage === number}>
      {number}
    </Pagination.Item>
  } else {
    return null;
  }
};

const TablePagination = (props) => {
  const {
    activePage,
    pages,
    setActivePage
  } = props;

  const buttons = [];


  const handleClick = (number) => () => {
    if ((number > 0) && (number <= pages)) {
      setActivePage(number);
    }

  };
  const pushStart = () => {
    buttons.push(<Pagination.Prev onClick={handleClick(activePage - 1)} disabled={activePage === 1}/>);
    buttons.push(<Pagination.Item
        key={'pagination' + 1}
        onClick={handleClick(1)}
        active={activePage === 1}>
        {1}
      </Pagination.Item>
    );
    if (pages > 1) {
      if (activePage <= 5) {
        buttons.push(<Pagination.Item
          key={2}
          onClick={handleClick(2)}
          active={activePage === 2}>
          {2}
        </Pagination.Item>)
      } else {
        buttons.push(<Pagination.Ellipsis key={'leftEllipsis'} onClick={handleClick(activePage - 3)}/>)
      }
    }
  };
  const pushMedium = () => {

    let medium = [];
    if (pages > 9) {
      if (activePage >= 5 && activePage <= pages - 4) {
        medium = [
          activePage - 2,
          activePage - 1,
          activePage,
          activePage + 1,
          activePage + 2
        ];
      } else if (activePage < 5) {
        if (activePage <= 3) medium = [3, 4, 5];
        if (activePage === 4) medium = [3, 4, 5, 6];
      } else {
        if (activePage === pages - 3) medium = [pages - 5, pages - 4, pages - 3, pages - 2];
        if (activePage >= pages - 2) medium = [pages - 4, pages - 3, pages - 2];
      }
    } else {
      for (let i = 3; i < pages - 1; i++) {
        medium.push(i);
      }
    }
    buttons.push(medium.map(number => {
      return (<PaginationItem
          activePage={activePage}
          number={number}
          pages={pages}
          handleClick={handleClick(number)}
        />
      )
    }))
  };
  const pushEnd = () => {
    if (pages > 3) {
      if (activePage >= pages - 4) {
        buttons.push(<Pagination.Item
          key={pages - 1}
          onClick={handleClick(pages - 1)}
          active={activePage === pages - 1}>
          {pages - 1}
        </Pagination.Item>)
      } else {
        buttons.push(<Pagination.Ellipsis key={'rightEllipsis'} onClick={handleClick(activePage + 3)}/>)
      }
    }
    if (pages > 2) buttons.push(<Pagination.Item
        key={'paginationRight'}
        onClick={handleClick(pages)}
        active={activePage === pages}>
        {pages}
      </Pagination.Item>
    );

    buttons.push(
      <Pagination.Next
        onClick={handleClick(activePage + 1)}
        disabled={activePage === pages}
      />
    );
  };

  pushStart();
  pushMedium();
  pushEnd();
  return (
    <div>
      <Pagination>
        {buttons}
      </Pagination>
    </div>
  )
};

export default TablePagination