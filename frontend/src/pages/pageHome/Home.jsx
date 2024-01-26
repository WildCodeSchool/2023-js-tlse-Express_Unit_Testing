import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import OneCarte from "../../components/oneCarte/OneCarte";
import SearchBar from "../../components/searchBar/SearchBar";
import { TiHeart } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { TiArrowUnsorted } from "react-icons/ti";
import "./pagehome.css";
function Home() {
    const [ cartes, setCartes] = useState([]);
    const [ id_select, setId_select] = useState();
    const [ oneCarteVisible, setOneCarteVisible] = useState(false);
    const [ sortToggleById, setSortToggleById] = useState(false);
    const [ sortToggleByAnnee, setSortToggleByAnnee ] = useState(false);
    const [ sortToggleByLocalite, setSortToggleByLocalite ] = useState(false);
    const [ sortToggleByRegion, setSortToggleByRegion ] = useState(false);
    const [ searchAnneeDebut, setSearchAnneeDebut ] = useState("");
    const [ searchAnneeFin, setSearchAnneeFin ] = useState("");
    const [ searchLocalite, setSearchLocalite ] = useState("");
    const [ searchRegion, setSearchRegion ] = useState("");
    const [ searchPays, setSearchPays ] = useState("");
    
    const getCartes = async () =>{
        try{
        const response = await axios.get(`http://localhost:5000/api/base-total`);
            setCartes(response.data);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() =>{
        getCartes();
    },[]);
    const handleSortId = (e) =>{
            setSortToggleById(!sortToggleById);
            if(sortToggleById){
                // transformer en flechée =>
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
    const handleSortPays = () =>{
        setSortToggleByPays(!sortToggleByPays);
            if(sortToggleByPays){
            cartes.sort( function compare(a, b){
                if (a.nompays.toLowerCase() > b.nompays.toLowerCase())
                    return -1;
                if (a.nompays.toLowerCase() < b.nompays.toLowerCase())
                    return 1;
                return 0;
            });                  
            } else {
            cartes.sort( function compare(a, b){
                if (a.nompays.toLowerCase() < b.nompays.toLowerCase())
                    return -1;
                    if (a.nompays.toLowerCase() > b.nompays.toLowerCase())
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
            <SearchBar 
                setSearchAnneeDebut={setSearchAnneeDebut}
                searchAnneeDebut={searchAnneeDebut} 
                setSearchAnneeFin={setSearchAnneeFin}
                searchAnneeFin={searchAnneeFin}
                setSearchLocalite={setSearchLocalite} 
                setSearchRegion={setSearchRegion} 
                setSearchPays={setSearchPays} />
            <section className="stamp-line">
                <p className="cell-id" name="idBase">id<TiArrowUnsorted className="stamp-arrows" onClick={handleSortId}/></p>
                <p className="cell-info-carte" >Carte</p>
                <p className="cell-info-annee">Année<TiArrowUnsorted className="stamp-arrows" onClick={handleSortAnnee}/></p>
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
                <p className="cell-info">Localite<TiArrowUnsorted className="stamp-arrows" onClick={handleSortLocalite}/></p>
                <p className="cell-info">Région<TiArrowUnsorted className="stamp-arrows" onClick={handleSortRegion}/></p>
                <p className="cell-info">Pays<TiArrowUnsorted className="stamp-arrows" onClick={handleSortPays}/></p>
                <p className="cell-label-boolean">Favori</p>
            </section>
            <section className="cell-line-container" >
                {cartes && cartes
                .filter((el) => !searchAnneeDebut || (el.annee && (searchAnneeDebut <= el.annee && el.annee <= searchAnneeFin)))
                .filter((el) => !searchLocalite || (el.nomlocalite && el.nomlocalite.toLowerCase() === searchLocalite.toLowerCase()))
                .filter((el) => !searchRegion || (el.nomregion && el.nomregion.toLowerCase() === searchRegion.toLowerCase()))
                .filter((el) => !searchPays || (el.nompays && el.nompays.toLowerCase() === searchPays.toLowerCase()))
                .map((el) =>{
                return(
                    <section className="cell-line" key={el.idbase} onClick={() => handleClick(el.idbase)}>
                        <p className="cell-id" placeholder="?">{el.idbase}</p>
                        <p className="cell-info">{el.cartes}</p>
                        <p className="cell-info-annee">{el.annee}</p>
                        <p className={(el.couleur ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.ville ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.campagne ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.mer ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.montagne ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.personnes ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.animaux ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.ete ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.automne ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.hiver ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className={(el.printemps ? 'cell-boolean-oui' : 'cell-boolean')}><TiTick /></p>
                        <p className="cell-info">{el.nomlocalite}</p>
                        <p className="cell-info">{el.nomregion}</p>
                        <p className="cell-info">{el.nompays}</p>
                        <p className={(el.is_liked ? 'cell-boolean-oui' : 'cell-boolean')}><TiHeart /></p>
                    </section>
                )})}
            </section> 
        </section>
        {oneCarteVisible? <OneCarte id_oneCarte={id_select} setOneCarteVisible={setOneCarteVisible} oneCarteVisible={oneCarteVisible} /> : null}
        </>
    )
}

export default Home;