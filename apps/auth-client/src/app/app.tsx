import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SignIn } from '../components';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
