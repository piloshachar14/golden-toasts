import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from '../components';
import { Test } from '../components/test';
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={Test />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
