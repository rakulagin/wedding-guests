import React from 'react';
import {Button} from 'react-bootstrap';

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
    <div className="border rounded p-1 d-flex flex-column mb-2">
      <strong>Активность: </strong>
      <label>
        <input
          className="d-none"
          type="radio"
          name="activity"
          value={1}
          checked={activityFilter === true}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value='1'
          variant={activityFilter === true ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Высокая
        </Button>
      </label>
      <label>
        <input
          className="d-none"
          type="radio"
          name="activity"
          value={0}
          checked={activityFilter === false}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value='0'
          variant={activityFilter === false ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Низкая
        </Button>
      </label>
      <label>
        <input
          className="d-none"
          type="radio"
          name="activity"
          value="all"
          checked={activityFilter === 'all'}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          className='w-100 mb-1'
          value='all'
          variant={activityFilter === 'all' ? 'primary' : 'outline-primary'}
          onClick={(e) => handleInputChange(e)}
        >
          Все
        </Button>
      </label>
    </div>
  );
};

export default ActivityFilter;
