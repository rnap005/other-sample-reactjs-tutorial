import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
                {person.id}. I am {person.name}. My age is {person.age} years old. I know {person.skill}
            </h2>
        </div>
    )
}

export default Person
