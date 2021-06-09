
import React from 'react';
import { connect } from 'react-redux'; 
import { fetchPost } from '../actions';


class PostList extends React.Component{


    // calling action creator to fetch data 
    componentDidMount(){
            this.props.fetchPost(); 
    }

    render(){
       
        return(
            <div>
                Post List
            </div>

        );
    }

};


// const mapStateToProps = (state) =>{
   
// }

export default connect(null ,{ fetchPost: fetchPost }) (PostList); 





