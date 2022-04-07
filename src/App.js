import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { HomePageContainer } from './pages/HomePage/HomePageContainer';
import { TitleProvider } from './hooks/useHeaderContext';

function App() {
  return (
    <TitleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageContainer />} />
          <Route path="/:id" element={<HomePageContainer />} />
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
    </TitleProvider>
  );
}

export default App;
