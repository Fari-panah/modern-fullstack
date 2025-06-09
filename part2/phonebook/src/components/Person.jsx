const Person = ({name, number, handleRemovePerson}) => {
    return (
        <p key={name}>
    {name} {number}
    <button onClick={handleRemovePerson}>delete</button>
</p>

    )

}
export default Person