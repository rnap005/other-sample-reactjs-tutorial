import React from 'react'

// function Greet() {
//     return <h1> Hi Riki!</h1>
// }

// ES6 format
const Greet = props => { 
    //this is sample of destructuring extracting props
   const {name, heroName} = props
return (
    <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
     
    </div>
)
}

// Export name, cannot change the name Greet in the App.js
// export const Greet = () => <h1>Hello Demi</h1>

export default Greet