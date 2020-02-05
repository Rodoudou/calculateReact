import React from "react";

export default function Content({ value, plus, moins, refresh }) {
  return (
    <div
      className="content"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60px"
      }}
    >
      <div
        className="calculate"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <button
          style={{
            borderColor: "#5c4ad3",
            color: "#5c4ad3",
            width: 40,
            height: 40,
            borderRadius: 10,
            fontWeight: "bold",
            marginTop: 25
          }}
          onClick={() => {
            plus(value + 1);
          }}
        >
          +
        </button>

        <button
          style={{
            backgroundColor: "#5c4ad3",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 10,
            border: "none",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 70,
            color: "white",
            margin: "0px 10px 10px 10px"
          }}
        >
          {value}
        </button>
        <button
          style={{
            borderColor: "#5c4ad3",
            color: "#5c4ad3",
            width: 40,
            height: 40,
            borderRadius: 10,
            fontWeight: "bold",
            marginTop: 25
          }}
          onClick={() => {
            moins(value - 1);
          }}
        >
          -
        </button>
      </div>
      <button
        onClick={() => {
          refresh((value = 0));
        }}
        style={{
          backgroundColor: "red",
          width: 80,
          height: 40,
          fontWeight: "bold",
          borderRadius: 10,
          borderColor: "black"
        }}
      >
        Reset!
      </button>
    </div>
  );
}
