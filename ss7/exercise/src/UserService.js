import React from 'react'
import axios from 'axios'

export const findAll = async () => {
  try{
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    return result.data;
  }catch(error){
    console.log(error);
  }
}

export const deleteUser = async (id) => {
  try{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    alert("Delete success")
  }catch(e){
    console.log(e);
  }
}