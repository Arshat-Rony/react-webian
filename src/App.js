import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Bootcamps from './components/Bootcamps/Bootcamps';
import Footer from './components/Footer/Footer';
import Consultancy from './components/Consultancy/Consultancy';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Books from './components/Books/Books';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bootcamps' element={<Bootcamps></Bootcamps>}></Route>
        <Route path='/consultancy' element={<Consultancy></Consultancy>}></Route>
        <Route path='/courses' element={
          <RequireAuth>
            <Courses>
            </Courses>
          </RequireAuth>
        }></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
