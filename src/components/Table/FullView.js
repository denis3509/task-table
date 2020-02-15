import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const FullView = (props) => {
  const {
    firstName,
    lastName,
    description,
    address,
  } = props;
  const {
    streetAddress,
    city,
    state,
    zip
  } = address;
  return (
    <Jumbotron fluid>
      <Container>
        <p>
          <b>Выбран пользователь:</b> {firstName + ' ' + lastName}
        </p>
        <p>
          <b>Описание:</b>
          <p>{description}</p>
        </p>
        <p><b>Адрес проживания:</b> {streetAddress}</p>
        <p><b>Город:</b> {city}</p>
        <p><b>Штат/провинция:</b> {state}</p>
        <p><b>Индекс:</b> {zip}</p>
      </Container>
    </Jumbotron>
  )
};

export default FullView