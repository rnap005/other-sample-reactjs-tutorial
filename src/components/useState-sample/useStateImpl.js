import React, { useState } from 'react'
import {persons} from '../useState-sample/data'
const useStateImpl = () => {
    const [people, setPeople] = useState(persons)

    const removeItem = (id) =>{
        const newPeople = people.filter((people) => people.id !== id)
        setPeople(newPeople)
    }
    return (
        <div>
        <h1>asdas</h1>
         {people.map((people) => {
             const {id, name, skill} = people
             return(
                 <div key={id}>
                    <h4>{name}</h4>
                    <h5>{skill}</h5>
                    <button onClick={() => removeItem(id)}>Remove Item</button>
                 </div>
             )
         })}
        <button onClick={() => setPeople([])}> Clear all</button>   
        </div>
    )
}

export default useStateImpl
