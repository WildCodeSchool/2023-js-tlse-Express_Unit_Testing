import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./onecarte.css";
import coeurTrait from "../../../Public/coeur-trait.png";
import coeurPlein from "../../../Public/coeur-plein.png";
import picture from "../../../Public/church-1993645_640.jpg";
function OneCarte(props) {
    const [ clickCoeur, setClickCoeur ] = useState(0);
    const [ iconeCoeur, setIconeCoeur ] = useState();
    const { id_oneCarte, setOneCarteVisible, oneCarteVisible} = props;
    const [carte, setCarte] = useState([]);
    const getOneCarte = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/api/base-total/${id_oneCarte}`);
            const item= response.data;
            setCarte(item[0]);
            (carte.is_liked !== 0)? setIconeCoeur(coeurPlein) : setIconeCoeur(coeurTrait)
            } 
            catch (error) {
            console.error(error);
        }
    }
    useEffect(() =>{
        getOneCarte();
    },[]);
    const handleFavoris = () =>{
        setClickCoeur(!clickCoeur);
        handleToggleCoeur(clickCoeur);
        console.log("coeur ", clickCoeur);
        // utiliser clickCoeur pour is_like de DB
    }
    const handleToggleCoeur = (el) =>{
        el? setIconeCoeur(coeurPlein) : setIconeCoeur(coeurTrait);
    }
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
                        <img src={picture} className='carte-photo' onClick={handlePhoto} placeholder='Photo' />
                    </section>
                    <section className='carte-descriptif'>
                        <span className='modif-descriptif'>
                            <button type="button" className='modif-button' onClick={handleModifyDescriptif}>Modifier le descriptif</button>
                        </span>
                        <span className='carte-favoris'>
                            <p className='carte-libelle'>Ajouter aux favoris{carte.is_liked}</p>
                            <img src={iconeCoeur} className="icone-coeur" placeholder='+' onClick={handleFavoris}/>
                        </span>
                        <ul className='descriptif-liste'>
                            <li className='carte-libelle'>
                                <label>Année&nbsp;&nbsp;&nbsp;&nbsp;:</label><p>{carte.annee}</p>
                            </li>
                            <li className='carte-libelle'>
                                <label>Localité&nbsp;:</label><p>{carte.nomlocalite}</p>
                            </li>
                            <li className='carte-libelle'>
                                <label>Région&nbsp;&nbsp;&nbsp;:</label><p>{carte.nomregion}</p>
                            </li>
                            <li className='carte-libelle'>
                                <label>Pays&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label><p>{carte.nompays}</p>
                            </li>
                        </ul>
                        <span className='descriptif-url'>
                            <p className='carte-libelle'>URL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
                            <p className='carte-libelle'>{carte.commenturl}</p>
                            <button type="button" className='button-visitez' onClick={handleVisitUrl}>Visitez le site</button>
                        </span>
                    </section>
                    <section className='attrib-container'> 
                        <span className='modif-attrib'>
                            <button type="button" className='modif-button' onClick={handleModifyAttrib}>Modifier les attributs</button>
                        </span>
                        <ul className='attrib-liste'>
                            <li className="attrib-ligne">
                                <p className={carte.personne? "on" : "off"}>personnes</p> 
                            </li>
                            <li className="attrib-ligne">
                                <p className={carte.animaux? "on" : "off"}>animaux</p>
                            </li>
                            <li className="attrib-ligne">
                                <p className={carte.couleur? "on" : "off"}>couleur</p>
                            </li>
                        </ul>
                        <ul className='attrib-liste'>
                            <li className="attrib-ligne">
                            <p className={carte.ville? "on" : "off"}>ville</p>
                            </li>
                            <li className="attrib-ligne">
                                <p className={carte.campagne? "on" : "off"}>campagne</p>
                            </li>
                            <li className="attrib-ligne">
                                <p className={carte.mer? "on" : "off"}>mer</p>
                            </li>
                            <li className="attrib-ligne">
                                <p className={carte.montagne? "on" : "off"}>montagne</p>
                            </li>
                        </ul>
                        <ul className='attrib-liste'>
                            <li className="attrib-ligne">
                                <p className={carte.ete? "on" : "off"}>ete</p>
                            </li>
                            <li className="attrib-ligne">
                                <p className={carte.automne? "on" : "off"}>automne</p> 
                            </li>
                            <li className="attrib-ligne">
                                <p className={carte.hiver? "on" : "off"}>hiver</p>
                            </li>
                            <li className="attrib-ligne">
                                <p className={carte.printemps? "on" : "off"}>printemps</p>
                            </li>
                        </ul>
                    </section>
                    <section className='comment-form'>
                        <span className='modif-comment'>
                            <button type="button" className='modif-button' onClick={handleModifyCommentaire}>Ajouter ou modifier le commentaire</button>
                        </span>
                        <p type="textarea" className='comment-text' placeholder='Pas de commentaire'>{carte.comment}</p>
                    </section>
                </div>
                <div className='buttons'>
                    <button type="button" className='button-retour-carte' onClick={handleRetourCarte}>Retour</button>
                    <button type="button" className='button-ajouter-carte' onClick={handleNewCarte}>Ajouter une carte</button>
                </div>
            </div> 
        </>
    )
}
export default OneCarte;