import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./modalnewmodel.css";
import Draggable from "react-draggable";
function ModalNewModel( props) {
  const { setModalVisibleModel, modalVisibleModel } =  props 
  const [modelInfos, setModelInfos] = useState(
    {
      id: "",
      model: "",
      dispo_model: "",
    }
  )
  const handleChange = (e) => {
    setModelInfos({ ...modelInfos, [e.target.name]:e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalVisibleModel(false);
    // axios POST new model n> modelInfos
    const postModel = async () =>{
        try {
            const res = await axios.post(`http://localhost:5000/model`, modelInfos);
            console.log(res.status);
        } catch (error) {
            console.error(error);
        }
      }
    postModel();  
  } 

  return(
    <Draggable handle=".newUser-entete">
      <div className="newUser-container">
        <form className="newUser" onChange={handleChange} onSubmit={handleSubmit}>
            <div className="newUser-entete">Ajouter un modèle</div>
            <div className="formulaire">
              
              <input type="text" placeholder="marque" name="model" ></input>
              <input type="text" placeholder="quantitée dispo" name="dispo_model" ></input>
            </div>
            <div className="buttonGroup">
              <button type="button" className="cancelNewUser" onClick={() => setModalVisibleModel(!modalVisibleModel)}>Annuler</button>
              <button type="button" className="buttonNewUser" onClick={handleSubmit}>Enregistrer</button>
            </div>
        </form>
      </div>
    </Draggable>
  )
}
ModalNewModel.propTypes = {
  setModalVisibleModel: PropTypes.any,
  modalVisibleModel: PropTypes.any
}
export default ModalNewModel;