import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import OneCarte from "../../components/oneCarte/OneCarte";
import hautBas from '../../Public/hautBas.png';
import "./pagehome.css";
function Home() {
    const [ cartes, setCartes] = useState([]);
    const [ id_select, setId_select] = useState();
    const [ oneCarteVisible, setOneCarteVisible] = useState(false);
    const [ sortToggleById, setSortToggleById] = useState(false);
    const [ sortToggleByAnnee, setSortToggleByAnnee ] = useState(false);
    const [ sortToggleByLocalite, setSortToggleByLocalite ] = useState(false);
    const [ sortToggleByRegion, setSortToggleByRegion ] = useState(false);
        const getCartes = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/api/base-total`);
            setCartes(response.data);
            
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() =>{
        getCartes();
    },[]);
    const handleSortId = () =>{
            setSortToggleById(!sortToggleById);
            if(sortToggleById){
            cartes.sort( function compare(a, b){
                if (parseInt(a.idbase,10) > parseInt(b.idbase,10))
                    return -1;
                if (parseInt(a.idbase,10) < parseInt(b.idbase,10))
                    return 1;
                return 0;                  
                });
            } else {
            cartes.sort( function compare(a, b){
                if (parseInt(a.idbase,10) < parseInt(b.idbase,10))
                    return -1;
                if (parseInt(a.idbase,10) > parseInt(b.idbase,10))
                    return 1;
                return 0;                  
                });
            }
        }
    const handleSortAnnee = () =>{
            setSortToggleByAnnee(!sortToggleByAnnee);
            if(sortToggleByAnnee){
            cartes.sort( function compare(a, b){
                if (parseInt(a.annee,10) > parseInt(b.annee,10))
                    return -1;
                if (parseInt(a.annee,10) < parseInt(b.annee,10))
                    return 1;
                return 0;                  
                });
            } else {
            cartes.sort( function compare(a, b){
                if (parseInt(a.annee,10) < parseInt(b.annee,10))
                    return -1;
                if (parseInt(a.annee,10) > parseInt(b.annee,10))
                    return 1;
                return 0;                  
                });
            }
        }
    const handleSortLocalite = () =>{
        setSortToggleByLocalite(!sortToggleByLocalite);
            if(sortToggleByLocalite){
            cartes.sort( function compare(a, b){
                if (a.nomlocalite.toLowerCase() > b.nomlocalite.toLowerCase())
                    return -1;
                if (a.nomlocalite.toLowerCase() < b.nomlocalite.toLowerCase())
                    return 1;
                return 0;                  
                });
            } else {
            cartes.sort( function compare(a, b){
                if (a.nomlocalite.toLowerCase() < b.nomlocalite.toLowerCase())
                    return -1;
                if (a.nomlocalite.toLowerCase() > b.nomlocalite.toLowerCase())
                    return 1;
                return 0;                  
                });
            }

    }
    const handleSortRegion = () =>{
        setSortToggleByRegion(!sortToggleByRegion);
            if(sortToggleByRegion){
            cartes.sort( function compare(a, b){
                if (a.nomregion.toLowerCase() > b.nomregion.toLowerCase())
                    return -1;
                if (a.nomregion.toLowerCase() < b.nomregion.toLowerCase())
                    return 1;
                return 0;                  
                });
            } else {
            cartes.sort( function compare(a, b){
                if (a.nomregion.toLowerCase() < b.nomregion.toLowerCase())
                    return -1;
                    if (a.nomregion.toLowerCase() > b.nomregion.toLowerCase())
                    return 1;
                return 0;                  
                });
            }

    }
    const handleClick = (el) => {
        setId_select(el);
        setOneCarteVisible(true);
    }

    return(
        <>
        <section className="cell-container">
            <section className="stamp-line">
                <p className="cell-id" onClick={handleSortId}>id</p>
                <p className="cell-info-carte" >Carte</p>
                <p className="cell-info-annee" onClick={handleSortAnnee}>Année</p>
                <p className="cell-label-boolean">couleur</p>
                <p className="cell-label-boolean">ville</p>
                <p className="cell-label-boolean">nature</p>
                <p className="cell-label-boolean">montagne</p>
                <p className="cell-label-boolean">mer</p>
                <p className="cell-label-boolean">personne</p>
                <p className="cell-label-boolean">animal</p>
                <p className="cell-label-boolean">ete</p>
                <p className="cell-label-boolean">automne</p>
                <p className="cell-label-boolean">hiver</p>
                <p className="cell-label-boolean">printemps</p>
                <p className="cell-info" onClick={handleSortLocalite}>Localite</p>
                <p className="cell-info" onClick={handleSortRegion}>Région</p>
                <p className="cell-info" onClick={handleSortRegion}>Pays</p>
            </section>
            <section className="cell-line-container" >
                {cartes && cartes.map((el) =>{
                return(
                    <section className="cell-line" key={el.idbase} onClick={() => handleClick(el.idbase)}>
                        <p className="cell-id" placeholder="?">{el.idbase}</p>
                        <p className="cell-info">{el.cartes}</p>
                        <p className="cell-info-annee">{el.annee}</p>
                        <p className={(el.couleur ? 'cell-boolean-oui' : 'cell-boolean')}>{el.couleur}</p>
                        <p className={(el.ville ? 'cell-boolean-oui' : 'cell-boolean')}>{el.ville}</p>
                        <p className={(el.campagne ? 'cell-boolean-oui' : 'cell-boolean')}>{el.campagne}</p>
                        <p className={(el.mer ? 'cell-boolean-oui' : 'cell-boolean')}>{el.mer}</p>
                        <p className={(el.montagne ? 'cell-boolean-oui' : 'cell-boolean')}>{el.montagne}</p>
                        <p className={(el.personnes ? 'cell-boolean-oui' : 'cell-boolean')}>{el.personnes}</p>
                        <p className={(el.animaux ? 'cell-boolean-oui' : 'cell-boolean')}>{el.animaux}</p>
                        <p className={(el.ete ? 'cell-boolean-oui' : 'cell-boolean')}>{el.ete}</p>
                        <p className={(el.automne ? 'cell-boolean-oui' : 'cell-boolean')}>{el.automne}</p>
                        <p className={(el.hiver ? 'cell-boolean-oui' : 'cell-boolean')}>{el.hiver}</p>
                        <p className={(el.printemps ? 'cell-boolean-oui' : 'cell-boolean')}>{el.printemps}</p>
                        <p className="cell-info">{el.nomlocalite}</p>
                        <p className="cell-info">{el.nomregion}</p>
                        <p className="cell-info">{el.nompays}</p>
                    </section>
                )})}
            </section> 
        </section>
        {oneCarteVisible? <OneCarte id_oneCarte={id_select} setOneCarteVisible={setOneCarteVisible} oneCarteVisible={oneCarteVisible} /> : null}
        </>
    )
}

export default Home;