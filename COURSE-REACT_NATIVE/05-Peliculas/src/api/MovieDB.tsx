import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGIyYjNlYTY5MjIxMTljNWEwYWYwM2E2NDNiNTI0MCIsInN1YiI6IjY0YmE5MDU2NGQyM2RkMDEyNTVhMmJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.js3Vm5yi6Kmu5Bx2dPLvQmgeLyDufvGjDzLu5znz6B8'
  },
  params: {
    api_Key: '70b2b3ea6922119c5a0af03a643b5240',
    language: 'es-ES',
  }
  
}); 

export default movieDB; 