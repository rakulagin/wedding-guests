import React, {useState, useEffect} from 'react';

import {useDispatch} from "react-redux";

import Button from "react-bootstrap/Button";
import Filters from "../Filters/Filters";
import {clear} from "../../redux/inputFilterSlice";
import {clearAll} from "../../redux/filtersSlice";

const FilterPanel = () => {

  const [isSticky, setIsSticky] = useState(false);

  const dispatch = useDispatch()

  const clearAllFilters = () => {
    dispatch(clear())
    dispatch(clearAll())
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const menuHeight = '108'

      if (scrollTop >= menuHeight) {
        setIsSticky(true)
        console.log('true')
      } else {
        setIsSticky(false)
        console.log('false')
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      // className="d-flex justify-content-between"
      className={isSticky ? 'container fixed-top pt-4 opacity-75 w-100 d-flex justify-content-between' : 'd-flex' +
        ' justify-content-between'}
    >
      <Button variant="primary" onClick={clearAllFilters}>Сбросить фильтры</Button>
      <Filters/>
    </div>
  );
};

export default FilterPanel;