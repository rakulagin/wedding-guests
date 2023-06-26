import React, {useEffect, useState} from 'react';
import axios from "axios";

const UsersList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      axios.get('http://backend.rakulagin.com/users')
        .then(res => setUsers(res.data))
    } catch (e) {
      console.log(e)
    }
  }, []);

  console.log(users)

  return (
    <div className="container">
      <p>итого гостей: {users.length}</p>
      <div className="row mb-3">
        {
          users.map((user, index) =>
            <div key={index} className="col-md-12 g-3 p-0 col-lg-6 ">
              <div className="border h-100 m-2">
                <img className="w-100" src={`http://backend.rakulagin.com${user.img}`} alt="photo"/>
                <h2>{user.firstName} {user.surName}</h2>
                <p className="m-0">Как мы называем: {user.nickname}</p>
                <p className="m-0">Сторона: {user.side === 1 ? 'Жениха' : 'Невесты'}</p>
                <p className="m-0">Активность: {user.activity === true ? 'Да' : 'Нет'}</p>
                <p className="m-0">История: {user.ourHistory ? user.ourHistory : 'Нет'}</p>
                <p className="m-0">Важность: {user.weight===1 ? 'Максимальная' : user.weight===2 ?  'Высокая' : user.weight===3 ? 'Средняя' : null}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default UsersList;
