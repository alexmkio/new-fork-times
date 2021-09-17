import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../header/Header';
import { List } from '../list/List';
import { Details } from '../details/Details';
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

          <Route path='/:id' render={({ match }) => {
            let matchingArticle = articles.find(
              article => article.short_url.split("/")[3] === match.params.id
            )

            if (!matchingArticle) {
              return <Error errorCode={'404'} />  
            }
            return <Details article={matchingArticle} />
          }} />

          <Route exact path='/error' render={() =>
            <Error errorCode={errorCode} />
          }/>
          
          <Redirect to='/error' />
        </Switch>
      </main>
    </>
  )
}