import React, { Component } from 'react'
import '../index.css';

import CreateCharacter from '../components/characters/CreateCharacter'

export default class extends Component {
    render() {
        return (
            <div className='center'>
                <h2>🚀 Character Tracking System</h2>
                <CreateCharacter/>
                <hr/>
            </div>
        )
    }
}