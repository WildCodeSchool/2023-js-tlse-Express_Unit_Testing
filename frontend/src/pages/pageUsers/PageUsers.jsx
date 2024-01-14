import axios from 'axios';
import { useEffect, useState } from 'react';
import "./pageuser.css";
import ModalNewUser from '../../components/newUser/ModalNewUser';
function PageUsers() {
    const [users, setUsers] = useState([]);
    const [modalVisibleUser, setModalVisibleUser] = useState(false);
    const getData = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/users`);
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => { 
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    function handleNewUser(){
        console.log("NEW USER");
        setModalVisibleUser(!modalVisibleUser);
    }
    return(
        <section className='pageContainer'>
        <span className="pageUsers">
            <h3>Utilisateurs</h3>
            <section>
            {users && users.map((el) => {
                return(
                    <ul key={el.id}>
                        <li>id :{el.id}</li>
                        <li>Prénom :{el.firstname}</li>
                        <li>Nom :{el.lastname}</li>
                        <li>Password : {el.hashed_password}</li>
                        <li>Email :{el.email}</li>
                        <li>Tel :{el.tel}</li>
                        <li>{el.nbre_reserved} réservés</li>
                        <li>{el.nbre_utilise} utilisés</li>
                        <li className={el.is_admin  ? 'admis':'noadmis'}>Admin :{el.is_admin}</li>
                        <li className={el.authorized  ? 'admis':'noadmis'}>Autorise :{el.authorized}</li>
                    </ul>                
                )
           } 
           )}
           </section>
           <button type="button" className='buttonNewUser' onClick={handleNewUser}>Ajouter un utilisateur</button>
        </span>
        { modalVisibleUser ? <ModalNewUser setModalVisibleUser={setModalVisibleUser} modalVisibleUser={modalVisibleUser} />:null }
        </section>
    )
}
export default PageUsers;
