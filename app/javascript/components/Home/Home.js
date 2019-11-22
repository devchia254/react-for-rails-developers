import React, { Component } from 'react'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            course_modules: [
                {id: 1, title: '1. Setting up a new Ruby on Rails App with React', description: 'lorem ipsum', active: false},
                {id: 2, title: '2. Adding React to an existing Rails App', description: 'lorem ipsum', active: false},
                {id: 3, title: '3. Building a Hello World App', description: 'lorem ipsum', active: false},
                {id: 4, title: '4. Adding Router DOM to your App', description: 'lorem ipsum', active: false}
            ]
        }
    }

    render(){
        return(
            <div>This is our Home Component</div>
        )
    }
}

export default Home