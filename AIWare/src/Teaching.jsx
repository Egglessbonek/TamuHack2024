import React from 'react';
import Arrow from './Arrow'
import './Teaching.css';

const messages = {
    "Accessories": "Accessories refers to the specific accessories on a person or object. This can be anything from jewelry to a guitar. AI-generated images will often misrepresent accessories as they are often  small details compared to the rest of the image. Look for accessories that are misplaced or mutilated.",
    "Detail": "AI-generated images, especially those depicting large scenes, often mess up small but key details or replicate patterns where they shouldn't exist. Try zooming in on a detailed section and seeing if it looks real.",
    "Faces": "Faces that are AI-generated often fall into the uncanny valley, a description of something that looks human but 'feels' unhuman. AI faces may have a 'blank' expression and often the eyes don't look quite right. Additionally, the skin may be too smooth.",
    "Fingers": "AI generation is notoriously bad at fingers, with a common sign of AI-generation being a wrong number or combination of fingers. Extra or missing fingers usually mean AI-generated, especially if the finger counts are inconsistent throughout the image.",
    "Hair": "Hair that is AI-generated can seemingly stop or start from random places, whereas real hair usually starts from the middle of the head and flows outward. Additionally, hair that seems to 'melt' together can be signs of AI generation.",
    "Light": "AI-generated images may fail to properly represent the light in an image. For example, if the light is explicity coming from one direction, random opposing shadows or glows can be a sign of AI generation. False reflections or reflections that seem too accurate can also be signs of AI generation.",
    "Subject": "Unrealistic subjects can be obvious signs of AI generation. If the topic of a supposed photo doesn't exist, like a mythical creature, then obviously it cannot be a real picture.",
    "Text": "AI generation is also bad at generating realistic text. While recent advancements have made text generation more accurate, many AI-generated images fail at creating fonts that are consistent and believable.",
    "Texture": "AI images tend to repeat textures and patterns. If a texture seems too shiny or incredibly smooth, it can be an indicator of AI-generated images.",
    "Watermark": "Though it is more rare nowadays, in the past AI models like DALLE-2 would insert a watermark on their images to indicate that they were AI generated."
}

function Teaching({ type }) {
    return (
        <div className="teaching-container">
            <section className="teaching-content">
                <h2 className="teaching-header">{type}</h2>
                <p>{messages[type]}</p>
                <button className="teaching-close"
                    // hide everything
                    onClick={() => {
                        document.getElementsByClassName("teaching-container")[0].style.display = "none";
                        document.getElementsByClassName("guess-button-ai")[0].style.display = "block";
                        document.getElementsByClassName("guess-button-real")[0].style.display = "block";
                        document.getElementsByClassName("tools")[0].style.display = "flex";
                    }}
                >x</button>
            </section>
        </div>
    );
};

export default Teaching;
