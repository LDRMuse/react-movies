import dotenv from 'dotenv'

dotenv.config()

// exporting out a FUNCTION(not an object)
export default (baseURL = `http://localhost:${process.env.REACT_APP_PORT}`
) => (
    // invoking this function return an object
    // this is nothing but s method that is inside of the returned object
    {
      async index(query) {
        const res = await fetch(`${baseURL}?query=${query}`)

        return await res.json()
      },
    })


