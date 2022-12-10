import {useState} from "react";
import "./CityWeatherDetailHeader.css";

const CityWeatherDetailHeader = ({detailCity, cities, setCities}) => {
    const checkIsCityFavourite = (cities, detailCity) => {
        return cities.favourites.filter(city => city.name === detailCity.name).length > 0;
    }
    const [isFavourite, setIsFavourite] = useState(checkIsCityFavourite(cities, detailCity));

    const handleClick = (e) => {
        console.log(cities);
        e.preventDefault();
        if(isFavourite) {
            setCities({
                selected: cities.selected,
                favourites: cities.favourites.filter(city => city.name !== detailCity.name)
            })
            setIsFavourite(false);
        }
        else {
            setCities({
                selected: cities.selected,
                favourites: [...cities.favourites, detailCity]
            })
            setIsFavourite(true);
        }
    }

    const imageSource = isFavourite? "favourite-selected.png" : "favourite-unselected.png";

    return (
        <div className='city-weather-detail-header'>
            <h3 className="city-head">{detailCity.name}</h3>
            <div className="favourite-icon" onClick={handleClick}>
                <img   className='img-favourite' src={imageSource}/>
            </div>
        </div>
    )
}

export default CityWeatherDetailHeader;