import logo from './logo.svg';
import './App.css';
import HomeContainer from './container/HomeContainer'
import HeaderContainer from './container/HeaderContainer'
function App() {
  return (
    <div className="App">
      <div>
        <HeaderContainer />
        <HomeContainer />
      </div>
    </div>
  );
}

export default App;
