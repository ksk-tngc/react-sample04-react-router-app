/*
  Component (App)
*/

/* eslint jsx-a11y/anchor-is-valid: off */

// React
import React from 'react'
// CSS
import '../styles.css'
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Component
import { Title } from './Title'
import { Nav } from './Nav'
import { Top } from './Top'
import { Menu1 } from './Menu1'
import { Menu2 } from './Menu2'
import { NotFount } from './NotFount'

// コンポーネント定義
export const App = () => {
  return (
    <div className="container">
      <Router>
        <header>
          <Title />
        </header>

        <nav>
          <Nav />
        </nav>

        <main>
          <Route exact path="/" component={Top}></Route>
          <Route path="/Menu1" component={Menu1}></Route>
          <Route path="/Menu2" component={Menu2}></Route>
          <Route
            path="/Menu3"
            render={() => <NotFount menuId={'Menu3'} />}
          ></Route>
        </main>
      </Router>
    </div>
  )
}
