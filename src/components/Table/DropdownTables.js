import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import {urls} from '../../constants/network'


const DropdownTables = (props) => {
  const {tableActions} = props;

  let [value, setValue] = useState('small');

  const handleChange = (event) => {
    const {value} = event.target;
    setValue(value);
    tableActions.fetchTable(urls[value]);
  };

  return (
    <Form>

      <Form.Group
        onChange={handleChange}
        value={value}
        controlId="formGridState">
        <Form.Label>Размер таблицы</Form.Label>
        <Form.Control as="select">
          <option value='small'>small</option>
          <option value='big'>big</option>
        </Form.Control>
      </Form.Group>
    </Form>
  )
};

export default DropdownTables