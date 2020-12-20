/* komponent funkcyjny */

import React from 'react';
import './UsersList.css';

/* poprzez propsy przekazujemy dane od rodzica "Users.js", pobieramy to do zmiennej,zeby móc na tym operować.
metoda map pozwala przeiterować po wszystkich elementach tablicy (users), modyfikując je i tworząc nową tablicę  */

function UsersList(props) {

    let usersList = props.usersList;

    /* jezeli jest tylko jeden parametr 'user' w tym przypadku, to mozna usunąć nawiasy. jezeli jest tylko jedno 'return' tez mozna je pominąć, więc funkcja nie będzie wyglądała tak:
        let usersLiElements = usersList.map((user) => {
        return <li>{user} <span>x</span></li>
     */
    let usersLiElements = usersList.map(user => 
    <li key={user.id}>{user.name} <span onClick={() => props.removeUserMethod(user.id)}>x</span></li>
    );
    

    return(
        <ul className="the-list">
            {usersLiElements}
        </ul>
    );
}

export default UsersList;