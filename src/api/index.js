import dotenv from 'dotenv'

dotenv.config()


export default {
  async index(query) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1&include_adult=false`
      )
      // fetch will not detect an error, so we create one if code is >400
      if (res.status > 400) {
      throw new Error(`This is the throw message. ${res.status}`)
      }

      return await res.json()
    } catch (error) {
      return (`This is an error message from catch. ${error.message}`)
    }


  },
}
