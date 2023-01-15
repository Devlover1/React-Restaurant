
//import Menu from './components/MenuComponent';
import React, { Component } from 'react';
import './App.css';
import { DISHES } from './shared/dishes';
//import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
    return(
  /*    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>*/
      <Provider store={store}>
      <BrowserRouter>
      <div>
        <Main/>
      </div>
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App;