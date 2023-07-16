import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {clearSide, clearActivity, clearWeight, clearHistory, clearTable} from "../../redux/filtersSlice";
import TrashIcon from "../UI/TrashIcon";
import ActiveFilterLabel from "../UI/ActiveFilterLabel";

const ActiveFilters = () => {

  const dispatch = useDispatch()

  const [ifFiltered, setIfFiltered] = useState(false);

  const sideFilter = useSelector(state => state.filters.sideFilter)
  const activityFilter = useSelector(state => state.filters.activityFilter)
  const weightFilter = useSelector(state => state.filters.weightFilter)
  const historyFilter = useSelector(state => state.filters.historyFilter)
  const tableFilter = useSelector(state => state.filters.tableFilter)



  return (
    <>
      {(sideFilter !== 'all' || weightFilter !== 'all' || activityFilter !== 'all' || activityFilter !== 'all' || historyFilter !== 'all' || tableFilter !== 'all') && <p>Сейчас активны фильтры: </p>}
      <div className='mb-3 d-flex flex-wrap gap-1'>

        {sideFilter !== 'all' &&
          <ActiveFilterLabel onClick={() => dispatch(clearSide())}>
            {parseInt(sideFilter) === 1 ? '🤵' : parseInt(sideFilter) === 2 ? '👰' : ''}
          </ActiveFilterLabel>
        }

        {weightFilter !== 'all' &&
          <ActiveFilterLabel onClick={() => dispatch(clearWeight())}>
            {weightFilter == 1 ? '❤❤❤' : weightFilter == 2 ? '❤❤🤍' : weightFilter == 3 ? '❤🤍🤍' : ''}
          </ActiveFilterLabel>
        }

        {activityFilter !== 'all' &&
          <ActiveFilterLabel onClick={() => dispatch(clearActivity())}>
            {activityFilter === true ? '💃' : activityFilter === false ? '🙅' : ''}
          </ActiveFilterLabel>
        }

        {historyFilter !== 'all' &&
          <ActiveFilterLabel onClick={() => dispatch(clearHistory())}>
            {historyFilter !== 'all' ? '📝' : ''}
          </ActiveFilterLabel>
        }

        {tableFilter !== 'all' &&
          <ActiveFilterLabel onClick={() => dispatch(clearTable())}>
            {tableFilter !== 'all' ? `🍽️ №${tableFilter}`: ''}
          </ActiveFilterLabel>
        }
      </div>
    </>
  );
};

export default ActiveFilters;
