const Entry = ({ person, deleteEntry }) => (
    <li>
        {person.name} {person.number} <button onClick={deleteEntry}>delete</button>
    </li>
)

const PhonebookEntries = ({ persons, filter, deleteEntry }) => {
    const filteredEntries = persons.filter(person => (
        person.name.toLowerCase().startsWith(filter.toLowerCase())
    ))

    return (
        <ul>
            {filteredEntries.map(person => (
                <Entry
                    key={person.name}
                    person={person}
                    deleteEntry={() => deleteEntry(person.id)}
                />
            ))}
        </ul>
    )
}

export default PhonebookEntries