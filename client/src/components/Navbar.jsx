import React, {useContext} from 'react';
import { UserContext } from '../App';

export default function Navbar(props) {
  const {setUser, setAuth} = useContext(UserContext)
  const logout = (e) => {
		setAuth(false);
		setUser(null);
		localStorage.clear();
	};
  return(
    <div>
      <button className='logout-btn' onClick={logout}>
      LOGOUT
      </button>
    </div>
    
  )
}
