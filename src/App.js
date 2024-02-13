import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import EditorPage from './Pages/EditorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/editor/:roomID" element = {<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
