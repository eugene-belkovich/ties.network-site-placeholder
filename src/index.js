import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import reducers from './reducers'
import { Main } from './routes'
import './styles/index.css'

const history = createHistory()
const reduxRouterMiddleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    // ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(thunk, reduxRouterMiddleware),
)

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
)
