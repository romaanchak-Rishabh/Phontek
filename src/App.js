// import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import Header from './component/header/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import ContactUs from './component/cantactUs/ContactUs';
import DCHomepage from './component/dataCables/DCHomepage/DCHomepage';
import ChargersHomepage from './component/chargers/chargersHomepage/ChargersHomepage';
import HFHomepage from './component/handsfree/HFHomepage/HFHomepage';
import MicroSDHomepage from './component/microSD/microSDHomepage/MicroSDHomepage';
import PenDriveHomepage from './component/penDrive/penDriveHomepage/penDriveHomepage';
import FullPageDescription from './component/fullPageDesc/FullPageDesc';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Switch>
        <Route exact path='/Phontek/home' component={Home} />
        <Route exact path='/Phontek/contact-us' component={ContactUs} />
        <Route exact path='/Phontek/data-cables' component={DCHomepage} />
        <Route exact path='/Phontek/chargers' component={ChargersHomepage} />
        <Route exact path='/Phontek/:productCatagory/:productId' component={FullPageDescription} />
        <Route exact path='/Phontek/handsfree' component={HFHomepage} />
        {/* <Route exact path='/handsfree/hf2' component={ChargersHomepage} /> */}
        <Route exact path='/Phontek/microSD' component={MicroSDHomepage} />
        <Route exact path='/Phontek/pendrive' component={PenDriveHomepage} />
        {/* <Redirect to='/home' /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
