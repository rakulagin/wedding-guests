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
    <div>
      <span>Только и историей</span>
      <Form.Switch
        type="switch"
        id="historySwitch"
        checked={historyFilter === 'yes'}
        onChange={handleHistoryFilter}
      />
    </div>
  );
};

export default HistoryFilter;