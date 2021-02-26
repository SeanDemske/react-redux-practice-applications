import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const MemeForm = () => {
    const INITIAL_STATE = {
        topText: "",
        botText: "",
        imgUrl: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_MEME",
            meme: {...formData, id: uuidv4()}
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div className="MemeForm">
            <form onSubmit={handleSubmit} >
                <label htmlFor="topText">Top Text</label>
                <input id="topText" name="topText" type="text" value={formData.topText} onChange={handleChange} required />

                <label htmlFor="botText">Bottom Text</label>
                <input id="botText" name="botText" type="text" value={formData.botText} onChange={handleChange} required />

                <label htmlFor="imgUrl">Image URL</label>
                <input id="imgUrl" name="imgUrl" type="text" value={formData.imgUrl} onChange={handleChange} required />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default MemeForm;