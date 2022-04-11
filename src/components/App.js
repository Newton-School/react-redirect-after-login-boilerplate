import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { AuthProvider } from './Auth';
import { Login } from './Login'
import { ProtectedRoute } from './ProtectedRoute';
import { GenericPage } from './GenericPage';
import { Home } from './Home';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/protectedpage1' element={
              <ProtectedRoute >
                <GenericPage pageId={'protectedpage1'} content={'Protected Page 1'} />
              </ProtectedRoute>}
            />
            <Route path='/protectedpage2' element={
              <ProtectedRoute >
                <GenericPage pageId={'protectedpage2'} content={'Protected Page 2'} />
              </ProtectedRoute>}
            />
          </Routes>
        </div>
      </BrowserRouter>

    </AuthProvider>

  );
}

export default App;
