import './App.css';
import Home from './component/Home';
import { Routes,Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashBoard from './component/DashBoard';
import Main from './component/Main';
import CompletedTask from './component/CompletedTask';
import Task from './component/Task';
import { useSelector } from 'react-redux';

function App() {

  const {token} = useSelector((state)=>state.auth);

  console.log(token)



  return (
    <div className=" min-h-screen w-screen backked relative overflow-x-hidden">
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
       {
        token && <>
         <Route exact path='/dashboard' element={<DashBoard/>}>
        <Route index element={<Main/>}/>
        <Route path='completed' element={<CompletedTask/>}/>
        </Route>
        <Route path='/task/:id' element={<Task/>}/></>
       }
      </Routes>
     
    </div>
  );
}

export default App;
