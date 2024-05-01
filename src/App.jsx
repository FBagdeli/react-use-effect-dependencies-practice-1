import { useState , useEffect} from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('')
  console.log({ data });

  useEffect(() => {
    if(selectedOption === 'people'){
      fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(setData)
      return
    } else if(selectedOption === 'planets'){
      fetch('https://swapi.dev/api/planets')
        .then(response => response.json())
        .then(setData)
      return
    } else if(selectedOption === 'starships'){
      fetch('https://swapi.dev/api/starships')
        .then(response => response.json())
        .then(setData)
      return
    }
  }, [selectedOption])
  // Write code here.
  //

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} value = {selectedOption} setSelectedOption={setSelectedOption}/>
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
