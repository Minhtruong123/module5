import React from 'react'
import axios from 'axios'

export const findAll = async () => {
    try{
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return result.data;
    }catch (error){
        console.log(error);
    }
}

export const save = async (title) => {
    try{
        await axios.post('https://jsonplaceholder.typicode.com/todos', {...title});
    }catch (e){
        console.log(e);
    }
}
