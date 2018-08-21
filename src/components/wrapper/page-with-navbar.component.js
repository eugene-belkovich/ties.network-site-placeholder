import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Button } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { childrenPropTypes, routerPropTypes } from './../../prop-types'
import { pageWithNavbarSelector } from './page-with-navbar.selector'
import '../../styles/app.css'

const NAVIGATION_LINKS = [
  { to: '/', title: 'Main' },
  { to: '/about', title: 'About' },
  { to: '/404', title: '404' },
]

@connect(pageWithNavbarSelector)
export class PageWithNavbar extends React.Component {
  static propTypes = {
    children: childrenPropTypes.isRequired,
    router: routerPropTypes.isRequired,
  }

  getLinks = () => {
    const { router: { location: { pathname } } } = this.props

    return NAVIGATION_LINKS.map(x => (
      <Link
        key={x.to}
        to={x.to}
        className={pathname === x.to ? 'active-link' : ''}
      >
        <Button
          color="contrast"
        >
          {x.title}
        </Button>
      </Link>
      ))
  }

  render() {
    const { children } = this.props

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            {this.getLinks()}
            <Typography className="flex" type="title" color="inherit">Title</Typography>
          </Toolbar>
        </AppBar>
        <div className="App-intro">
          {children}
        </div>
      </div>
    )
  }
}
