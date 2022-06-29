import { BrowserRouter , Routes, Route} from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Home from './Component/Pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
