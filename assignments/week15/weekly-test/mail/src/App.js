import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';

class MailList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mails: [] }
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/assignments/data/mail.json')
      .then(r => r.json())
      .then(mails => this.setState({ mails: mails.filter(mail => mail.category === this.props.category).map(item => item.mail) }))
  }
  render() {
    return (
      <tbody>
        {this.state.mails.map(mail => <tr><td>Sender</td><td>mail</td><td>dd-mm-yy</td></tr>)}
      </tbody>
    )
  }
}

const routes = [
  {
    path: '/inbox',
    component: <MailList category="Inbox" />,
  },
  {
    path: '/sent',
    component: <MailList category="Sent" />,
  },
  {
    path: '/drafts',
    component: <MailList category="Drafts" />,
  },
  {
    path: '/trash',
    component: <MailList category="Trash" />,
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
              {routes.map(({ path, component: Component }) => (
                <Route
                  path={path}
                  render={(props) => <Component {...props} />}
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
