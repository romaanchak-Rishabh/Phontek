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
      <Home />
      <Switch>
        <Route exact path='/phontek/home' component={Home} />
        <Route exact path='/phontek/contact-us' component={ContactUs} />
        <Route exact path='/phontek/data-cables' component={DCHomepage} />
        <Route exact path='/phontek/chargers' component={ChargersHomepage} />
        <Route exact path='/phontek/:productCatagory/:productId' component={FullPageDescription} />
        <Route exact path='/phontek/handsfree' component={HFHomepage} />
        {/* <Route exact path='/handsfree/hf2' component={ChargersHomepage} /> */}
        <Route exact path='/phontek/microSD' component={MicroSDHomepage} />
        <Route exact path='/phontek/pendrive' component={PenDriveHomepage} />
        {/* <Redirect to='/home' /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
