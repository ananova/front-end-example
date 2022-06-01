import './App.css'

import jsonData from './data.json'
import { useCallback, useState } from 'react'

function App() {
  const initialData = JSON.parse(jsonData)

  const [data, setData] = useState(initialData)

  const sortBy = useCallback((key) => {
    // looking at the existing data it makes sense to secondarily sort by topping
    // but this wouldn't necessarily be the case with other baked goods ??
    setData([...data].sort((a, b) =>
      (a[key] > b[key])
        ? 1
        : (a[key] === b[key])
          ? ((a.topping > b.topping)
            ? 1
            : -1) : -1 ))
  }, [data])

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
          <th className="id" onClick={() => sortBy("id")}>id</th>
          <th onClick={() => sortBy("type")}>type</th>
          <th onClick={() => sortBy("name")}>name</th>
          <th onClick={() => sortBy("topping")}>topping</th>
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
  )
}

export default App
