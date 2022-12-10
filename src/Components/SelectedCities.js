import CitySelection from "./CitySelection"

const SelectedCities = ({city}) => {
    return (
        <div style={{border: "solid 1px black", margin: "5px", textAlign: "left", padding: "5px", backgroundColor: "gray"}}>
            <div>{city.name}</div>
            <div>{city.temp}</div>
        </div>
    )
}

export default SelectedCities;