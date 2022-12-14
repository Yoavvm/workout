
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/features/user/UserSlice';
import { handleLogout } from '../../redux/features/workout/workoutSlice';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import '../styles.css';

const Navbar = () => {

    const navigate = useNavigate();
    const userState = useAppSelector(state => state.User)
    const dispatch = useAppDispatch();
    const navigateOnClick = ({ innerHTML }: any): void => {
        innerHTML ? navigate(innerHTML.toLowerCase().replace(/\s+/g, '')) : navigate('')
    }

    const onLogoutClick = () => {
        dispatch(logout())
        dispatch(handleLogout());
        navigateOnClick('')
    }



    return (
        <div className='navbar container'>
            {!userState.user && <button onClick={(e) => navigateOnClick(e.target)}>Login</button>}
            {!userState.user && <button onClick={(e) => navigateOnClick(e.target)}>Register</button>}
            {/* {userState.user && <button onClick={(e) => navigateOnClick(e.target)}>Admin</button>} */}
            {userState.user && <button onClick={(e) => navigateOnClick(e.target)}>My Account</button>}
            {userState.user && <button onClick={onLogoutClick}>Logout</button>}

        </div>
    )
}

export default Navbar