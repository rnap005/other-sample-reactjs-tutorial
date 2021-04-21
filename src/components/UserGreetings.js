import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : false
        }
    }

    render() {
            //short circuit operator
        return this.state.isLoggedIn && <div>Welcome Riki</div>
            // ternary condition approach
        // return this.state.isLoggedIn ?(
        //         <div>Welcome Riki</div> ) :
        //     (
        //         <div>Welcome Guest</div>
        //     )

            //element variables
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Riki</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return(
        // <div> {message}</div>
        // )
        // if(this.state.isLoggedIn){
        //     return(
        //         <div> Welcome Riki</div>
        //     )
        // }else{
        //     return(
        //         <div> Welcome Guest</div>
        //     )
        // }


        // return (
        //     <div>
        //       <div>  Welcome Riki </div> 
        //       <div>  Welcome Guest </div> 
        //     </div>
        // )
    }
}

export default UserGreetings
