import { BrowserRouter , Routes, Route} from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import LandingPage from './Component/Pages/LandingPage';
import SignUp from './Component/SignUp';
import Home from './Component/Pages/Home';
import AddItem from './Component/Pages/AddItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path = "/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
