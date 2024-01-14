import axios from 'axios';
import { useEffect, useState } from 'react';
import "./pageappareils.css";
import ModalNewAppareil from '../../components/newAppareil/ModalNewAppareil';
function PageAppareils() {
    const [appareils, setAppareils] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const getData = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/appareil`);
            setAppareils(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => { 
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    function handleNewDispositif(){
        console.log("NEW APPAREIL");
        setModalVisible(!modalVisible);
    }
    return(
        <section className='pageContainer'>
            <span className="pageUsers">
                <h3>Appareils</h3>
                <section>
                {appareils && appareils.map((el) => {
                    return(
                        <ul key={el.id}>
                            <li>id_appareil :{el.id}</li>
                            <li>Marque:{el.brand_appareil}</li>
                            <li>Modele:{el.model_appareil}</li>
                        </ul>                
                    )
            } 
            )}
            </section>
            <button type="button" className='buttonNewUser' onClick={handleNewDispositif}>Ajouter un appareil</button>
            </span>
            { modalVisible ? <ModalNewAppareil setModalVisible={setModalVisible} modalVisible={modalVisible} />:null }
        </section>
    )
}
export default PageAppareils;