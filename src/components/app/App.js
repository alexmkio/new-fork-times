import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { Header } from '../header/Header';
import { Functions } from '../functions/Functions';
import { List } from '../list/List';
import { Details } from '../details/Details';
import { Error } from '../error/Error';
import { getData } from '../../utils/apiCalls';

export const App = () => {
  let history = useHistory()
  const [articles, setArticles] = useState([])
  const [errorCode, setErrorCode] = useState(0)
  const [sorted, setSorted] = useState(false)

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

  const sortArticles = () => {
    let unsortedArticles = [...articles]
    let sortedArticles = unsortedArticles.sort((a, b) => {
      return new Date(b.updated_date) - new Date(a.updated_date)
    })
    setArticles(sortedArticles)
    setSorted(true)
  }

  const clearSelected = () => {
    setErrorCode(0)
  }

  if (errorCode) history.push("/error")

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' render={() =>
            <>
              <Functions sorted={sorted} sortArticles={sortArticles} />
              <List articles={articles} />
            </>
          }/>

          <Route path='/article/:id' render={({ match }) => {
            let matchingArticle = articles.find(
              article => article.short_url.split("/")[3] === match.params.id
            )

            if (!matchingArticle) {
              return <Error errorCode={'404'} />  
            }
            return <Details article={matchingArticle} />
          }} />

          <Route exact path='/error' render={() =>
            <Error errorCode={errorCode} clearSelected={clearSelected} />
          }/>

          <Route exact path='/404' render={() =>
            <Error errorCode={'404'} clearSelected={clearSelected} />
          }/>
          
          <Redirect to='/404' />
        </Switch>
      </main>
    </>
  )
}