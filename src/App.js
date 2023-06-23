import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/header/Header';
import RegForm from './Component/RegistrationForm/RegForm';
import UserList from './Component/Users/UserList';

function App() {
  return (
    <div >
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<RegForm></RegForm>} index />
          <Route path='/userlist' element={<UserList></UserList>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
