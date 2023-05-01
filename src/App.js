//import logo from './logo.svg';
// import './App.css';
import "./index.scss";
import Photos from './Photos.jsx'
import Lyrics from './Lyrics.jsx'
import Boroughs from './Boroughs.jsx'
import Text from './Text.jsx'

function App() {
  return (
    <div className="App">
    <Photos/>
    <Lyrics/>
    <Boroughs>
      <h1>Manhattan</h1>
      <h1>Brooklyn</h1>
      <h1>Queens</h1>
      <h1>The Bronx</h1>
      <h1>Staten Island</h1>
    </Boroughs>
    <Text/>
    </div>
  );
}

export default App;
