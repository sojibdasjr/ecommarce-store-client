import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Layout/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>} >
        <Route path='' element={<Dashboard/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
     </Routes>
    </>
  );
}

export default App;
