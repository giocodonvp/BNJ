import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Profile } from "./modules/pages/my-menu/Profile";
import { Home } from './modules/pages/Home';
import { Main } from "./modules/layouts/Main";
import "antd/dist/antd.css";
import './App.scss'
import { SignUp } from './modules/pages/SignUp';
import { SignIn } from './modules/pages/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Main />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
