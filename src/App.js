import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingRooms from './Componant/BookingRooms/BookingRooms';
import Header from './Componant/Header/Header';
import Home from './Componant/Home/Home';
import Register from './Componant/Register/Register';
import SingIn from './Componant/SingIn/SingIn';

function App() {
  return (
    <div>
       <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/signIn:id' element={<SingIn></SingIn>}></Route>
        <Route path='/bookingRooms' element={<BookingRooms></BookingRooms>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
