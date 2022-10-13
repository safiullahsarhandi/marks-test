import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5109/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';

export default axios;