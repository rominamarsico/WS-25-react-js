import { useEffect, useState } from "react"
import "./GetData.css"

export function GetData() {
  const [countryData, setCountryData] = useState(null)

  // array
  const myArray = ["1", "2", "3", 4, 5, 6]
  console.log(myArray[1]) // "2"

  // Object
  const myObject = { a: "1", b: "2", c: [1, 2, 3] }
  console.log(myObject.a) // "1"

  const myJson = [{ a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "3" }]

  useEffect(() => {
    // Dieburg: 49.89738, 8.84613
    // fetch("https://api.open-meteo.com/v1/forecast?latitude=49.89738&longitude=8.84613&hourly=temperature_2m").then(data => console.log("data: ", data));

    // get country data
    fetch("https://restcountries.com/v3.1/name/germany")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("country: ", data);
        setCountryData(data)
      }
      ).catch(error => console.log("error country: ", error))
  }, [])

  if (!countryData) { return }

  return (
    <div className="container">
      <div>
        <span>Country: </span>
        <span>{countryData[0].altSpellings.slice(1).join(", ")}</span>
      </div>
      <div>
        <span>Capital: </span>
        <span>{countryData[0].capital}</span>
      </div>
      <div>
        <span>Languages: </span>
        <span>{Object.values(countryData[0].languages).join(", ")}</span>
      </div>
      <div>
        <span>Flag: </span>
        <span>{countryData[0].flag}</span>
      </div>
    </div>)
}