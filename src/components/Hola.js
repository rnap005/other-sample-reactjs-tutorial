import React from 'react'

const Hola = () =>{
    //this approach is with jsx
    // return(
    //     <div>
    //         <h1>Hola Riki</h1>
    //     </div>
    // )

    // without jsx
    return React.createElement('div', null, React.createElement('h1', null, 'Hola rike'))
}

export default Hola