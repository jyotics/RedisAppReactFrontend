import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';

import axios from 'axios';

const User = props => (
    <tr>
        <td>{props.user.firstname}</td>
        <td>{props.user.lastname}</td>
        <td>{props.user.email}</td>
        <td>{props.user.created_date}</td>

    </tr>
)

export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost/ci/welcome/get_user')
            .then(response => {
                this.setState({users: response.data});
                this.setState({datavalues:{
    columns: [
      {
        label: 'First Name',
        field: 'firstname',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Last Name',
        field: 'lastname',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Phone Number',
        field: 'phone_number',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Created Date',
        field: 'created_date',
        sort: 'asc',
        width: 150
      }
    ],
    rows:response.data
    
  }})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    userList() {
        return this.state.users.map(function(currentUser, i) {
            return <User user={currentUser} key={i} />;
        });
    }

    render() {
        return (
        <div className="container">
            <MDBDataTable
      striped
      bordered
      small
      data={this.state.datavalues}
    /></div>



            
        )
    }
}