import axios from "axios";

export const getUsers = async ()=>{
        try {
            let {data} =  await axios.get('/users');
            return data;
        } catch (error) {
            throw error.response;
        }
}


export const createUser = async (params = {})=>{
    try {
        let {data} =  await axios.post('/users',params);
        return data;
    } catch (error) {
        throw error.response;
    }
}

export const updateUser = async (id,params = {})=>{
    try {
        let {data} =  await axios.post(`/users/${id}`,params);
        return data;
    } catch (error) {
        throw error.response;
    }
}

export const deleteUsers = async (params = {})=>{
    try {
        let {data} =  await axios.post(`/users-delete`,params);
        return data;
    } catch (error) {
        throw error.response;
    }
}