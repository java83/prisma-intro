
import React, { Component } from 'react'

// import RidingCharacters from '../components/Items/RidingCharacters'
import CharactersRiding from '../components/characters/CharactersRiding'

export default class extends Component {
    render() {
        return (
            <div>
                <h2>🚀 Item Tracking System 🚀</h2>
                <hr/>
                {/*<RidingCharacters/>*/}
                <CharactersRiding/>
            </div>
        )
    }
}