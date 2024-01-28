import { React, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import Teaching from "../Teaching.jsx";

import "./Game.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import imagePaths from "./images.json";

import fs from "fs";

const defaultImage = "https://c.wallhere.com/photos/f6/2c/1024x1024_px_ball_blue_Dark_Blue_elements_macro_Marble_photography-1228624.jpg!d"

function Game() {/*
    const [isAI, setIsAI] = useState(false);
    const onContextMenu = (e) => {
        e.preventDefault();
        alert("onContextMenu: show info");
    };
    let type = useParams().type;
    let imagePath = null;
    // randomly choose
    setIsAI(Math.random() < 0.5);
    imagePath = imagePaths[type][isAI ? "ai" : "real"];

    // list all files in that directory and pick a random one
    let images = import.meta.globEager(imagePath + "/*");
    imagePath = images[Math.floor(Math.random() * images.length)];*/

    let type = useParams().type;
    let imagePathAI = imagePaths[type]["ai"];
    let imagePathReal = imagePaths[type]["real"];
    let files = fs.readdirSync(imagePathAI);

    return (
        <>
            <Teaching type={type} />
            <TransformWrapper
                initialScale={0.5}
                initialPositionX={50}
                initialPositionY={0}
                maxScale={3}
                minScale={0.5}
                limitToBounds={true} // Allow free scrolling even when zoomed
                centerContent={true} // Keep content centered when smaller than the wrapper
            >
                {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
                    <>
                        <div className="tools">
                            <button className="tools-button" onClick={() => zoomIn()}>+</button>
                            <button className="tools-button" onClick={() => zoomOut()}>-</button>
                            <button className="tools-button" onClick={() => resetTransform()}>x</button>
                        </div>
                        <TransformComponent
                            wrapperStyle={{ width: "80vh", height: "80vh", border: "1px solid black", backgroundColor: "#09171f", borderRadius: "10px", overflow: "hidden", boxShadow: "inset 2px 2px 60px black" }}
                            contentStyle={{ width: "1024px", height: "1024px" }}
                        >
                            <img
                                src={imagePath ?? defaultImage}
                                alt="background"
                            />
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper>
        </>
    );
}



export default Game;