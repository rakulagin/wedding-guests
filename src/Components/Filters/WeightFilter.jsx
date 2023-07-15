import React from 'react';
import {Button} from 'react-bootstrap';

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {changeWeight} from "../../redux/filtersSlice";

const WeightFilter = () => {

  const weightFilter = useSelector(state => state.filters.weightFilter)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const data = e.target.value

    if (data === '1') {
      dispatch(changeWeight(1))
    } else if (data === '2') {
      dispatch(changeWeight(2))
    } else if (data === '3') {
      dispatch(changeWeight(3))
    } else {
      dispatch(changeWeight('all'))
    }
  }

  return (
    <div className="border rounded p-1 d-flex flex-column mb-2">
      <strong>Важность: </strong>
      <label>
        <input
          className="d-none"
          type="radio"
          name="weight"
          value={1}
          checked={weightFilter === 1}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value='1'
          variant={weightFilter === 1 ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Родственники
        </Button>
      </label>
      <label>
        <input
          className="d-none"
          type="radio"
          name="weight"
          value={2}
          checked={weightFilter === 2}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value='2'
          variant={weightFilter === 2 ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Близкие друзья
        </Button>
      </label>
      <label>
        <input
          className="d-none"
          type="radio"
          name="weight"
          value={3}
          checked={weightFilter === 3}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value='3'
          variant={weightFilter === 3 ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Друзья
        </Button>
      </label>
      <label>
        <input
          className="d-none"
          type="radio"
          name="weight"
          value="all"
          checked={weightFilter === 'all'}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value='all'
          variant={weightFilter === 'all' ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Все
        </Button>
      </label>
    </div>
  );
};

export default WeightFilter;
