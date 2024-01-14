import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import DateFormatCell from "../utils/DateFormatCell";
import axios from 'axios';
import "./modaldescriptionbyid.css";

function ModaleDescriptionById(props) {
    // eslint-disable-next-line react/prop-types
    const { idOneDispositif, setIsOneVisible, isOneVisible } = props;
    const [item, setItem] = useState([0]);
    const getOneDispositif = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/dispositifs/${idOneDispositif}`);
            setItem(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() =>{
        getOneDispositif();
    },[]);
    console.log(item);
    const handleRetour = () =>{
       console.log("handleRetour");
       setIsOneVisible(!isOneVisible);
    }
    const handleModify= () =>{
        console.log("MODIFY");
    }
    const handleDelete= () =>{
        console.log("DELETE");
    }
    return(
    <Draggable handle=".pageOneUserEntete">
        <section className='pageOneContainer'>
            <span className="pageOneUser">
                <h3 className="pageOneUserEntete">Dispositifs</h3>
                    <ul>
                        <li>id :{item.id}</li>
                        <li>Modèle :{item.model}</li>
                        <li>Référence :{item.ref_dispositif}</li>
                        <li>Commentaire :{item.comment_dispositif}</li>
                        <li>Reservé :{item.reserve_dispositif}</li>
                        <li>Nom :{item.firstname? item.firstname : ""}</li>
                        <li>Prénom :{item.lastname? item.lastname : ""}</li>
                        <li>Début :{item.debut_dispositif ? DateFormatCell(item.debut_dispositif): "-- -- ----"}</li>
                        <li>Retour :{item.retour_dispositif ? DateFormatCell(item.retour_dispositif): "-- -- ----"}</li>
                        <li>Erreur :{item.error_dispositif}</li>
                        <li>Détail :{item.detail_dispositif}</li>
                        <li>Adaptable :{item.adapte_dispositif}</li>
                        <li>URL :{item.url_dispositif}</li>
                        <div className='vignette-container'>
                            <img src={item.photo_dispositif} alt={item.photo_dispositif} className='vignette'/>
                        </div>
                    </ul>                
                <span className="buttonsGroup">
                    <button type="button" className="buttonDeleteUser" onClick={handleDelete}>Supprimer</button>
                    <button type="button" className="buttonModifyUser" onClick={handleModify}>Modifier</button>
                    <button type="button" className='buttonNewUser' onClick={handleRetour}>Retour</button>
                </span>
            </span>
        </section>
    </Draggable>
    )
}
export default ModaleDescriptionById;