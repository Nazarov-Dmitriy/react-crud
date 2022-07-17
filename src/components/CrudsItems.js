import React from "react";

export default function CrudsItems(props) {
  return (
    <div className="item-block">
      {props.item.content.addNotes}
      <button
        className="item-block-btn"
        onClick={() => props.handleDelete(props.item.id)}
      >
        <img src="https://img.icons8.com/fluency/344/cancel.png" alt="" />
      </button>
    </div>
  );
}
