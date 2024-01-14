import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import Draggable from "react-draggable";
import "react-dropdown/style.css";
import "./modalnewdispositif.css";
import DateFormatCell from "../utils/DateFormatCell";
function ModalNewDispositif( props) {
  const { setModalVisibleDispo, modalVisibleDispo } =  props 
  const [listeBrands, setListeBrands] = useState([]);
  const [listeModels, setListeModels] = useState([]);
  const [termBrand, setTermBrand] = useState("marque");
  const [termBrandId, setTermBrandId] = useState('');
  const [termModel, setTermModel] = useState("modèle");
  const [termModelId, setTermModelId] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [reserved, setReserved] = useState(false);
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState(false);
  const [adapte, setAdapte] = useState(false);
  const [selectorBrand, setSelectorBrand] = useState(false);
  const [selectorModel, setSelectorModel] = useState(false);
  const [dispositifInfos, setDispositifInfos] = useState(
    {
      ref_dispositif: "",
      comment_dispositif: "",
      reserve_dispositif: false, /* varchar */
      debut_dispositif: "",
      retour_dispositif: "",
      error_dispositif: "",  /* varchar */
      detail_dispositif: "", /* varchar */
      adapte_dispositif: "", /* varchar */
      url_dispositif: "",
      photo_dispositif: "",
      brand_dispositif_id: 1, /* int */
      model_dispositif_id: 1, /* int */
      users_id: 1,
    }
  )
  useEffect(() => {
    const fetchDatas = async () =>{
      try {
        const response = await axios.get(`http://localhost:5000/brand`);
        setListeBrands(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDatas();
  },[]);
  useEffect(() => {
    const fetchDatas = async () =>{
      try {
        const response = await axios.get(`http://localhost:5000/model`);
        setListeModels(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDatas();
  },[]);

  const handleChange = (e) => {
    setDispositifInfos({ ...dispositifInfos, [e.target.name]:e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispositifInfos.photo_dispositif = imagePath;
    dispositifInfos.reserve_dispositif = reserved;
    dispositifInfos.error_dispositif = error;
    dispositifInfos.detail_dispositif = detail;
    dispositifInfos.adapte_dispositif = adapte;
    termBrandId? dispositifInfos.brand_dispositif_id = parseInt(termBrandId, 10): 1 ;
    termModelId? dispositifInfos.model_dispositif_id = parseInt(termModelId, 10): 1 ;
    dispositifInfos.debut_dispositif = DateFormatCell(new Date());
    dispositifInfos.retour_dispositif = DateFormatCell(new Date());
    // axios POST new dispositif => dispositif
    const postDispositif = async () =>{
      try {
          const res = await axios.post(`http://localhost:5000/dispositifs`, dispositifInfos);
          console.log(res.status);
      } catch (error) {
          console.error(error);
      }
    }
    postDispositif && postDispositif();
    console.log("DISPOSITIFS ", dispositifInfos) ;
  } 
  // Gestion du dropdown
const handleChangeBrand = (e) =>{
  setTermBrand(e.target.textContent);
  setTermBrandId(e.target.value);
  setSelectorBrand(!selectorBrand);
}
const handleSelectorBrand = () =>{
  setSelectorBrand(!selectorBrand);
}
const handleChangeModel = (e) =>{
  setTermModel(e.target.textContent);
  setTermModelId(e.target.value);
  setSelectorModel(!selectorModel);
}
const handleSelectorModel = () =>{
  setSelectorModel(!selectorModel);
}
// console.log("listeBrands ", listeModels);
const handleImage = (e) =>{
  const file = e.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = () =>{
      const path=reader.result;
      setImagePath(path);
    };
    reader.readAsDataURL(file);
    
  }
}
  return(
    <Draggable handle=".newUser-entete">
    <div className="newUser-container">
      <form className="newUser" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="newUser-entete">Ajouter un dispositif</div>
          <div className="formulaire">
            <span className="selector">
              <input 
              type="search"
              name="brand_dispositif_id"
              onChange={handleChangeBrand}
              value={termBrand}/>
              <button className="fleche-deroule"  onClick={handleSelectorBrand}>\/</button>
              <div className="selector-block">
                {selectorBrand ? 
                  listeBrands.map((el) => {
                  return(
                    <ul key={el.id_brand}>
                      <li className="selector-line" key={el.id} value={el.id} onClick={handleChangeBrand}>{el.brand}</li>
                    </ul>
                  )
                }): null } 
              </div>
            </span>
            <span className="selector">
              <input 
              type="search"
              name="model_dispositif_id"
              onChange={handleChangeModel}
              value={termModel}/>
              <button className="fleche-deroule"  onClick={handleSelectorModel}>\/</button>
              <div className="selector-block">
                {selectorModel ? 
                  listeModels.map((el) => {
                  return(
                    <ul key={el.id_model}>
                      <li className="selector-line" key={el.id} value={el.id} onClick={handleChangeModel}>{el.model}</li>
                    </ul>
                  )
                }): null } 
              </div>
            </span>
            <input type="text" placeholder="référence" name="ref_dispositif" ></input>
            <textarea className="commentaire" type="textarea" cols="1" rows="4" placeholder="commentaire" name="comment_dispositif" ></textarea>
            <input type="text" placeholder="url" name="url_dispositif" ></input>
            <div className="vignette">
              {imagePath && (
                <img src={imagePath} alt="photo" className="image" />
              )}
            </div>
          </div>
          <span className="checkboxNewDispositif">
            <div className="adminCheckbox">
              <input type="checkbox" name="reserve_dispositif" onChange={() => setReserved(!reserved)}/>
              <label htmlFor="reserve_dispositif">Reservé</label> 
            </div>
            <div className="adminCheckbox">
              <input type="checkbox" name="error_dispositif" onChange={() => setError(!error)}/>
              <label htmlFor="error_dispositif">erreur</label> 
            </div>
            <div className="adminCheckbox">
              <input type="checkbox" name="detail_dispositif" onChange={() => setDetail(!detail)}/>
              <label htmlFor="detail_dispositif">detail</label> 
            </div>
            <div className="adminCheckbox">
              <input type="checkbox" name="adapte_dispositif" onChange={() => setAdapte(!adapte)}/>
              <label htmlFor="adapte_dispositif">adapte</label> 
            </div>
          </span>

          <div className="buttonGroup">
            <button type="button" className="cancelNewUser" onClick={() => setModalVisibleDispo(!modalVisibleDispo)}>Annuler</button>
            <label htmlFor="image" className="boutonCharger">
                <span>Charger une photo</span>
                <input type="file" accept="image/*" onChange={handleImage} id="image" />
            </label>
            <button type="button" className="buttonNewUser" onClick={handleSubmit}>Enregistrer</button>
          </div>
      </form>
    </div>
    </Draggable>
  )
}
ModalNewDispositif.propTypes = {
  setModalVisibleDispo: PropTypes.any,
  modalVisibleDispo: PropTypes.any,
}
export default ModalNewDispositif;