import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message : "hello"
        }
        
        //method 3
    // this.clickHandler = this.clickHandler.bind(this)
     }
    // clickHandler(){
    //     this.setState({
    //         message : "Goodbye"
    //     })
    // }

    //method 4
    clickHandler = () => {
        this.setState({
            message : "Goodbye!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* method 1 <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* method 2 <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
