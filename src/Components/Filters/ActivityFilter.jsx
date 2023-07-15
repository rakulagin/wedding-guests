import React from 'react';

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {changeActivity} from "../../redux/filtersSlice";

const ActivityFilter = () => {

  const activityFilter = useSelector(state => state.filters.activityFilter)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const data = e.target.value

    if (data === '1') {
      dispatch(changeActivity(true))
    } else if (data === '0') {
      dispatch(changeActivity(false))
    } else {
      dispatch(changeActivity('all'))
    }
  }

  return (
    <div>
      <span>Активность: </span>
      <label>
        <input
          type="radio"
          name="activity"
          value={1}
          checked={activityFilter === true}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Высокая</span>
      </label>
      <label>
        <input
          type="radio"
          name="activity"
          value={0}
          checked={activityFilter === false}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Низкая</span>
      </label>
      <label>
        <input
          type="radio"
          name="activity"
          value="all"
          checked={activityFilter === 'all'}
          onChange={(e) => handleInputChange(e)}
        />
        <span>Все</span>
      </label>
    </div>
  );
};

export default ActivityFilter;
