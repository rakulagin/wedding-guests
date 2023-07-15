import React from 'react';
import Form from "react-bootstrap/Form";

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {changeHistory} from '../../redux/filtersSlice'

const HistoryFilter = () => {

  const historyFilter = useSelector(state => state.filters.historyFilter)
  const dispatch = useDispatch()

  const handleHistoryFilter = () => {
    historyFilter === 'all' ? dispatch(changeHistory('yes')) : dispatch(changeHistory('all'))
  }

  return (
    <div className="border rounded p-1 d-flex align-items-center gap-3 mb-2">
      <strong
        onClick={handleHistoryFilter}
      >Только c&nbsp;историей</strong>
      <Form.Switch
        style={{ transform: 'scale(1.5)' }}
        type="switch"
        id="historySwitch"
        checked={historyFilter === 'yes'}
        onChange={handleHistoryFilter}
      />
    </div>
  );
};

export default HistoryFilter;