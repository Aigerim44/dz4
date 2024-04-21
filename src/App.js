import React, { useState, useEffect } from 'react';
import MainPage from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/errorPage/ErrorPage";



function App() {
  const [user, setUser] = useState({ name: '', lastname: '' });
  const [page, setPage] = useState('');


  useEffect(() => {
    const name = prompt("Введите ваше имя:");
    const lastname = prompt("Введите вашу фамилию:");

    if (name === 'John' && lastname === 'Johns') {
      setUser({ name, lastname });
      setPage('main');
    } else {
      setUser({ name, lastname });
      setPage('error');
    }
  }, []);
  return (
      <div>
        {page === 'main' ? (
            <MainPage user={user} />
        ) : (
            <ErrorPage user={user} />
        )}
      </div>
  );
}
export default App;

