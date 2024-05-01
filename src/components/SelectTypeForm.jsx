function SelectTypeForm({selectedOption, setSelectedOption}) {
  // Write code here...

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" value={selectedOption} onChange={(e) =>setSelectedOption(e.target.value) }>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
