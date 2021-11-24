import React from 'react'
import { reduxActionTemplate } from './actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import UserLogin from './components/UserLogin'

function Main() {
    const dispatch = useDispatch()
    dispatch(reduxActionTemplate(5))
    const reduxSelector = useSelector(state => state.reduxTemplate)
    console.log(reduxSelector)

    return (
        <div>
            <Switch>
                <Route exact path = '/'>
                <UserLogin />
                </Route>
            </Switch>
        </div>
    )
}

export default Main
