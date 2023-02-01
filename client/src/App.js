
import './App.css';
import NavBar from './components/navBar';
import AfterLog from './components/afterLog';
import BeforeLog from './components/beforeLog';
import { useContext } from 'react';
import { UserContext } from './context/user';

function App() {
  const {user} = useContext(UserContext);
  return (
    <div >
     <NavBar/>
     {localStorage.getItem('x-auth-token') ? <AfterLog/> : <BeforeLog/>}
    </div>
  );
}

export default App;
