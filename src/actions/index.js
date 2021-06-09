import { async } from 'q';
import React from 'react'; 
import jsonPlaceholder from '../apis/jsonPlaceholder'; 
// Action creator 

export const fetchPost = async() =>{
    
    // Getting the response 
    const response = await jsonPlaceholder.get('/posts'); 
    
    return {
        type: 'FETCH_POST',
        payload: response
    };
};