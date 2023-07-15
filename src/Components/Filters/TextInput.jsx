import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {write, clear} from '../../redux/inputFilterSlice'

const TextInput = () => {

  const textValue = useSelector(state => state.textInputReducer.text)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    dispatch(write(e.target.value.toLowerCase()))
  }

  const handleClearButton = ()=> {
    dispatch(clear())
  }

  return (
    <InputGroup className="w-75">
      <Form.Control
        placeholder="поиск"
        aria-label="searchInput"
        aria-describedby="basic-addon2"
        value={textValue}
        onChange={(e) => handleInputChange(e)}
      />
      <Button
        onClick={handleClearButton}
        variant="outline-light"
        id="button-addon2"
      >
        Очистить
      </Button>
    </InputGroup>
  )
}

export default TextInput