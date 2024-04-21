import React from 'react';

function MainPage({user}) {
    return <h1>Добро пожаловать {user.name} {user.lastname}, мы тебя ждали</h1>;
}

export default MainPage;