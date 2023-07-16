import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import {clearSide, clearActivity, clearWeight, clearHistory, clearTable} from "../../redux/filtersSlice";

const ActiveFilters = () => {

  const dispatch = useDispatch()

  const sideFilter = useSelector(state => state.filters.sideFilter)
  const activityFilter = useSelector(state => state.filters.activityFilter)
  const weightFilter = useSelector(state => state.filters.weightFilter)
  const historyFilter = useSelector(state => state.filters.historyFilter)
  const tableFilter = useSelector(state => state.filters.tableFilter)

  return (
    <>
      {sideFilter !== 'all' && weightFilter !== 'all' && activityFilter !== 'all' && activityFilter !== 'all' && historyFilter !== 'all' && tableFilter !== 'all' && <p>Активные фильтры: </p>}
      <div className='mb-3 d-flex'>
        {sideFilter !== 'all' && <div onClick={()=>dispatch(clearSide())} className='pe-auto border px-3 rounded-5 '>{parseInt(sideFilter) === 1? '🤵': parseInt(sideFilter) === 2 ? '👰' : ''}<span>X</span></div>}
        {weightFilter !== 'all' && <div onClick={()=>dispatch(clearWeight())} className='border px-3 rounded-5'>{weightFilter == 1 ? '❤❤❤' : weightFilter == 2 ? '❤❤🤍' : weightFilter == 3 ? '❤🤍🤍' : ''}<span>X</span></div>}
        {activityFilter !== 'all' && <div onClick={()=>dispatch(clearActivity())} className='border px-3 rounded-5'>{activityFilter === true ? '🥳' : activityFilter === false ? '😡' : ''}<span>X</span></div>}
        {historyFilter !== 'all' && <div onClick={()=>dispatch(dispatch(clearHistory()))} className='border px-3 rounded-5'>{historyFilter !== 'all' ? '📝' : ''}<span>X</span></div>}
        {tableFilter !== 'all' && <div onClick={()=>dispatch(clearTable())} className='border px-3 rounded-5'>{tableFilter !== 'all' ? `👩‍👦‍👦 №${tableFilter}`: ''}<span>X</span></div>}
      </div>
    </>
  );
};

export default ActiveFilters;
