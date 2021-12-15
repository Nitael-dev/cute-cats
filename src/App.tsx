import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth.context';
import Routes from './routes';
import './styles/global.scss'

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;