import axios from 'axios';

 const axiosInstance=axios.create({
baseURL:"https://api.themoviedb.org/3/",
// headers:{
    
// },
params:{
    api_key:"321f5f7965876840c44581c47fe37a22"
}

})
export default axiosInstance