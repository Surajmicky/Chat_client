
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import SetAvatar from './pages/SetaAvatar'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='setAvatar' element={<SetAvatar/>}/>
    </Routes>
    </BrowserRouter>
      
  );
}

export default App;
