import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from 'react-router-dom';
import Main from './components/Main';
import Head from './components/Head';
import Footer from './components/Footer';

function App() {
  return (
    <div >
<Head/>
     <Routes>
      <Route path='/' element={<Main/>}></Route>

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
