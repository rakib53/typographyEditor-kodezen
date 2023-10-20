import React from "react";

function Preview({ propreties }) {
  return (
    <div className="homeWrapper" style={{ width: "100%", overflowX: "hidden" }}>
      <div className="navbar">
        <h1 className="logo">S.</h1>
        <ul className="menuWrapper">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Business</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: "200px" }}>
        <h2 style={{ textAlign: "center", padding: "0", margin: "0" }}>
          Let's get started with KodeZen
        </h2>
        <p
          style={{
            textAlign: "center",
            background: "#625df5",
            color: "white",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          To change the typrography of the text down below click on the
          typography edit button from the left of the screen
        </p>
        <p
          style={{
            textAlign: "center",
            fontStyle: propreties?.style,
            textDecoration: propreties?.decoration,
            fontFamily: propreties?.font?.value,
            fontSize: `${
              propreties?.size?.value > 0 ? propreties?.size?.value : "16"
            }${propreties?.size?.unit}`,
            lineHeight: `${propreties?.lineHeight?.value}${propreties?.lineHeight?.unit}`,
            letterSpacing: `${propreties?.letterSpacing?.value}${propreties?.letterSpacing?.unit}`,
            wordSpacing: `${propreties?.wordSpacing?.value}${propreties?.wordSpacing?.unit}`,
            fontWeight: propreties?.weight,
            textTransform: propreties?.transform,
          }}
        >
          "The quick brown fox jumps over the lazy dog"
        </p>
      </div>
    </div>
  );
}

export default Preview;
