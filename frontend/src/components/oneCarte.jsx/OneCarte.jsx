import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./onecarte.css";
import iconeCoeur from "../../../Public/coeur-trait.png";
function OneCarte(props) {
    const [personne, setPersonne] = useState()
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
    const handleRetourCarte = () => {
        setOneCarteVisible(!oneCarteVisible);
    }
    const handleNewCarte = () => {
        console.log("handleNewCarte");
    }
    const handlePhoto = () =>{
        console.log("handlePhoto");
    }
    const handleModifyDescriptif = () => {
        console.log("handleModifyDescriptif");
    }
    const handleModifyCommentaire = () =>{
        console.log("handleModifyCommentaire");
    }
    const handleModifyAttrib = () =>{
        console.log("handleModifyAttrib");
    }
    const handleVisitUrl = () =>{
        console.log("handleVisitUrl ");
    }
    
    return(
        <>
            <div className='carte-container'>
                <div className='carte-form'>
                    <section className='photo-container'>
                        <img src="" className='carte-photo' onClick={handlePhoto} placeholder='Photo' />
                    </section>
                    <section className='modif-descriptif'>
                        <button type="button" className='modif-button' onClick={handleModifyDescriptif}>Modifier le descriptif</button>
                    </section>
                    <section className='carte-descriptif'>
                        <span className='carte-favoris'>
                            <p className='carte-libelle'>Ajouter aux favoris</p>
                            <img src={iconeCoeur} className="icone-coeur" placeholder='+' />
                        </span>
                        <ul className='descriptif-liste'>
                            <li className='carte-libelle'>
                                <label>Année</label><p>{carte.annee}</p>
                            </li>
                            <li className='carte-libelle'>
                                <label>Localité</label><p>{carte.localite}</p>
                            </li>
                            <li className='carte-libelle'>
                                <label>Région</label><p>{carte.region}</p>
                            </li>
                            <li className='carte-libelle'>
                                <label>Pays</label><p>{carte.pays}</p>
                            </li>
                        </ul>
                        <span className='descriptif-url'>
                            <p className='carte-libelle'>URL</p>
                            <p className='carte-libelle'>{carte.commenturl}</p>
                            <button type="button" className='button-visitez' onClick={handleVisitUrl}>Visitez le site</button>
                        </span>
                    </section>
                    <section className='attrib-form'> 
                        <span className='modif-attrib'>
                            <button type="button" className='modif-button' onClick={handleModifyAttrib}>Modifier les attributs</button>
                        </span>
                        <ul className='attrib-liste'>
                            <li className="attrib-ligne">
                                <label className={carte.personne? "on" : "off"}>personnes</label> 
                            </li>
                            <li className="attrib-ligne">
                                <label className={carte.animaux? "on" : "off"}>animaux</label>
                            </li>
                            <li className="attrib-ligne">
                                <label className={carte.couleur? "on" : "off"}>couleur</label>
                            </li>
                        </ul>
                        <ul className='attrib-liste'>
                            <li className="attrib-ligne">
                            <label className={carte.ville? "on" : "off"}>ville</label>
                            </li>
                            <li className="attrib-ligne">
                                <label className={carte.campagne? "on" : "off"}>campagne</label>
                            </li>
                            <li className="attrib-ligne">
                                <label className={carte.mer? "on" : "off"}>mer</label>
                            </li>
                            <li className="attrib-ligne">
                                <label className={carte.montagne? "on" : "off"}>montagne</label>
                            </li>
                        </ul>
                        <ul className='attrib-liste'>
                            <li className="attrib-ligne">
                                <label className={carte.ete? "on" : "off"}>ete</label>
                            </li>
                            <li className="attrib-ligne">
                                <label className={carte.automne? "on" : "off"}>automne</label> 
                            </li>
                            <li className="attrib-ligne">
                                <label className={carte.hiver? "on" : "off"}>hiver</label>
                            </li>
                            <li className="attrib-ligne">
                                <label className={carte.printemps? "on" : "off"}>printemps</label>
                            </li>
                        </ul>
                    </section>
                    <section className='comment-form'>
                        <span className='modif-comment'>
                            <button type="button" className='modif-button' onClick={handleModifyCommentaire}>Ajouter ou modifier le commentaire</button>
                        </span>
                        <p type="textarea" className='comment-text'>{carte.comment}</p>
                    </section>
                </div>
                <div className='buttons'>
                    <button type="button" className='button-ajouter-carte' onClick={handleNewCarte}>Ajouter une carte</button>
                    <button type="button" className='button-router-carte' onClick={handleRetourCarte}>Retour</button>
                </div>
            </div> 
        </>
    )
}
export default OneCarte;