import React, {useState} from 'react';
import {Button, Offcanvas} from 'react-bootstrap';

import SideFilter from "./SideFilter";
import ActivityFilter from "./ActivityFilter";
import WeightFilter from "./WeightFilter";
import HistoryFilter from "./HistoryFilter";
import TableFilter from "./TableFilter";

const Filters = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Фильтры
      </Button>

      <Offcanvas className="w-50" show={show} onHide={handleClose} placement="end">
        {/*<Offcanvas.Header closeButton>*/}
        {/*  <Offcanvas.Title>Заголовок блока</Offcanvas.Title>*/}
        {/*</Offcanvas.Header>*/}
        <Offcanvas.Body className="p-2">
          <div>
            <SideFilter/>
            <ActivityFilter/>
            <WeightFilter/>
            <HistoryFilter/>
            <TableFilter/>
          </div>
          <Button
            className="w-100"
            variant="outline-primary"
            onClick={handleClose}
          >
            Закрыть
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


    </div>
  );
};

export default Filters;
