import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../components/';
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
