import "./filterbar.css";
import React, { useState }from 'react';
function FilterBar(){
    const [sousmenu, setSousmenu] = useState(false);
    const handleSelect = (e) => {
        console.log(e.target.value);
        setSousmenu(!sousmenu);
        return(
            <select className="filter">
                <option value="1945">{e.target.value}</option>
                <option value="1955">1955</option>
            </select>
        )
    }
    return(
        <>
        <div className='filter-container'>
            <h4>Filter Bar</h4>
            <select className="filter" onChange={handleSelect}>
                <option value="id">Id</option>
                <option value="photo">photo</option>
                <option value="annee">année</option>
                <option value="localite">localite</option>
                <option value="region">region</option>
                <option value="pays">pays</option>
            </select>
        </div>
        </>
    )
}
export default FilterBar;