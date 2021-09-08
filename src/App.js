import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

function App() {

  const getAllCards = () => {
    return firebase
    .database()
    .ref(`users/O4jpwH2Fy0dFhg09iRhjkJYHr3C3/cards`)
    .once('value')
    .then(snapshot => snapshot.val())
    .catch(err => console.log(err));
  }

  console.log(getAllCards());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
