import { useState } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import axios from 'axios';
import "./modalnewappareil.css";
function ModalNewAppareil( props) {
  const { setModalVisible, modalVisible } =  props 
  const [appareilInfos, setAppareilInfos] = useState(
    {
      brand_appareil: "",
      model_appareil: "",
    }
  )
  const handleChange = (e) => {
    setAppareilInfos({ ...appareilInfos, [e.target.name]:e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios POST new appareil => appareilInfos
    const postAppareil = async () =>{
      try {
          const res = await axios.post(`http://localhost:5000/appareil`, appareilInfos);
          console.log(res.status);
      } catch (error) {
          console.error(error);
      }
    }
  postAppareil(); 

    console.log("APPAREIL ", appareilInfos) ;
  } 
  return(
    <Draggable handle=".newUser-entete">
    <div className="newUser-container">
      <form className="newUser" onChange={handleChange} onSubmit={handleSubmit}>
      <div className="newUser-entete">Ajouter un appareil</div>
          <div className="formulaire">
            <input type="text" placeholder="marque" name="brand_appareil" ></input>
            <input type="text" placeholder="modèle" name="model_appareil" ></input>
          </div>
          <div className="buttonGroup">
            <button type="button" className="cancelNewUser" onClick={() => setModalVisible(!modalVisible)}>Annuler</button>
            <button type="button" className="buttonNewUser" onClick={handleSubmit}>Enregistrer</button>
          </div>
      </form>
    </div>
    </Draggable>
  )
}
ModalNewAppareil.propTypes = {
  setModalVisible: PropTypes.any,
  modalVisible: PropTypes.any,
}
export default ModalNewAppareil;