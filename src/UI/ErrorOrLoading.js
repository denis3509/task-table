import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const ErrorOrLoading = (props)=> {
   const {error} = props;
  if (error) return (
    <h6 className="empty-list">Error : {error}</h6>
  );
  return(
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
  )
};

export default ErrorOrLoading