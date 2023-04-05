import axios from 'axios';

export const findAll = async () => {
    try {
        const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books');
        return result.data;
    } catch (error){
        console.log(error);
    }
}

export const save = async (book) => {
    try{
        await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books', {...book});
    }catch (e){
        console.log(e);
    }
}

export const deleteBook = async (id) => {
    try{
        await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
    }catch (e){
        console.log(e);
    }
}

export const editBook = async (id,book) => {
    try{
        await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
    }catch (e){
        console.log(e);
    }
}