import React from "react";

export default function CrudsItems({item ,handleDelete}) {
  return (
    <div className="item-block">
      {item.content}
      <button
        className="item-block-btn"
        onClick={() => handleDelete(item.id)}
      >
        <img src="https://img.icons8.com/fluency/344/cancel.png" alt="" />
      </button>
    </div>
  );
}
