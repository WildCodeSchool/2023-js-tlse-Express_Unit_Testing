import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./onecarte.css";
function OneCarte(props) {
    const { id_oneCarte, setOneCarteVisible, oneCarteVisible} = props;
    console.log(id_oneCarte,"  ",`http://localhost:5000/api/base/${id_oneCarte}`);

    const [carte, setCarte] = useState([]);
    const getOneCarte = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/api/base-total/${id_oneCarte}`);
            setCarte(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() =>{
        getOneCarte();
    },[]);
    carte && console.log("CARTE __ : ",carte);
    const handleClick = () => {
        setOneCarteVisible(!oneCarteVisible);
    }
    return(
        <>
            <h3>One carte</h3>
            <button type="button" onClick={handleClick}>Retour</button>
        </>
    )
}
export default OneCarte;