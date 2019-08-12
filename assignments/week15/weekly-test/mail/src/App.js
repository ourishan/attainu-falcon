import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import MailList from './MailList'

const routes = [
  {
    path: '/inbox',
    component: MailList,
    category: "Inbox"
  },
  {
    path: '/sent',
    component: MailList,
    category: "Sent"
  },
  {
    path: '/drafts',
    component: MailList,
    category: "Drafts"
  },
  {
    path: '/trash',
    component: MailList,
    category: "Trash"
  }
]




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h4>Web Mail</h4>
        </header>
        <nav>
          <ul>
            <Link to={'/inbox'}><li>Inbox</li></Link>
            <Link to={'/sent'}><li>Sent</li></Link>
            <Link to={'/drafts'}><li>Drafts</li></Link>
            <Link to={'/trash'}><li>Trash</li></Link>
          </ul>
        </nav>{/*<!--
     -->*/}<main>

          <table>
            <thead>
              <tr>
                <th>From</th>
                <th>Subject</th>
                <th>Date</th>
              </tr>
            </thead>
            <Switch>
              {routes.map(({ path, component: Component, category }) => (
                <Route
                  path={path}
                  render={_ => <Component category={category} />}
                />
              ))}
            </Switch>
          </table>

          <footer>
            <div id="advrt">
              <p>Advertisements.</p>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
