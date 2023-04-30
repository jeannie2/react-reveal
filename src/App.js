//import logo from './logo.svg';
// import './App.css';
import "./index.scss";
import Banner from './Banner.jsx'
import Banner2 from './Banner2.jsx'
import Banner3 from './Banner3.jsx'

function App() {
  return (
    <div className="App">
     <Banner/>
     <Banner2>
      <h1>Manhattan</h1>
      <h1>Brooklyn</h1>
      <h1>Queens</h1>
      <h1>The Bronx</h1>
      <h1>Staten Island</h1>
     </Banner2>
     <Banner3>
  <div className="circle"></div>
   <div className="circle"></div>
    <div className="circle"></div>
     <div className="circle"></div>
    </Banner3>
    </div>
  );
}

export default App;
