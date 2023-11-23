import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Search1 from './components/Search1';
import Search2 from './components/Search2';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import About from './components/About';
import Faq from './components/Faq';
import Travel from './components/Travel';
import Contact from './components/Contact';
import Cars from './components/Cars';
import Cars2 from './components/Cars2';
import Booking from './components/Booking';
import Admin from './components/Admin';
import History from './components/History';
import History2 from './components/History2';
import EditCar from './components/EditCar';
import EditUser from './components/EditUser';
import './components/style.css';
import UserProvider from './components/UserProvider';

function App() {
  return (
    <div>
      <UserProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/search1" element={<Search1/>}/>
          <Route path="/search2" element={<Search2/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/travel" element={<Travel/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cars" element={<Cars/>}/>
          <Route path="/cars2" element={<Cars2/>}/>
          <Route path="/booking/:id" element={<Booking/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/history2" element={<History2/>}/>
          <Route path="/editcar/:id" element={<EditCar/>}/>
          <Route path="/edituser" element={<EditUser/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </HashRouter>
      </UserProvider>      
    </div>
  );
}

export default App;
