import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from '../components';
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
