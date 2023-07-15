import React from 'react';

import Form from "react-bootstrap/Form";

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {changeTable} from "../../redux/filtersSlice"

const TableFilter = () => {

  const tableFilter = useSelector(state => state.filters.tableFilter)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const data = parseInt(e.target.value)
    dispatch(changeTable(data))
  }

  return (
    <div>
      <Form.Select aria-label="Default select example" value={tableFilter}
                   onChange={(e) => handleInputChange(e)}>
        <option value="all">Все столы</option>
        <option value="1">Стол №1 (молодожены)</option>
        <option value="2">Стол №2 (родственники)</option>
        <option value="3">Стол №3 (друзья невесты + Никита)</option>
        <option value="4">Стол №4 (общие друзья)</option>
        <option value="5">Стол №5 (коллеги жениха)</option>
        <option value="6">Стол №6 (друзья жениха)</option>
      </Form.Select>
    </div>
  );
};

export default TableFilter;
