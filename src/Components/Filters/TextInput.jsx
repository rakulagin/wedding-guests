import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TextInput = () => {

    return (
          <InputGroup className="w-50">
              <Form.Control
                placeholder="поиск"
                aria-label="searchInput"
                aria-describedby="basic-addon2"
                value={searchText}
                onChange={(e) => handleInputChange(e)}
              />
              <Button
                onClick={() => setSearchText('')}
                variant="outline-light"
                id="button-addon2"
              >
                  Очистить
              </Button>
          </InputGroup>
    )

}

export default TextInput