import React from 'react';
import Draggable from 'react-draggable';
import './onephotozoom.css';
function OnePhotoZoom (props) {
    const { picture, setZoomVisible, zoomVisible } = props;
    const handleClick = () =>{
        setZoomVisible(!zoomVisible)
    }
    return(
        <Draggable handle='.zoom-move'>
        <section className='zoom-container'>
            <img src={picture} className='zoom-photo' placeholder='Photo' />
            <span className='zoom-move' />
            <button type="button" className='zoom-button'onClick={handleClick}>Retour</button>
        </section>
        </Draggable>
    )
}
export default OnePhotoZoom;