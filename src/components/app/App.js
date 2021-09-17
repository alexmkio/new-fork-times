import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../header/Header';
import { List } from '../list/List';
import { Error } from '../error/Error';

export const App = () => {
  
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' render={() =>
            <List /> 
          }/>

          <Route exact path='/error' render={() =>
            <Error />
          }/>
          
          <Redirect to='/error' />
        </Switch>
      </main>
    </>
  )
}