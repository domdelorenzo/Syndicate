import React, {useContext} from 'react';
import { UserContext } from '../App';
import logo512 from '../assets/logo512.png';

export default function Navbar(props) {
  const {setUser, setAuth} = useContext(UserContext)
  const logout = (e) => {
		setAuth(false);
		setUser(null);
		localStorage.clear();
	};
  return(
    <div>
      <div className='nav-container'>
        <img className="small-logo" src={logo512}></img>
        <div className='brand'>Syndicate</div>
        <button  className='logout-btn highlight-btn' onClick={logout}>
        Logout
        </button>
      </div>
      
    </div>
    
  )
}
