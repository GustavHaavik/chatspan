import axios from 'axios';

const url = `${process.env.DEVELOPEMENT_SERVER}/api/v1/users`;

export const fetchUsers = () => axios.get(url);
export const fetchUser = (id) => axios.get(`${url}/${id}`);
export const createUser = (newUser) => axios.post(`${url}/${id}`, newUser);
export const updateUser = (id, updatedUser) => axios.patch(`${url}/${id}`, updatedUser);