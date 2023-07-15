import React from 'react';

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {changeSide} from "../../redux/filtersSlice";

const SideFilter = () => {

  const sideFilter = useSelector(state => state.filters.sideFilter)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    dispatch(changeSide(e.target.value))
  }

  return (
    <div>
      <span>Сторона: </span>
      <label>
        <input
          type="radio"
          name="side"
          value="1"
          checked={sideFilter === '1'}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Жениха</span>
      </label>
      <label>
        <input
          type="radio"
          name="side"
          value="2"
          checked={sideFilter === '2'}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Невесты</span>
      </label>
      <label>
        <input
          type="radio"
          name="side"
          value="all"
          checked={sideFilter === 'all'}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Обе стороны</span>
      </label>
    </div>
  );
};

export default SideFilter;
