import React from 'react'
import Person from './Person'
function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 25,
            skill: 'Python'
        },
        {
            id: 2,
            name: 'Clark',
            age: 27,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diane',
            age: 24,
            skill: 'Vue'
        }]
    const personList = persons.map(person => <Person key= {person.id} person = {person}/>)
    return <div> { personList}</div>
}

export default NameList