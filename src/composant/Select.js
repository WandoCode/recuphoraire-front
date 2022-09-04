function Select(props) {
  const orderedNames = props.names.sort()

  const options = orderedNames.map((name) => {
    return (
      <option value={name} key={name}>
        {name}
      </option>
    )
  })

  return (
    <div className="container col-lg-2 mb-4">
      <select
        className="form-select"
        name="techno"
        id="techno"
        onChange={(e) => props.getName(e.target.value)}
        defaultValue="default"
      >
        <option disabled={true} value="default">
          Technologue
        </option>
        {options}
      </select>
    </div>
  )
}

export default Select
