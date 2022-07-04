import { BrowserRouter , Routes, Route} from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import LandingPage from './Component/Pages/LandingPage';
import SignUp from './Component/SignUp';
import Home from './Component/Pages/Home';
import AddItem from './Component/Pages/AddItem';
import SearchItemPage from './Component/Pages/SearchItem';
import GetItem from './Component/Pages/GetItems';
import Account from './Component/Pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/searchitem" element={<SearchItemPage></SearchItemPage>}></Route>
        <Route path="/getitems" element={<GetItem></GetItem>}></Route>
        <Route path="/account" element={<Account></Account>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
