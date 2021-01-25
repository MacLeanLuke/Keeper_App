import React from "react";

function Note() {
  return (
    <div className="note">
      <h2>Recipe Name</h2>
      <hr />
      <br />
      <h1>Ingredients</h1>
      <ul>
        <li>Item</li>
      </ul>
      <br />
      <h1>Instructions</h1>
      <ol>
        <li>Step 1</li>
      </ol>
    </div>
  );
}

export default Note;
