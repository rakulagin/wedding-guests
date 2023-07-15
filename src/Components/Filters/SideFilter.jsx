import React from 'react';
import {Button} from 'react-bootstrap';

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
    <div className="border rounded p-1 d-flex flex-column mb-2">
      <strong>Сторона: </strong>
      <label>
        <input
          className="d-none"
          type="radio"
          name="side"
          value="1"
          checked={sideFilter === '1'}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value="1"
          variant={sideFilter === '1' ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Жениха
        </Button>
      </label>
      <label>
        <input
          className="d-none"
          type="radio"
          name="side"
          value="2"
          checked={sideFilter === '2'}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value="2"
          variant={sideFilter === '2' ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Невесты
        </Button>
      </label>
      <label>
        <input
          className="d-none"
          type="radio"
          name="side"
          value="all"
          checked={sideFilter === 'all'}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value="all"
          variant={sideFilter === 'all' ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Обе стороны
        </Button>
      </label>
    </div>
  );
};

export default SideFilter;
