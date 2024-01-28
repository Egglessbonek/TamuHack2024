import React from 'react';
import Arrow from './Arrow'
import './Teaching.css';

const messages = {
    "Accessories": "Accessories refers to the specific accessories on a person or object. This can be anything from jewelry to hats. AI-generated images will often misrepresent accessories as they are typically very small details compared to the rest of the image, which can confuse the AI.",
    "Detail": "AI-generated images, especially those depicting large scenes, often mess up very small details or create patterns that would realistically not make sense. ",
    "Faces": "Faces that are AI-generated often fall into the uncanny valley, a description of something that looks human but 'feels' unhuman. You can usually spot these with a gut feeling, since you will often feel like something is just off about the face.",
    "Fingers": "AI generation is notoriously bad at fingers, with a common sign of AI-generation being a wrong number or combination of fingers. Extra or missing fingers usually mean AI-generated, especially if the finger counts are inconsistent throughout the image.",
    "Hair": "Hair that is AI-generation can seemingly stop or start from random places, whereas real hair usually starts from the middle of the head and flows outward. Additionally, hair that seems to 'melt' together can be signs of AI generation.",
    "Light": "AI-generated images can also fail to properly represent the light in an image. For example, if the light is explicity coming from one direction, random opposing shadows or glows can be a sign of AI generation. False reflections or reflections that seem too accurate can also be signs of AI generation.",
    "Subject": "Additionally, unrealistic subjects can be obvious signs of AI generation. If the topic of a supposed photo doesn't exist, like a mythical creature, then obviously it cannot be a real photo.",
    "Text": "AI generation is also bad at generating realistic text. While recent advancements have made text generation more accurate, many AI-generated images fail at creating fonts that are consistent and believable.",
    "Texture": "The texture of objects can also be a sign of AI generation. If something that should be inconsistent and patchy, like a brick road, is too smooth, that can hint towards AI.",
    "Watermark": "Though it is more rare nowadays, lots of past AI models would insert a watermark on their images to indicate that they were AI generated."
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
                    }}
                >x</button>
            </section>
        </div>
    );
};

export default Teaching;
