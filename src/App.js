import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from 'react-router-dom';
import Main from './components/Main';
import Head from './components/Head';
import Footer from './components/Footer';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [islogin,setislogin]= useState(false);
  const [Token,setToken]= useState("");
   function LoginUser( login,token){
    if(login== true){
      setislogin(true)
    }
    if(token !=""){
      setToken(token);
      console.log(`${Token}`);
    }
   }
  return (
    <div >
    {  islogin ?
      <div>
      <Head/>
           <Routes>
            <Route path='/' element={<Main/>}></Route>
      
           </Routes>
           <Footer/>
           </div>
          : <div>
             <Login LoginUser={LoginUser}/>
          </div>
         
    }
    </div>
  );
}

export default App;
