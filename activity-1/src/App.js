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
      <div className='wrapper'>
        <div className='filter'>
          <input className='filter__text-input' type='text' name='filter' value={filter}
                 onChange={handleFilterChange} />
          <input className='filter__button' type='button' value='Filter' onClick={filterData} />
          <input className='filter__button' type='button' value='Reset' onClick={resetData} />
        </div>

        <div className='add-new'>
          {['id', 'type', 'name', 'topping'].map((key) => (
            <input className='add-new__text-input' type='text' placeholder={key} name={key} value={newItem[key]}
                   onChange={(event) => handleNewItemChange(event, key)} />
          ))}

          <input className='add-new__button' type='button' value='Add' onClick={handleNewItemSubmit} />
        </div>


        <table className='table'>
          <thead>
          <tr className='row header'>
            {['id', 'type', 'name', 'topping'].map((key) => (
              <th className='cell'>
                {key}

                <span className='up-arrow' onClick={() => sortBy(key, 'asc')}>&#x2191;</span>
                <span className='down-arrow' onClick={() => sortBy(key, 'desc')}>&#x2193;</span>
              </th>
            ))}
          </tr>
          </thead>

          <tbody>
          {data.map(({ id, type, name, topping }) => {
            return (
              <tr className='row' key={`${id}-${topping}`}>
                <td className='cell'>{id}</td>
                <td className='cell'>{type}</td>
                <td className='cell'>{name}</td>
                <td className='cell'>{topping}</td>
              </tr>
            )
          })}
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default App
