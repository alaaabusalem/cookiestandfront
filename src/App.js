import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div >

     <Routes>
      <Route path='/' element={<Main/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
