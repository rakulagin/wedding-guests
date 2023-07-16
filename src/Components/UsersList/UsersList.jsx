import React, {useEffect, useState} from 'react';
import axios from "axios";

import {useSelector} from "react-redux";

import ScrollToTop from "../ScrollToTop/ScrollToTop";
import FilterPanel from "../FilterPanel/FilterPanel";
import ActiveFilters from "../ActiveFilters/ActiveFilters";

const UsersList = () => {

  const textValue = useSelector(state => state.textInputReducer.text)
  const sideFilter = useSelector(state => state.filters.sideFilter)
  const activityFilter = useSelector(state => state.filters.activityFilter)
  const weightFilter = useSelector(state => state.filters.weightFilter)
  const historyFilter = useSelector(state => state.filters.historyFilter)
  const tableFilter = useSelector(state => state.filters.tableFilter)

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

  console.log(typeof weightFilter)
  console.log(weightFilter)

  return (
    <div className="container">
      <div className='d-flex justify-content-between border rounded p-1 mb-3'>
        <p><strong>Показано гостей:</strong> {filteredUsers.length}</p>
        <p><strong>Всего гостей:</strong> {users.length}</p>
      </div>

      <ActiveFilters/>

      <FilterPanel/>

      <div className="row mb-3">
        {
          filteredUsers.map((user, index) =>
            <div key={index} className="col-md-12 g-3 p-0 col-lg-6">
              <div className="border rounded h-100 m-2 bg-body-secondary">
                <div className='d-flex justify-content-between'>
                  <div className='p-2 d-flex flex-column'>
                    <h5>{user.firstName} {user.surName}</h5>
                    <p><strong>Стол: </strong>№{user.company}</p>
                    <p><strong>Кто:</strong> {user.who}</p>
                    <p><strong>Сторона: </strong>{user.side === 1 ? '🤵' : '👰'}</p>
                    <p><strong>Активность: </strong>{user.activity === true ? '💃' : '🙅'}</p>
                    <p>
                      <strong>Важность: </strong>{user.weight === 1 ? '❤❤❤' : user.weight === 2 ? '❤❤🤍' : user.weight === 3 ? '❤🤍🤍' : null}
                    </p>
                  </div>

                  <img
                    style={{ borderTopRightRadius: '5px'}}
                    className="w-50 object-fit-cover "
                    src={`http://backend.rakulagin.com${user.imgForWeddingHost}`} alt=""
                  />
                </div>
                <div className='p-2'>
                  <p><strong>История: </strong>{user.ourHistory ? user.ourHistory : 'Нет'}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default UsersList;