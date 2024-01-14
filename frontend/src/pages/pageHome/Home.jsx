import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import DateFormatCell from "../../components/utils/DateFormatCell";
import ModaleDescriptionById from "../../components/descriptionById/ModaleDescriptionById";
import "./pagehome.css";
function Home() {
    const [dispositifs, setDispositifs] = useState([]);
    const [idOneDispositif, setIdOneDispositif] = useState();
    const [isOneVisible, setIsOneVisible] = useState(false);
    const getDispositifs = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/dispositifs`);
            setDispositifs(response.data);
            dispositifs.sort( function compare(a, b){
                if (parseInt(a.id_dispositif,10) > parseInt(b.id_dispositif,10))
                    return -1;
                if (parseInt(a.id_dispositif,10) < parseInt(b.id_dispositif,10))
                    return 1;
                return 0;                  
            });
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() =>{
        getDispositifs();
    },[])
    console.log("DISPOSITIFS ",dispositifs);
    const handleSelectOne = (item) =>{
        setIdOneDispositif(item);
        setIsOneVisible(true)
    }
    return(
        <>
        <section className="cell-container">
            <section className="stamp-line">
                <p className="cell-id">id</p>
                <p className="cell-info" >Marque</p>
                <p className="cell-info" >Modèle</p>
                <p className="cell-info" >Référence</p>
                <p className="cell-label-boolean">Utilis</p>
                <p className="cell-label-boolean">Erreur</p>
                <p className="cell-info" >Reservé par</p>
                <p className="cell-info" ></p>
                <p className="cell-date">Date début</p>
                <p className="cell-date">Date retour</p>
            </section>
            <section className="cell-line-container" >
                {dispositifs && dispositifs.map((el) =>{
                return(
                    <section className="cell-line" onClick={() => handleSelectOne(el.id_dispositif)} key={el.id_dispositif}>
                        <p className="cell-id" placeholder="?">{el.id_dispositif}</p>
                        <p className="cell-info">{el.brand}</p>
                        <p className="cell-info">{el.model}</p>
                        <a className="cell-info">{el.ref_dispositif}</a>
                        <p className={(el.reserve_dispositif ? 'cell-boolean-oui' : 'cell-boolean')}>{el.reserve_dispositif}</p>
                        <p className={(el.error_dispositif? 'cell-boolean oui' : 'cell-boolean')}>{el.error_dispositif}</p>
                        <a className="cell-info">{el.firstname}</a>
                        <a className="cell-info">{el.lastname}</a>
                        <p className="cell-date" placeholder="-- -- --">{el.debut_dispositif ? DateFormatCell(el.debut_dispositif):"-- -- --"}</p>
                        <p className="cell-date" placeholder="-- -- --">{el.retour_dispositif ? DateFormatCell(el.retour_dispositif):"-- -- --"}</p>
                    </section>
                )})}
            </section> 
        </section>
        { isOneVisible ? <ModaleDescriptionById idOneDispositif={idOneDispositif} setIsOneVisible={setIsOneVisible} isOneVisible={isOneVisible} /> : null }
        </>
    )
}

export default Home;