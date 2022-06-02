// const locationsEndpoint = 'https://api.megaport.com/v2/locations'
const locationsEndpoint = 'https://mocki.io/v1/f8ff074f-5245-424b-915d-3f1be8d140c1'

const fetchLocations = async () => {
  try {
    const response = await fetch(locationsEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    if (response.ok) {
      const data = await response.json()
      return data.data
    } else {
      const error = new Error(response.errors.join(', '))
      // error handling
      console.log(error)
      return error
    }
  } catch (error) {
    // error handling
    console.log(error)
    return error
  }
}

// do something with the data
fetchLocations()
  .then((data) => {
      console.log(data)
    },
    (error) => {
      console.log(error)
    })
  .catch(error =>
    console.log(error)
  )
