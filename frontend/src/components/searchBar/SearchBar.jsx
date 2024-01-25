import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./searchbar.css";
function SearchBar (props) {
    const {setSearchAnnee, setSearchLocalite, setSearchRegion, setSearchPays} = props;
    const [ localite, setLocalite ] = useState("");
    const [ menuLocalite, setMenuLocalite ] = useState(false);
    const [ menuRegion, setMenuRegion ] = useState(false);
    const [ menuPays, setMenuPays ] = useState(false);

    const getLocalite = async () =>{
        try{
        const response = await axios.get(`http://localhost:5000/api/localite-total`);
            setLocalite(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() =>{
        getLocalite();
    },[]);
    const handleSelectLocalite = () =>{
        setMenuRegion(false);
        setMenuPays(false);
        setMenuLocalite(!menuLocalite);
    }
    const handleMenuLocalite = (e) =>{
        const selected = e.target.textContent;
        setSearchLocalite(selected);
        setMenuLocalite(!menuLocalite);
    }
    const handleSelectRegion = () =>{
        setMenuLocalite(false);
        setMenuPays(false);
        setMenuRegion(!menuRegion);
    }
    const handleMenuRegion = (e) =>{
        const selected = e.target.textContent;
        setSearchRegion(selected);
        setMenuRegion(!menuRegion);
    }
    const handleSelectPays = () =>{
        setMenuLocalite(false);
        setMenuRegion(false);
        setMenuPays(!menuPays);
    }
    const handleMenuPays = (e) =>{
        const selected = e.target.textContent;
        setSearchPays(selected);
        setMenuPays(!menuPays);
    }
    const handleSelectAnnule = () =>{
        setMenuLocalite(false);
        setMenuRegion(false);
        setMenuPays(false);
        setSearchLocalite("");
        setSearchRegion("");
        setSearchPays("");
    }
    return (
        <section className="menuList-container">
            <p>Filtrer par :</p>
            <button className="menu-button" type="button" onClick={handleSelectLocalite}>localite</button>
            <ul className="menu-list">
            {menuLocalite && localite.map((el) =>{
                return(
                    <li className="menu-line" key={el.idlocalite} onClick={handleMenuLocalite}>{el.nomlocalite}</li>
                )
            })}
            </ul>
            <button className="menu-button" type="button" onClick={handleSelectRegion}>region</button>
            <ul className="menu-list-region">
            {menuRegion && localite.map((el) =>{
                return(
                    <li className="menu-line" key={el.idregion} onClick={handleMenuRegion}>{el.nomregion}</li>
                )
            })}
            </ul>
            <button className="menu-button" type="button" onClick={handleSelectPays}>pays</button>
            <ul className="menu-list-pays">
            {menuPays && localite.map((el) =>{
                return(
                    <li className="menu-line" key={el.idpays} onClick={handleMenuPays}>{el.nompays}</li>
                )
            })}
            </ul>
            <button className="menu-button" type="button" onClick={handleSelectAnnule}>annule</button>
        </section>
    )
}
export default SearchBar;