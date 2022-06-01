import logo from './logo.svg';
import './App.css';

import jsonData from './data.json';


function App() {
  const data = JSON.parse(jsonData);
  return (
    <div className="App">
      {/*TODO: use a cute gif or something*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>type</th>
          <th>name</th>
          <th>topping</th>
        </tr>
        </thead>

        <tbody>
        {data.map(({id, type, name, topping}) => {
          return (
            <tr key={`${id}-${topping}`}>
              <td>{id}</td>
              <td>{type}</td>
              <td>{name}</td>
              <td>{topping}</td>
            </tr>
          )
        })}
        </tbody>

      </table>

    </div>
  );
}

export default App;
