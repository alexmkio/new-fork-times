import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../header/Header';
import { List } from '../list/List';
import { Error } from '../error/Error';
import { getData } from '../../utils/apiCalls';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [errorCode, setErrorCode] = useState(0);

  const fetchAndCleanData = async (section) => {
    try {
      let fetched = await getData(section)
      setArticles(fetched.results)
    } catch (error) {
      setErrorCode(Number(error.message))
    }
  }

  useEffect(() => {
    fetchAndCleanData('home')
  }, [])

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' render={() =>
            <List articles={articles} /> 
          }/>

          <Route exact path='/error' render={() =>
            <Error errorCode={errorCode} />
          }/>
          
          <Redirect to='/error' />
        </Switch>
      </main>
    </>
  )
}