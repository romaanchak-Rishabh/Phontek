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
      <Link to path='/' component={Home} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route exact path='/data-cables' component={DCHomepage} />
        <Route exact path='/chargers' component={ChargersHomepage} />
        <Route exact path='/:productCatagory/:productId' component={FullPageDescription} />
        {/* <Route exact path='/data-cables/dc2' component={DCHomepage} />
        <Route exact path='/data-cables/dc3' component={DCHomepage} />
        <Route exact path='/chargers/ch1' component={ChargersHomepage} />
        <Route exact path='/chargers/ch2' component={ChargersHomepage} /> */}
        <Route exact path='/handsfree' component={HFHomepage} />
        {/* <Route exact path='/handsfree/hf1' component={ChargersHomepage} />
        <Route exact path='/handsfree/hf2' component={ChargersHomepage} /> */}
        <Route exact path='/microSD' component={MicroSDHomepage} />
        {/* <Route exact path='/microSD/sd1' component={MicroSDHomepage} />
        <Route exact path='/microSD/sd2' component={MicroSDHomepage} />
        <Route exact path='/microSD/sd3' component={MicroSDHomepage} />
        <Route exact path='/microSD/sd4' component={MicroSDHomepage} /> */}
        <Route exact path='/pendrive' component={PenDriveHomepage} />
        {/* <Route exact path='/pendrive/pd1' component={PenDriveHomepage} />
        <Route exact path='/pendrive/pd2' component={PenDriveHomepage} />
        <Route exact path='/pendrive/pd3' component={PenDriveHomepage} />
        <Route exact path='/pendrive/pd4' component={PenDriveHomepage} /> */}


        {/* <Redirect to='/' /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
