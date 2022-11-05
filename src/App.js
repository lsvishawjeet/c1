import './App.css';
import Home from "./Components/Home";
import Contact2 from "./Components/Contact2";
import Contact from "./Components/Contact";
import Programs from "./Components/Programs";
import Homepage from './Components/Homepage';
import About from "./Components/About";
import About2 from './Components/About2';
import Navibar from './Components/Navibar';
import Footer from './Components/Footer';
import Hacking from './Components/Courses/Hacking';
import BugBounty from './Components/Courses/BugBounty';
import DigitalMarketing from './Components/Courses/DigitalMarketing';
import {  Switch, Route, Router, Redirect } from 'react-router-dom';

function App() {
  return (
   <>
   {alert("This is just a sample, Final project was differnt from this")}
   <Navibar/>
   {/* <Homepage/> }
   {/* <Home></Home>
   <Programs></Programs>
   <About/>
   <Contact/> */}
   {/* <Hacking/> */}
   <Switch>
   <Redirect exact from="/c1" to="/c1/home" />
    <Route exact path='/c1/home' component={Homepage}/>
    <Route exact path='/c1/about' component={About2}/>
    <Route exact path='/c1/contact' component={Contact2}/>
    <Route exact path='/c1/programs' component={Programs}/>
    <Route exact path='/c1/programs/eh1' component={Hacking}/>
    <Route exact path='/c1/programs/eh2' component={BugBounty}/>
    <Route exact path='/c1/programs/digitalmarketing' component={DigitalMarketing}/>
    </Switch>
    <Contact/>
    <Footer/>
   </>
  );
}

export default App;
