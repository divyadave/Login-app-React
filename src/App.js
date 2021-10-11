import logo from './logo.svg';
import './App.css';
import MainHeader from './components/Main Header/MainHeader';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useContext} from 'react';
import AuthContext from './components/store/AuthContext';


function App() {
  const Authctx = useContext(AuthContext)
 
  return (
  
    <>
    <MainHeader></MainHeader>
    <main>
    { !Authctx.isLoggedIn && <Login></Login> }
    { Authctx.isLoggedIn && <Home></Home >}
    </main>
    </>
   
  );
}

export default App;
