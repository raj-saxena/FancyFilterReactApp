import React from 'react';
import axios from 'axios';

interface User {
    id: string
    display_name: string
}

interface HomeState {
    users: Array<User>
}

class Home extends React.Component<{}, HomeState> {
    state = {
        users: []
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:8080/api/users')
        this.setState({ users: response.data.users });
    }

    render() {
        const { users } = this.state;
        if (users.length === 0) {
            return <p>Fetching users</p>
        }

        const names = users.map((i: User) => <li key={i.id}>{i.display_name}</li>)

        return (
            <div>
                <ul>{names}</ul>
            </div>)
    }
}

export default Home;