import React, { useEffect, useState } from "react";
import CrudsItems from "./CrudsItems";

export default function CrudFetch(props) {
  const [addNotes, setaddNotes] = useState(props.message.text);
  const [loading, setLoading] = useState(0);
  const [deleteNotes, setDeleteNotes] = useState("");
  const [arrNotes, setArrNotes] = useState([]);
  console.log(props);
  console.log(addNotes);

  // Load Notes
  const handleLoad = () => {
    setLoading((prevLoad) => prevLoad + 1);
  };

  const loadData = () => {
    fetch("http://localhost:7777/notes")
      .then((response) => response.json())
      .then((data) => {
        setArrNotes(data);
      });
  };

  useEffect(loadData, [loading]);

  //Delete Notes

  const handleDelete = (id) => {
    console.log(id);
    setDeleteNotes(id);
    loadData();
  };

  const DeleteData = () => {
    fetch(`http://localhost:7777/notes/${deleteNotes}`, {
      method: "delete",
    });
  };

  useEffect(DeleteData, [deleteNotes]);

  //Add Notes

  const AddData = () => {
    fetch("http://localhost:7777/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: { addNotes },
      }),
    })
  };

  useEffect(AddData, [addNotes]);

  return (
    <div>
      Notes
      <button onClick={handleLoad}>
        <img
          src="https://img.icons8.com/flat-round/344/downloading-updates--v1.png"
          style={{ width: "15px" }}
          alt=""
        />
      </button>
      <div className="container">
        {arrNotes.map((item) => {
          return (
            <CrudsItems key={item.id} item={item} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
}
