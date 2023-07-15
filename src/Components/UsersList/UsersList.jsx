import React, {useEffect, useState} from 'react';
import axios from "axios";


const UsersList = () => {

  const [users, setUsers] = useState([]);

  const [filteredUsers, setFilteredUsers] = useState([])

  const [searchText, setSearchText] = useState('')

  const [sideFilter, setSideFilter] = useState('all');
  const [activityFilter, setActivityFilter] = useState('all');
  const [weightFilter, setWeightFilter] = useState('all');
  const [historyFilter, setHistoryFilter] = useState('all');


  const handleInputChange = (e) => {
    setSearchText(e.target.value.toLowerCase())
  }

  const filterGuests = (searchValue, users) => {

    const usersWithSide = sideFilter === 'all' ? users : users.filter(user => user.side === Number(sideFilter))
    const usersWithActivity = activityFilter === 'all' ? usersWithSide : usersWithSide.filter(user => user.activity === Boolean(activityFilter))
    const usersWithWeight = weightFilter === 'all' ? usersWithActivity : usersWithActivity.filter(user => user.weight === Number(weightFilter))
    const usersWithHistory = historyFilter === 'all' ? usersWithWeight : usersWithWeight.filter(user => user.hasOwnProperty('ourHistory'))

    return usersWithHistory.filter((user) =>
      user.firstName.toLowerCase().includes(searchValue) || user.surName.toLowerCase().includes(searchValue)
    )
  }

  const clearAllFilters = () => {
    setSearchText('')
    setSideFilter('all')
    setActivityFilter('all')
    setWeightFilter('all')
    setHistoryFilter('all')
  }


  useEffect(() => {
    try {
      axios.get('http://backend.rakulagin.com/users')
        .then(res => {
          setUsers(res.data)
          setFilteredUsers(res.data)
        })
    } catch (e) {
      console.log(e)
    }
  }, []);

  useEffect(() => {
    const filter = filterGuests(searchText, users)
    setFilteredUsers(filter)
  }, [users, searchText, sideFilter, activityFilter, weightFilter, historyFilter])



  console.log(users)


  return (
    <div className="container">
      <p>Всего гостей: {users.length}</p>
      <p>Показано гостей: {filteredUsers.length}</p>

      {/*поиск по имени*/}
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => handleInputChange(e)}
          placeholder='имя/фамилия'
        />
        <button onClick={() => setSearchText('')}>Очистить поле</button>
      </div>
      {/*фильтр по стороне*/}
      <div>
        <span>Сторона: </span>
        <label>
          <input
            type="radio"
            name="side"
            value="1"
            checked={sideFilter === '1'}
            onChange={(e) => setSideFilter(e.target.value)}
          />
          <span>Жениха</span>
        </label>
        <label>
          <input
            type="radio"
            name="side"
            value="2"
            checked={sideFilter === '2'}
            onChange={(e) => setSideFilter(e.target.value)}
          />
          <span>Невесты</span>
        </label>
        <label>
          <input
            type="radio"
            name="side"
            value="all"
            checked={sideFilter === 'all'}
            onChange={(e) => setSideFilter(e.target.value)}
          />
          <span>Обе стороны</span>
        </label>
      </div>

      {/*фильтр по активности*/}
      <div>
        <span>Активность: </span>
        <label>
          <input
            type="radio"
            name="activity"
            value={1}
            checked={activityFilter == 1}
            onChange={(e) => setActivityFilter(parseInt(e.target.value))}
          />
          <span>Высокая</span>
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value={0}
            checked={activityFilter == 0}
            onChange={(e) => setActivityFilter(parseInt(e.target.value))}
          />
          <span>Низкая</span>
        </label>
        <label>
          <input
            type="radio"
            name="activity"
            value="all"
            checked={activityFilter === 'all'}
            onChange={(e) => setActivityFilter(e.target.value)}
          />
          <span>Все</span>
        </label>
      </div>

      {/*фильтр по важности*/}
      <div>
        <span>Важность: </span>
        <label>
          <input
            type="radio"
            name="weight"
            value={1}
            checked={weightFilter === 1}
            onChange={(e) => setWeightFilter(parseInt(e.target.value))}
          />
          <span>Родственники</span>
        </label>
        <label>
          <input
            type="radio"
            name="weight"
            value={2}
            checked={weightFilter === 2}
            onChange={(e) => setWeightFilter(parseInt(e.target.value))}
          />
          <span>Близкие друзья</span>
        </label>
        <label>
          <input
            type="radio"
            name="weight"
            value={3}
            checked={weightFilter === 3}
            onChange={(e) => setWeightFilter(parseInt(e.target.value))}
          />
          <span>Друзья</span>
        </label>
        <label>
          <input
            type="radio"
            name="weight"
            value="all"
            checked={weightFilter === 'all'}
            onChange={(e) => setWeightFilter(e.target.value)}
          />
          <span>Все</span>
        </label>
      </div>

      {/*фильтр по истории*/}
      <div>
        <span>История: </span>
        <label>
          <input
            type="radio"
            name="history"
            value='yes'
            checked={historyFilter === 'yes'}
            onChange={(e) => setHistoryFilter(e.target.value)}
          />
          <span>С историей</span>
        </label>
        <label>
          <input
            type="radio"
            name="history"
            value="all"
            checked={historyFilter === 'all'}
            onChange={(e) => setHistoryFilter(e.target.value)}
          />
          <span>Все</span>
        </label>
      </div>

      <button onClick={clearAllFilters}>Сбросить фильтры</button>

      <div className="row mb-3">
        {
          filteredUsers.map((user, index) =>
            <div key={index} className="col-md-12 g-3 p-0 col-lg-6 ">
              <div className="border h-100 m-2">
                <img className="w-100" src={`http://backend.rakulagin.com${user.img}`} alt=""/>
                <div className='p-4 userInfo'>
                  <h2>{user.firstName} {user.surName}</h2>
                  <p><span>Сторона: </span>{user.side === 1 ? 'Жениха' : 'Невесты'}</p>
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