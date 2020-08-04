export default {
  async index() {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/550?api_key=513d20b4b8857eee64aeaa6496539939'
      )
      return await res.json()
  },
}
