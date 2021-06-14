import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions'



class UserHeader extends React.Component{
    componentDidMount(){
        // use fetchUser actionCreator to make request to api 
        this.props.fetchUsers(this.props.userId);
    }


    render(){
       
        const {user} = this.props;
        if(!user){
            return null ;
        }

        return <div className = "header">{user.name}</div>
    }

};

// ownProps is a reference to the props of component
const mapStateToProps = (state,ownProps) =>{
    return{ user: state.users.find(user => user.id === ownProps.userId)};
    
};


export default connect(mapStateToProps , {fetchUsers: fetchUsers}) (UserHeader); 