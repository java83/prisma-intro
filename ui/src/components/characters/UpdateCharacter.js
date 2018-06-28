import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class extends Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        email: this.props.email,
        about: this.props.about,
        isUpdating: false,
        buttonText: "Update"
    }
    updateUserMutation = gql`
        mutation updateUser($id: ID!, $name: String!, $email: String!, $about: String) {
            updateUser (
                where: {id: $id},
                data: {name: $name, email: $email, about: $about}
            ) {
                id
                name
                email
                about
            }
        }
    `
    updateComp = () => {
     return (
         <Fragment>
             <input type="text" value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>
             <input type="text" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
             {/*<input type="type" value={this.state.id} onChange={event => this.setState({id: event.target.value})}/>*/}
             <input type="text" value={this.state.about} placeholder="about" onChange={event => this.setState({about: event.target.value})}/>
         </Fragment>
     )
 }
    render () {
        const update = this.updateComp()
        return (
            <Mutation mutation={this.updateUserMutation}>
                {(updateUser, {data}) => (
                    <form onSubmit={event => {
                        event.preventDefault()
                        if(this.state.isUpdating){
                            updateUser({
                                variables: {
                                    id: this.state.id,
                                    name: this.state.name,
                                    email: this.state.email,
                                    about: this.state.about,
                                }
                            })
                            this.setState({buttonText: "Update"})
                            // window.location.reload(true)
                        }else {
                            this.setState({buttonText: "Submit"})
                        }
                        this.setState({isUpdating: !this.state.isUpdating })
                    }}>
                        {this.state.isUpdating ? update : null}
                        <input type="submit" value={this.state.buttonText}/>
                    </form>
                )}
            </Mutation>
        )
    }
}