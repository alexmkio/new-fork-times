import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { Header } from '../header/Header';
import { Functions } from '../functions/Functions';
import { List } from '../list/List';
import { Details } from '../details/Details';
import { Error } from '../error/Error';
import { getData } from '../../utils/apiCalls';
import {
  sortByPublishedAsc,
  sortByPublishedDesc,
  sortByUpdatedAsc,
  sortByUpdatedDesc
} from '../../utils/utils';

export const App = () => {
  let history = useHistory()
  const [articles, setArticles] = useState([])
  const [errorCode, setErrorCode] = useState(0)
  const [sorted, setSorted] = useState({
    published_asc: false,
    published_desc: false,
    updated_asc: false,
    updated_desc: false,
  })

  const fetchAndCleanData = async (section) => {
    try {
      let fetched = await getData(section)
      setArticles(sortByPublishedDesc(fetched.results))
      setSorted({
        published_asc: false,
        published_desc: true,
        updated_asc: false,
        updated_desc: false,
      })
    } catch (error) {
      setErrorCode(Number(error.message))
    }
  }

  useEffect(() => {
    fetchAndCleanData('home')
  }, [])

  const sortArticles = (event) => {
    if (event === 'pubAsc') {
      setArticles(sortByPublishedAsc(articles))
      setSorted({
        published_asc: true,
        published_desc: false,
        updated_asc: false,
        updated_desc: false,
      })
    }
    if (event === 'pubDesc') {
      setArticles(sortByPublishedDesc(articles))
      setSorted({
        published_asc: false,
        published_desc: true,
        updated_asc: false,
        updated_desc: false,
      })
    }
    if (event === 'upAsc') {
      setArticles(sortByUpdatedAsc(articles))
      setSorted({
        published_asc: false,
        published_desc: false,
        updated_asc: true,
        updated_desc: false,
      })
    }
    if (event === 'upDesc') {
      setArticles(sortByUpdatedDesc(articles))
      setSorted({
        published_asc: false,
        published_desc: false,
        updated_asc: false,
        updated_desc: true,
      })
    }
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