import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Main from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='text-center'>
          <Main />
          </div>
        
        </div>
      </BrowserRouter>

    );
  }
}
export default App;