import React, {useState} from 'react';
import {Button, Offcanvas} from 'react-bootstrap';

import {useDispatch} from "react-redux";

import SideFilter from "./SideFilter";
import ActivityFilter from "./ActivityFilter";
import WeightFilter from "./WeightFilter";
import HistoryFilter from "./HistoryFilter";
import TableFilter from "./TableFilter";
import {clear} from "../../redux/inputFilterSlice";
import {clearAll} from "../../redux/filtersSlice";

const Filters = () => {

  const dispatch = useDispatch()

  const clearAllFilters = () => {
    dispatch(clear())
    dispatch(clearAll())
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Фильтры
      </Button>
      <Offcanvas className="w-50" show={show} onHide={handleClose} placement="end">
        <Offcanvas.Body className="p-2">
          <div>
            <SideFilter/>
            <WeightFilter/>
            <ActivityFilter/>
            <HistoryFilter/>
            <TableFilter/>
          </div>
          <Button
            className="w-100"
            variant="outline-danger"
            onClick={clearAllFilters}
          >
            Сбросить
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Filters;
