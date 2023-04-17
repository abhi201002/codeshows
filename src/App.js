import { useEffect, useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import Content from './components/Content';
import Navbar from './components/navbar';
import Login from './components/Login';
import Team from './components/Team';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  const [login,setLogin] = useState(false);
  const changelog = (login)=>{
    if(login){
      setLogin(false);
    }
    else{
      setLogin(true);
    }
  }
  return (
    <>
    <Router>
    <div className="App">
      <Navbar status = {login} update = {changelog}/>
      <Routes>
        <Route path = '/profile' element = {
          <Profile/>
        }/>
        <Route path = '/' element = {
          <>
          <div className="home">
          <Content/>
          <Team/>
          </div>
          </>
        }/>
      </Routes>
      <Footer/>
    </div>
    </Router>
    <div>
      {login ?
      (
        <Login status = {login} update = {changelog}/>
        )
        :
        (<></>)
      }
    </div>
    </>
  );
}

export default App;
