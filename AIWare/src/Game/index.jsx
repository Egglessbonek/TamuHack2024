import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import Teaching from "../Teaching.jsx";
import Arrow from '../Arrow';

import "./Game.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import imagePaths from "./images.json";
import WrongOrRight from "./WrongOrRight.jsx";

const defaultImage = "https://c.wallhere.com/photos/f6/2c/1024x1024_px_ball_blue_Dark_Blue_elements_macro_Marble_photography-1228624.jpg!d"

function Game() {/*
    // const [isAI, setIsAI] = useState(false);
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
    const [used, setUsed] = useState([]);
    let type = useParams().type;

    let isAI = Math.random() < 0.5;
    let reality = isAI ? "ai" : "real";
    let rand = Math.floor(Math.random() * imagePaths[type][reality].length);
    let imagePath = imagePaths[type][reality][rand];

    while (used.includes(imagePath)) {
        isAI = Math.random() < 0.5;
        reality = isAI ? "ai" : "real";
        rand = Math.floor(Math.random() * imagePaths[type][reality].length);
        imagePath = imagePaths[type][reality][rand];
    }

    function makeGuess(guess) {
        if (guess === isAI) {
            let element = document.getElementsByClassName("correct-counter-num")[0];
            element.textContent = (Number(element.textContent) + 1);
        }
        else {
            let element = document.getElementsByClassName("wrong-counter-num")[0];
            element.textContent = (Number(element.textContent) + 1);
        }

        let _used = [...used, imagePath];
        if (_used.length > 3)
            setUsed(_used.slice(1));
        else 
            setUsed(_used);
    }

    console.log(isAI, used);


    return (
        <>
            <Teaching type={type} />
            <TransformWrapper
                initialScale={0.5}
                initialPositionX={80}
                initialPositionY={80}
                maxScale={3}
                minScale={0.5}
                limitToBounds={true} // Allow free scrolling even when zoomed
                centerContent={true} // Keep content centered when smaller than the wrapper
            >
                {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
                    <>
                        <div className="content">
                            <button className="guess-button-ai" id="left" onClick={() => makeGuess(true)}>AI</button>
                            <div className="guess-content">
                                <div className="tools">
                                    <div className="wrong-counter"> Wrong <div className="wrong-counter-num">0</div> </div>
                                    <button className="tools-button" onClick={() => zoomIn()}>+</button>
                                    <button className="tools-button" onClick={() => zoomOut()}>-</button>
                                    <button className="tools-button" onClick={() => resetTransform()}>x</button>
                                    <div className="correct-counter"> Correct <div className="correct-counter-num">0</div></div>   
                                </div>
                                <TransformComponent
                                    wrapperStyle={{ width: "80vh", height: "80vh", border: "1px solid black", backgroundColor: "#23231f", borderRadius: "10px", overflow: "hidden", boxShadow: "inset 0px 0px 40px 10px black"}}
                                    contentStyle={{ width: "1024px", height: "1024px" }}
                                >
                                    <img
                                        src={imagePath ?? defaultImage}
                                        alt="background"
                                        style={{ borderRadius: "10px" }}
                                    />

                                </TransformComponent>
                            </div>
                            <button className="guess-button-real" id="right" onClick={() => makeGuess(false)}>Real</button>
                        </div>
                    </>
                )}
            </TransformWrapper>
            <a onClick={() => location.href = "/selection"}>
                <Arrow />
            </a>



        </>
    );
}



export default Game;