import logo from './logo.svg';
import './App.css'; 
import {JoinUs} from "./components/JoinUs"
import Settings from "./components/Settings"
import LogIn from "./components/LogIn";
import {ContactUs} from "./components/ContactUs"
import Search from "./components/Search";
import Help from "./components/Help";
import Home from "./components/Home"
import Download from "./components/Download"


function App() {
  return (
    <div className="App">
      <div id='main'>
        <div id='main1'> 
          <JoinUs/>
          <LogIn/>
          <Search/>
        <Home/>
        </div>
        <div id='main2'>
        <Settings/>
        <ContactUs/>
        <Help/>
<Download/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
