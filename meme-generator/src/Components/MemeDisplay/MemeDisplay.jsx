import React from "react";
import MemeComponent from "../MemeComponent/MemeComponent";
import { useSelector } from "react-redux";

const MemeDisplay = () => {
    const memes = useSelector(store => store.memes);

    return (
        <div className="MemeDisplay">
            {memes.map(meme => <MemeComponent memeData={meme} />)}
        </div>
    );
}

export default MemeDisplay;