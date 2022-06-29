import { BrowserRouter , Routes, Route} from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Home from './Component/Pages/Home';
import SignUp from './Component/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path = "/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
