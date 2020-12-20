/* komponent klasowy */

import React, {Component} from 'react';
import './Users.css';

import UsersList from './UsersList';

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    addUser = (event) => {
        event.preventDefault();
        console.log(this._inputName.value);

        let newUser = {
            id: Date.now(),
            name: this._inputName.value
        }

        

        this.setState((state)=>{
            return({
                users: state.users.concat(newUser)
            });
        })

        this._inputName.value = '';
    
    }

    /* metoda do usuwania uzytkowników z listy */

    removeUser = (userID) => {
        this.setState(state => {
            return({
                users: state.users.filter(user => (user.id !== userID))
            });
        })
    }


    render() {
        return(
            <div className="users-main">
                <h1>User's list</h1>

                <form onSubmit={this.addUser}>
                    <input ref={(element) => {this._inputName = element;}} type="text" placeholder="Enter name" />
                    <button type="submit">Add user</button>
                </form> 

{/* rodzic 'Users.js' przekazuje dziecku 'UsersList.js' prostą tablicę z imionami <UsersList usersList={[{id: 45, name: 'Hans'}, {id: 8767, name: 'Julia'}]} />, którą następnie zamieniamy na stan zamiast statycznej tablicy */}
                <UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />
            </div>
        );
    }
}

export default Users;