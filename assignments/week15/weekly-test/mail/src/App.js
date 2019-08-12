import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import './App.css';
async function getMails(category) {
  return await fetch('https://raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/assignments/data/mail.json').then(r => r.json()).then(i => i.filter(i => i.category === category).map(i => <tr><td>Sender</td><td>i.mail</td><td>dd-mm-yy</td></tr>))
}
(async _ => console.log(await getMails("Inbox")))()
class App extends React.Component {
  constructor(props) {
    super((props))
    this.state = {
      mails: []
    }
    this.getMails = this.getMails.bind(this)
  }
  getMails(category) {
    fetch('https://raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/assignments/data/mail.json')
      .then(r => r.json())
      .then(mails => this.setState({ mails: mails.filter(mail => mail.category === category) }))
  }
  // <tr><td>Sender</td><td>i.mail</td><td>dd-mm-yy</td></tr>
  render() {
    let mail = this.state.mails.map(item=><tr><td>item.mail</td></tr>)
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
            <tbody>
              <Switch>
                <Route path='/inbox' render={(this.state.mails) => <tr></tr>} />
              </Switch>
            </tbody>
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
