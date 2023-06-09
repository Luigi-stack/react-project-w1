import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NetflixNav from './components/NetflixNav';
import NetflixFooter from './components/NetflixFooter';
import Home from './components/Home';
import Batman from './components/Batman'
import Superman from './components/Superman';
import Harrypotter from './components/Harrypotter';

function App() {
  return (
    <div className="App"> 
      <NetflixNav/>
      <Home/>
      <Batman type='Batman'/>
      <Superman type='Superman'/>
      <Harrypotter type='Harry Potter'/>
      <NetflixFooter/>

    </div>
  );
}

export default App;
