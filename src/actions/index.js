
import React from 'react'; 
import jsonPlaceholder from '../apis/jsonPlaceholder'; 
// Action creator 
// Fetch the post of all users
export const fetchPost = () =>{

    // to fetch the post of the user (not include the user name )
    return async (dispatch , getState) =>{
    // Getting the response 
        const response = await jsonPlaceholder.get('/posts'); 
        // Since we only want to fetch the data from the response, so we just need to dispatch data 
        dispatch({type: 'FETCH_POSTS', payload: response.data });
    };
};


//fetch the specific 
export const fetchUsers = (id) =>{

    return async(dispatch ,getState)=>{
         const response = await jsonPlaceholder.get(`/users/${id}`);
         dispatch({type: 'FETCJ_USERS', payload: response.data}); 
    };
};







