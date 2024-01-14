import { useState } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import axios from 'axios';
import "./modalanewuser.css";
function ModalNewUser( props) {
  const { setModalVisibleUser, modalVisibleUser } =  props 
  const [userInfos, setUserInfos] = useState(
    {
      firstname: "",
      lastname: "",
      hashed_password: "",
      email: "",
      tel: "",
      nbre_reserved:"",
      nbre_utilise:"",
      is_admin: false,
      is_authorized: false,
    }
  )
  const [localAdmin, setLocalAdmin] = useState(false);
  const [localAuth, setLocalAuth] = useState(false);
  const handleChange = (e) => {
    setUserInfos({ ...userInfos, [e.target.name]:e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localAdmin ? userInfos.is_admin = 1 : userInfos.is_admin = 0;
    localAuth ? userInfos.is_authorized = 1 : userInfos.is_authorized = 0;
    // axios POST new user => user
    const postUser = async () =>{
      try {
        const res = await axios.post(`http://localhost:5000/users`, userInfos);
        console.log(res.status);
      } catch (error) {
        console.error(error);
      }
    }
    postUser(); 
    setModalVisibleUser(!modalVisibleUser);
    console.log("USER ", userInfos) ;
  } 

  return(
    <Draggable handle=".newUser-entete">
    <div className="newUser-container">
      <form className="newUser" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="newUser-entete">Ajouter un utilisateur</div>
          <div className="formulaire">
            <input type="text" placeholder="Nom" name="firstname" ></input>
            <input type="text" placeholder="Prenom" name="lastname" ></input>
            <input type="text" placeholder="password" name="hashed_password"></input>
            <input type="text" placeholder="Email" name="email" ></input>
            <input type="text" placeholder="Tel" name="tel" ></input>
            <input type="number" placeholder='Réservé' name="nbre_reserved"></input>
            <input type="number" placeholder='Utilisé' name="nbre_utilise"></input>
          </div>
          <section className="checkboxNewUser">
            <div className="adminCheckbox">
              <input type="checkbox" name="is_admin" onChange={() => setLocalAdmin(!localAdmin)}/>
              <label htmlFor="is_admin">Administrateur</label> 
            </div>
            <div className="adminCheckbox">
              <input type="checkbox" name="is_authorized" onChange={() => setLocalAuth(!localAuth)}/>
              <label htmlFor="is_authorized">Autorisé</label>
            </div>
          </section>
          <div className="buttonGroup">
            <button type="button" className="cancelNewUser" onClick={() => setModalVisibleUser(!modalVisibleUser)}>Annuler</button>
            <button type="button" className="buttonNewUser" onClick={handleSubmit}>Enregistrer</button>
          </div>
      </form>
    </div>
    </Draggable>
  )
}
ModalNewUser.propTypes = {
  setModalVisibleUser: PropTypes.any,
  modalVisibleUser: PropTypes.any,
}
export default ModalNewUser;