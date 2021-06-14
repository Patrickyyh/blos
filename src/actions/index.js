
import React from 'react'; 
import jsonPlaceholder from '../apis/jsonPlaceholder'; 
import _ from 'lodash'; 

// combination of fetchUser and fetchPosts

export const fetchPostsAndUsers = () => {
    return async (dispatch,getState) =>{
        // remeber to dispatch function (call 'fetchPosts');
        // make it to await to make sure we get the response from api
         await dispatch(fetchPost()); 

         //using getState to fetch the data (using lodash _.map function);  
         // using the _.uniq function to fetch the unique elements from the array 
        // const userIds=  _.uniq(_.map(getState().posts,'userId')); 
        
        // //calling userfetch. 
        // userIds.forEach(id => dispatch(fetchUsers(id)));

        // console.log(getState().posts); 
        
        // making use of chain 
        _.chain(getState().posts)
        .map('userId').uniq()
        .forEach(id =>dispatch(fetchUsers(id)))
        .value(); 

         
        


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
















