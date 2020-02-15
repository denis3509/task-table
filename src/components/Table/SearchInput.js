import React, {useState} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const SearchInput = (props) => {
  const {handleClickSearch} = props;
  const [value,setValue] = useState('');


  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Введите слово для поиска"
        value={value}
        onChange={(event)=>setValue(event.target.value)}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={()=>handleClickSearch(value)}
        >Найти</Button>
      </InputGroup.Append>
    </InputGroup>
  )
};

export default SearchInput;
