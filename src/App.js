import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { createContext } from 'react';
import MainHeader from './components/MainHeader';

// TODO custom hook with createContext
const initialContextValue = 'Test'

function App() {
  const HeaderContext = createContext(initialContextValue);
  return (
    <HeaderContext.Provider value={initialContextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader context={HeaderContext} />} />
          <Route path="/:id" element={<MainHeader />} />
          <Route
            path="*"
            element={(
              <main style={{ padding: '1rem' }}>
                <p>Theres nothing here!</p>
              </main>
                )}
          />
        </Routes>
      </BrowserRouter>
    </HeaderContext.Provider>
  );
}

export default App;
