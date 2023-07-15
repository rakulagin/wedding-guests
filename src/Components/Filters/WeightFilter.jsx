import React from 'react';

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
    <div>
      <span>Важность: </span>
      <label>
        <input
          type="radio"
          name="weight"
          value={1}
          checked={weightFilter === 1}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Родственники</span>
      </label>
      <label>
        <input
          type="radio"
          name="weight"
          value={2}
          checked={weightFilter === 2}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Близкие друзья</span>
      </label>
      <label>
        <input
          type="radio"
          name="weight"
          value={3}
          checked={weightFilter === 3}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Друзья</span>
      </label>
      <label>
        <input
          type="radio"
          name="weight"
          value="all"
          checked={weightFilter === 'all'}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Все</span>
      </label>
    </div>
  );
};

export default WeightFilter;
