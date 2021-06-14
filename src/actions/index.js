
import React from 'react'; 
import jsonPlaceholder from '../apis/jsonPlaceholder'; 


// combination of fetchUser and fetchPosts

export const fetchPostsAndUsers = () => {
    return async (dispatch) =>{
        // remeber to dispatch function (call 'fetchPosts');
        // make it to await to make sure we get the response from api 
         await dispatch(fetchPost()); 

        // GET lists of posts 
        

    };

}; 


// import _ from 'lodash'; 
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


// fetch the specific user's information 
export const fetchUsers = (id) =>{

    return async(dispatch)=>{
         const response = await jsonPlaceholder.get(`/users/${id}`);
         dispatch({type: 'FETCH_USERS', payload: response.data}); 
    };
};


// export const fetchUsers = (id) =>  dispatch => {
//     _fetchUser(id,dispatch);
// };

 
// const _fetchUser = _.memoize(async (id, dispatch) =>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USERS', payload: response.data}); 
// });
















