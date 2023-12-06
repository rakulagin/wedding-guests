import React, {useEffect, useState} from 'react';
import axios from "axios";

import User from './User'

import {useSelector} from "react-redux";

import ScrollToTop from "./ScrollToTop/ScrollToTop";
import FilterPanel from "./FilterPanel/FilterPanel";
import ActiveFilters from "./ActiveFilters/ActiveFilters";

const UsersList: React.FC = () => {

    interface User {
        firstName: string,
        surName: string,
        company: number,
        who: string,
        side: number,
        activity: boolean,
        weight: number,
        imgForWeddingHost: string,
        ourHistory?: string,
    }

    // @ts-ignore
    const textValue = useSelector(state=> state.textInputReducer.text)
    // @ts-ignore
    const sideFilter = useSelector(state => state.filters.sideFilter)
    // @ts-ignore
    const activityFilter = useSelector(state => state.filters.activityFilter)
    // @ts-ignore
    const weightFilter = useSelector(state => state.filters.weightFilter)
    // @ts-ignore
    const historyFilter = useSelector(state => state.filters.historyFilter)
    // @ts-ignore
    const tableFilter = useSelector(state => state.filters.tableFilter)

    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])


    const filterGuests = (searchValue: string, users: any) => {
        // @ts-ignore
        const usersWithSide = sideFilter === 'all' ? users : users.filter(user => user.side === Number(sideFilter))
        // @ts-ignore
        const usersWithActivity = activityFilter === 'all' ? usersWithSide : usersWithSide.filter(user => user.activity === Boolean(activityFilter))
        // @ts-ignore
        const usersWithWeight = weightFilter === 'all' ? usersWithActivity : usersWithActivity.filter(user => user.weight === Number(weightFilter))
        // @ts-ignore
        const usersWithHistory = historyFilter === 'all' ? usersWithWeight : usersWithWeight.filter(user => user.hasOwnProperty('ourHistory'))
        // @ts-ignore
        const usersWithTables = tableFilter === 'all' ? usersWithHistory : usersWithHistory.filter(user => user.company === Number(tableFilter))

        // @ts-ignore
        return usersWithTables.filter((user) =>
            user.firstName.toLowerCase().includes(searchValue) || user.surName.toLowerCase().includes(searchValue)
        )
    }

    useEffect(() => {
        try {
            axios.get('https://backend.rakulagin.com/users')
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
            <div className='d-flex justify-content-between border rounded p-1 mb-3'>
                <p><strong>Показано гостей:</strong> {filteredUsers.length}</p>
                <p><strong>Всего гостей:</strong> {users.length}</p>
            </div>

            <ActiveFilters/> 

            <FilterPanel/>

            <div className="row mb-3">
                {
                    filteredUsers.map((user, index) =>
                        <User
                            key={index}
                            firstName={user.firstName}
                            surName={user.surName}
                            company={user.company}
                            who={user.who}
                            side={user.side}
                            activity={user.activity}
                            weight={user.weight}
                            img={user.imgForWeddingHost}
                            history={user.ourHistory}
                        />
                    )
                }
            </div>
            <ScrollToTop/>
        </div>
    );
};

export default UsersList;