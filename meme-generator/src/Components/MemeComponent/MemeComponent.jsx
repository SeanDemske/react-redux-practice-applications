import React from "react";
import { useDispatch } from "react-redux";
import "./MemeComponent.css";

const MemeComponent = ({ memeData }) => {
    const { topText, botText, imgUrl, id } = memeData;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({
            type: "REMOVE_MEME",
            id: id
        });
    }

    return (
        <div className="MemeComponent">
            <button onClick={handleDelete} className="btn-delete">X</button>
            <p className="top-text">{topText}</p>
            <img src={imgUrl} alt="meme img"/>
            <p className="bottom-text">{botText}</p>
        </div>
    );
}

export default MemeComponent;