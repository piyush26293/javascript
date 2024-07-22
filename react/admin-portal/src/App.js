import logo from './logo.svg';
import './App.scss';
import {Paper} from '@mui/material'
import { Login, LoginComponent } from './auth/LoginComponent';
import { PagesComponent } from './pages/PagesComponent';
import {Routes, Route, Navigate} from 'react-router-dom'
import { ProtectedRoute } from './Components/ProtectedRoute';
import { useAuth } from './hooks/UseAuth';

function App() {
  const isAuthenticated = useAuth();
  return (
    <div className="app-component mt-5" >
      {/* <Paper elevation={3}>
        MUI Paper
      </Paper> */}

      <Routes>
        <Route path='/' element={<Navigate to={isAuthenticated ?"/pages":"login"} replace={true}></Navigate>}></Route>
        <Route path='login' element={<LoginComponent></LoginComponent>}></Route>
        <Route path='pages/*' element={<PagesComponent></PagesComponent>}></Route>
        {/* <ProtectedRoute>
        <Route path='pages' element={<PagesComponent></PagesComponent>}></Route>
        </ProtectedRoute> */}
      </Routes>

      



    </div>
  );
}

export default App;
