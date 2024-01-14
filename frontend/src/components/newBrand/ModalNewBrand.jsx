import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./modalnewbrand.css";
import Draggable from "react-draggable";
function ModalNewBrand( props) {
  const { setModalVisibleBrand, modalVisibleBrand } =  props 
  const [brandInfos, setBrandInfos] = useState(
    {
      id: "",
      brand: "",
      dispo_brand: "",
    }
  )

  const handleChange = (e) => {
    setBrandInfos({ ...brandInfos, [e.target.name]:e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalVisibleBrand(false);
    // axios POST new brand => brandI,fos
    const postBrand = async () =>{
        try {
            const res = await axios.post(`http://localhost:5000/brand`, brandInfos);
            console.log(res.status);
        } catch (error) {
            console.error(error);
        }
      }
    postBrand();  
  console.log("BRAND ", brandInfos) ;
  } 

  return(
    <Draggable handle=".newUser-entete">
      <div className="newUser-container">
        <form className="newUser" onChange={handleChange} onSubmit={handleSubmit}>
            <div className="newUser-entete">Ajouter une marque</div>
            <div className="formulaire">
              
              <input type="text" placeholder="marque" name="brand" ></input>
              <input type="text" placeholder="quantitée dispo" name="dispo_brand" ></input>
            </div>
            <div className="buttonGroup">
              <button type="button" className="cancelNewUser" onClick={() => setModalVisibleBrand(!modalVisibleBrand)}>Annuler</button>
              <button type="button" className="buttonNewUser" onClick={handleSubmit}>Enregistrer</button>
            </div>
        </form>
      </div>
    </Draggable>
  )
}
ModalNewBrand.propTypes = {
  setModalVisibleBrand: PropTypes.any,
  modalVisibleBrand: PropTypes.any
}
export default ModalNewBrand;