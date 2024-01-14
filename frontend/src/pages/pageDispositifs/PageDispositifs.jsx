import axios from 'axios';
import { useEffect, useState } from 'react';
import "./pagedispositif.css";
import ModalNewDispositif from "../../components/newDispositif/ModalNewDispositif";
import ModalNewDBrand from '../../components/newBrand/ModalNewBrand';
import ModalNewModel from "../../components/newModel/ModalNewModel";
function PageDispositifs() {
    const [dispositifs, setDispositifs] = useState([]);
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [modalVisibleDispo, setModalVisibleDispo] = useState(false);
    const [modalVisibleBrand, setModalVisibleBrand] = useState(false);
    const [modalVisibleModel, setModalVisibleModel] = useState(false);

    const getDispositifs = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/dispositifs`);
            setDispositifs(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const getBrands = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/brand`);
            setBrands(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const getModels = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/model`);
            setModels(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => { 
        getDispositifs();
        getBrands();
        getModels();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    function handleNewDispositif(){
        console.log("NEW DISPOSITIF");
        setModalVisibleDispo(!modalVisibleDispo);
    }
    function handleNewBrand() {
        console.log(("NEW BRAND"));
        setModalVisibleBrand(!modalVisibleBrand);
    }
    function handleNewModel() {
        console.log(("NEW MODEL"));
        setModalVisibleModel(!modalVisibleModel);
    }
    return(
        <>
        <section className='pageContainer'>
            <span className="pageUsers">
                <h3>Dispositifs</h3>
                <section>
                    {dispositifs && dispositifs.map((el) => {
                        return(
                            <>
                            <ul key={el.id}>
                                <li>id :{el.id}</li>
                                <li>Utilisé :{el.users_id}</li>
                                <li>Marque :{el.brand_dispositif_id}</li>
                                <li>Modèle :{el.model_dispositif_id}</li>
                                <li>Référence:{el.ref_dispositif}</li>
                                <li>Commentaire:{el.comment_dispositif}</li>
                                <li>Reservé :{el.reserve_dispositif}</li>
                                <li>Début :{el.debut_dispositif}</li>
                                <li>Retour :{el.retour_dispositif}</li>
                                <li>Erreur :{el.error_dispositif}</li>
                                <li>Détail :{el.detail_dispositif}</li>
                                <li>Adaptable :{el.adapte_dispositif}</li>
                                <li>URL :{el.url_dispositif}</li>
                                <div className='vignette-container'>
                                    <img src={el.photo_dispositif} alt={el.photo_dispositif} className='vignette'/>
                                </div>
                            </ul>                
                            </>
                            )
                        }
                    )}
                </section>
            <button type="button" className='buttonNewUser' onClick={handleNewDispositif}>Ajouter un dispositif</button>
            </span>
            <span className="pageUsers">
                <h3>Disponibles par marques</h3>
                <section>
                    {brands && brands.map((el) => {
                        return(
                            <ul key={el.id}>
                                <li>id :{el.id}</li>
                                <li>Marque:{el.brand}</li>
                                <li>Dispo:{el.dispo_brand}</li>
                            </ul>                
                            )
                        } 
                    )}
                </section>
                <button type="button" className='buttonNewUser' onClick={handleNewBrand}>Ajouter une marque</button>
            </span>
            <span className="pageUsers">
                <h3>Modèles des dispositifs</h3>
                <section>
                    {models && models.map((el) => {
                        return(
                            <ul key={el.id}>
                                <li>id :{el.id}</li>
                                <li>Modèle:{el.model}</li>
                                <li>Dispo:{el.dispo_model}</li>
                            </ul>                
                            )
                        } 
                    )}
                </section>
                <button type="button" className='buttonNewUser' onClick={handleNewModel}>Ajouter un modèle</button>
            </span>
            { modalVisibleDispo ? <ModalNewDispositif setModalVisibleDispo={setModalVisibleDispo} modalVisibleDispo={modalVisibleDispo} />:null }
            { modalVisibleBrand ? <ModalNewDBrand setModalVisibleBrand={setModalVisibleBrand} modalVisibleBrand={modalVisibleBrand} />:null }
            { modalVisibleModel ? <ModalNewModel setModalVisibleModel={setModalVisibleModel} modalVisibleModel={modalVisibleModel} />:null }
        </section>
    </>
    )
}
export default PageDispositifs; 
