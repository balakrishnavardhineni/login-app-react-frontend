import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import FormDialog from './FormDialog';


function Dashboard(props) {
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/signin');
  }
 
  return (
    <div>
      Welcome {user.name}!<br /><br />
      
      <FormDialog /><br/><br/>
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
