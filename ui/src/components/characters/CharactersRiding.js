import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import DeleteCharacter from './DeleteCharacter'
import UpdateCharacter from './UpdateCharacter'
import Prog from '../../progress/Prog'
import Paper from '@material-ui/core/Paper'

export default class extends Component {
    charactersQuery = gql`
      {
        users {
            name
            email
            id
            about

        }
     }
    `

    render() {
        return (
            <Query query={this.charactersQuery}>
                {({loading, error, data}) => {
                    if (loading) return <Prog/>;
                    if (error) return <p>Error - HA HA HA</p>;


                    return data.users.map(({ name, email, id, about }) => (
                       <Paper class="flex-container">
                        <div key={id}>
                            <h1>{`${name}: ${email}: ${about}`}</h1>
                            <UpdateCharacter id={id} name={name} email={email}  about={about}/>
                            <DeleteCharacter id={id}/>
                        </div>
                       </Paper>
                    ));
                }}
            </Query>
        )
    }
}





