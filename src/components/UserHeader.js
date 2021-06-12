import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions'



class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUsers(this.props.userId);
    }


    render(){
        return <div>User UserHeader</div>
    }

};


export default connect(null , {fetchUsers: fetchUsers}) (UserHeader); 