import './Selection.css'
import React from 'react';
import Arrow from './Arrow'
import Teaching from './Teaching'

function Selection() {

  function goToRef(name) {
    return () => {
      location.href = `/game/${name}`;
    };
  }

  return (
    <>
      <div className="selection-div">
        <div className="left-column-selection">
          <button className="selection-button" onClick={goToRef("Accessories")}>Accessories</button>
          <button className="selection-button" onClick={goToRef("Detail")}>Detail</button>
          <button className="selection-button" onClick={goToRef("Faces")}>Faces</button>
          <button className="selection-button" onClick={goToRef("Fingers")}>Fingers</button>
          <button className="selection-button" onClick={goToRef("Hair")}>Hair</button>
        </div>
        <div className="right-column-selection">
          <button className="selection-button" onClick={goToRef("Light")}>Light</button>
          <button className="selection-button" onClick={goToRef("Subject")}>Subject</button>
          <button className="selection-button" onClick={goToRef("Text")}>Text</button>
          <button className="selection-button" onClick={goToRef("Texture")}>Texture</button>
          <button className="selection-button" onClick={goToRef("Watermark")}>Watermark</button>
        </div>
      </div>
      <a onClick={() => location.href = "/"}>
          <Arrow />
      </a>
    </>
  )
}

export default Selection;