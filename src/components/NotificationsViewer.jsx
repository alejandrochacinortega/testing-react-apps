import React from 'react';
import NotificationsService from '../services/NotificationsService';


export default class extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            count: -1
        }
    }

    async componentDidMount() {
        let { count } = await NotificationsService.getNotifications()
        this.setState({
            count
        })
    }



    render() {
        return (
            <section className="mt-3 mtb-2">
                <div className="notifications">
                    {this.state.count != -1 ? `${this.state.count} Notifications awaiting` : 'Loading'}
                </div>
            </section>
        )
    }
}