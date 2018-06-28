import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

export default class extends Component {
    state = {
        name: "",
        email: "",
        about: ""
    }
    createUserMutation = gql`
        mutation createUser($name: String!, $email: String!, $about: String!) {
            createUser(data: {name: $name, email: $email, about: $about }) {
                id
                name
                email
                about
            }
        }
    `;

    render () {
        return (
            <Mutation mutation={this.createUserMutation}>
                {(createUser, {data}) => (
                    <div>
                        <form onSubmit={event => {
                            event.preventDefault()
                            createUser({variables: {
                                    name: this.state.name,
                                    email: this.state.email,
                                    about: this.state.about
                                }})
                            window.location.reload(true)
                        }}>
                            <input type="type" placeholder="Name"
                                   onChange={event => this.setState({name: event.target.value})}/>
                            <input type="type" placeholder="email"
                                   onChange={event => this.setState({email: event.target.value})}/>
                            <input type="type" placeholder="About"
                                   onChange={event => this.setState({about: event.target.value})}/>
                            <input type="submit"/>

                        </form>
                    </div>
                )}
            </Mutation>
        )
    }
}