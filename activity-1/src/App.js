import './App.css'

import jsonData from './data.json'
import { useCallback, useState } from 'react'

function App () {
  const initialData = JSON.parse(jsonData)

  const [data, setData] = useState(initialData)
  const [filter, setFilter] = useState('')
  const [newItem, setNewItem] = useState({ id: '', type: '', name: '', topping: '' })

  const sortBy = useCallback((key, direction) => {
    // looking at the existing data it makes sense to secondarily sort by topping
    // but this wouldn't necessarily be the case with other baked goods ??
    if (direction === 'asc') {
      setData([...data].sort((a, b) =>
        (a[key] > b[key])
          ? 1
          : (a[key] === b[key])
            ? ((a.topping > b.topping)
              ? 1
              : -1) : -1))
    } else {
      setData([...data].sort((a, b) =>
        (a[key] > b[key])
          ? -1
          : (a[key] === b[key])
            ? ((a.topping > b.topping)
              ? -1
              : 1) : 1))
    }
  }, [data])

  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value)
  })

  const filterData = useCallback(() => {
    if ([null, undefined, ''].includes(filter)) {
      setData(initialData)
      return
    }

    setData([...data].filter((item) =>
      item.id.toLowerCase().includes(filter.toLowerCase())
      || item.type.toLowerCase().includes(filter.toLowerCase())
      || item.name.toLowerCase().includes(filter.toLowerCase())
      || item.topping.toLowerCase().includes(filter.toLowerCase())
    ))
  }, [data, filter])

  const resetData = useCallback(() => {
    setFilter('')
    setData(initialData)
  }, [])

  const handleNewItemChange = useCallback((event, key) => {
    setNewItem({ ...newItem, [key]: event.target.value })
  })

  const handleNewItemSubmit = useCallback(() => {
    setData([...data, newItem])
  }, [data, newItem])

  return (
    <div className='App'>
      <form>
        <label>
          Filter:
          <input type='text' name='filter' value={filter} onChange={handleFilterChange} />
        </label>

        <input type='button' value='Apply' onClick={filterData} />
        <input type='button' value='Reset' onClick={resetData} />
      </form>

      Add New
      <form>
        <label>
          id:
          <input type='text' name='id' value={newItem.id} onChange={(event) => handleNewItemChange(event, 'id')} />
        </label>
        <label>
          type:
          <input type='text' name='type' value={newItem.type}
                 onChange={(event) => handleNewItemChange(event, 'type')} />
        </label>
        <label>
          name:
          <input type='text' name='name' value={newItem.name}
                 onChange={(event) => handleNewItemChange(event, 'name')} />
        </label>
        <label>
          topping:
          <input type='text' name='topping' value={newItem.topping}
                 onChange={(event) => handleNewItemChange(event, 'topping')} />
        </label>

        <input type='button' value='Add new baked good' onClick={handleNewItemSubmit} />
      </form>


      <table>
        <thead>
        <tr>
          <th className='id'>      id      <span onClick={() => sortBy('id',      'asc')}>&#x2191;</span> <span onClick={() => sortBy('id',      'desc')}>&#x2193;</span></th>
          <th className='type'>    type    <span onClick={() => sortBy('type',    'asc')}>&#x2191;</span> <span onClick={() => sortBy('type',    'desc')}>&#x2193;</span></th>
          <th className='name'>    name    <span onClick={() => sortBy('name',    'asc')}>&#x2191;</span> <span onClick={() => sortBy('name',    'desc')}>&#x2193;</span></th>
          <th className='topping'> topping <span onClick={() => sortBy('topping', 'asc')}>&#x2191;</span> <span onClick={() => sortBy('topping', 'desc')}>&#x2193;</span></th>
        </tr>
        </thead>

        <tbody>
        {data.map(({ id, type, name, topping }) => {
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
