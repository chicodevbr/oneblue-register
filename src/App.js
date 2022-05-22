import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import Register from './pages/Register';
import AuthContext from './store/auth-context';

import GlobalStyle from './style/GlobalStyle';

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        {authCtx.isLoggedIn && <Route path="about" element={<About />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
