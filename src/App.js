import './App.css';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Login from './Login/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from './Testing/Layout/Layout';
import NotFound from './Testing/NotFound/NotFound';
import Dashboard from './Testing/Dashboard/Dashboard';
import Suppliers from './Testing/Suppliers/Suppliers';
import Products from './Testing/Products/Products';
import UserOrders from './Testing/UserOrders/UserOrders';
import Users from './Testing/Users/Users';
import Settings from './Testing/Settings/Settings';

function App() {
  return (
    <Router>
      
    <Routes>
         <Route  path='/' element={ <Layout />} >
            <Route path="dashboard" element={<Dashboard/>} />
            <Route  path='/' element={<Dashboard/>}/>
            <Route  path="suppliers" element={<Suppliers/>} />
            <Route  path="products" element={<Products />} />
            <Route  path="orders" element={<UserOrders />}/>
            <Route  path="users" element={<Users />}/>
            <Route  path="settings" element={<Settings />}/>  
         </Route>
         <Route  path='*' element={ <NotFound/>} />
         <Route  path='/login' element={<Login/>} />
         <Route  path='/forgot-password' element={<ForgotPassword/>} />
    </Routes>

    </Router>
  );
}

export default App;
