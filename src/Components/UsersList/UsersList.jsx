import React, {useEffect, useState} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';

import {useDispatch, useSelector} from "react-redux";
import {clear} from "../../redux/inputFilterSlice";
import {clearAll} from "../../redux/filtersSlice";

import SideFilter from "../Filters/SideFilter";
import ActivityFilter from "../Filters/ActivityFilter";
import WeightFilter from "../Filters/WeightFilter";
import HistoryFilter from "../Filters/HistoryFilter";
import TableFilter from "../Filters/TableFilter";

const UsersList = () => {

  const textValue = useSelector(state => state.textInputReducer.text)
  const sideFilter = useSelector(state => state.filters.sideFilter)
  const activityFilter = useSelector(state => state.filters.activityFilter)
  const weightFilter = useSelector(state => state.filters.weightFilter)
  const historyFilter = useSelector(state => state.filters.historyFilter)
  const tableFilter = useSelector(state => state.filters.tableFilter)
  const dispatch = useDispatch()

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([])

  const filterGuests = (searchValue, users) => {
    const usersWithSide = sideFilter === 'all' ? users : users.filter(user => user.side === Number(sideFilter))
    const usersWithActivity = activityFilter === 'all' ? usersWithSide : usersWithSide.filter(user => user.activity === Boolean(activityFilter))
    const usersWithWeight = weightFilter === 'all' ? usersWithActivity : usersWithActivity.filter(user => user.weight === Number(weightFilter))
    const usersWithHistory = historyFilter === 'all' ? usersWithWeight : usersWithWeight.filter(user => user.hasOwnProperty('ourHistory'))
    const usersWithTables = tableFilter === 'all' ? usersWithHistory : usersWithHistory.filter(user => user.company === Number(tableFilter))

    return usersWithTables.filter((user) =>
      user.firstName.toLowerCase().includes(searchValue) || user.surName.toLowerCase().includes(searchValue)
    )
  }

  const clearAllFilters = () => {
    dispatch(clear())
    dispatch(clearAll())
  }

  useEffect(() => {
    try {
      axios.get('http://backend.rakulagin.com/users')
        .then(res => {
          setUsers(res.data)
        })
    } catch (e) {
      console.log(e)
    }
  }, []);

  useEffect(() => {
    const filter = filterGuests(textValue, users)
    setFilteredUsers(filter)
  }, [users, textValue, sideFilter, activityFilter, weightFilter, historyFilter, tableFilter])

  return (
    <div className="container">
      <p>Всего гостей: {users.length}</p>
      <p>Показано гостей: {filteredUsers.length}</p>

      <SideFilter/>
      <ActivityFilter/>
      <WeightFilter/>
      <HistoryFilter/>
      <TableFilter/>

      <Button variant="primary" onClick={clearAllFilters}>Сбросить фильтры</Button>

      <div className="row mb-3">
        {
          filteredUsers.map((user, index) =>
            <div key={index} className="col-md-12 g-3 p-0 col-lg-6 ">
              <div className="border h-100 m-2">
                <img className="w-100" src={`http://backend.rakulagin.com${user.img}`} alt=""/>
                <div className='p-4 userInfo'>
                  <h5>{user.firstName} {user.surName}</h5>
                  <p><span>Кто:</span> {user.who}</p>
                  <p><span>Сторона: </span>{user.side === 1 ? 'Жениха' : 'Невесты'}</p>
                  <p><span>Стол: </span>{user.company}</p>
                  <p><span>Активность: </span>{user.activity === true ? 'Высокая' : 'Низкая'}</p>
                  <p>
                    <span>Важность: </span>{user.weight === 1 ? 'Родственники' : user.weight === 2 ? 'Близкие друзья' : user.weight === 3 ? 'Друзья' : null}
                  </p>
                  <p><span>История: </span>{user.ourHistory ? user.ourHistory : 'Нет'}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default UsersList;