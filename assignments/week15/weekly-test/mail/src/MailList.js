import React from 'react'


export default class MailList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mails: [] }
    }
    componentDidUpdate() {
        fetch('https://raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/assignments/data/mail.json')
            .then(r => r.json())
            .then(mails => this.setState({ mails: mails.filter(mail => mail.category === this.props.category).map(item => item.mail) }))
    }
    render() {
        return (
            <tbody>
                {this.state.mails.map(mail => <tr><td>Sender</td><td>{mail}</td><td>dd-mm-yy</td></tr>)}
            </tbody>
        )
    }
}
