import React, {useEffect, useState} from 'react';
import axios from "axios";


const UsersList = () => {

  const [users, setUsers] = useState([]);

  const [filteredUsers, setFilteredUsers] = useState([])

  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
}

const filterGuests = (searchValue, users) => {
  if (!searchValue) return users

return users.filter((user)=> 
user.firstName.toLowerCase().includes(searchValue.toLowerCase()) || user.surName.toLowerCase().includes(searchValue.toLowerCase())
)
  
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

  useEffect(()=>{
    const filter = filterGuests(searchValue, users)
    setFilteredUsers(filter)
  },[users, searchValue])

  return (
    <div className="container">
      <p>Итого гостей: {users.length}</p>
      <p>Показано гостей: {filteredUsers.length}</p>
      <input 
        type="text"
        value={searchValue}
        onChange={(e)=>handleInputChange(e)}
        />
      <div className="row mb-3">
        {
          filteredUsers.map((user, index) =>
            <div key={index} className="col-md-12 g-3 p-0 col-lg-6 ">
              <div className="border h-100 m-2">
                <img className="w-100" src={`http://backend.rakulagin.com${user.img}`} alt=""/>
                <div className='p-4'>
                  <h2>{user.firstName} {user.surName}</h2>
                  <p>Сторона: {user.side === 1 ? 'Жениха' : 'Невесты'}</p>
                  <p>Активность: {user.activity === true ? 'Да' : 'Нет'}</p>
                  <p>История: {user.ourHistory ? user.ourHistory : 'Нет'}</p>
                  <p>Важность: {user.weight===1 ? 'Максимальная' : user.weight===2 ?  'Высокая' : user.weight===3 ? 'Средняя' : null}</p>
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
