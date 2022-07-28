import React, { useEffect, useState } from "react";
import CrudsItems from "./CrudsItems";

export default function CrudFetch(props) {
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(true);
  const [loading, setLoading] = useState(0);
  const [deleteNotes, setDeleteNotes] = useState("");
  // console.log(props);

  function fetchRequest(url) {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPosts((prev) => [...data]);
      setFlag((prev) => !prev);
    };
    fetchData();
  }

  useEffect(() => {
    fetchRequest("http://localhost:7777/notes");
  }, []);

  useEffect(() => {
    fetchRequest("http://localhost:7777/notes");
  }, [flag]);

  // // Load Notes
  const handleLoad = () => {
    setLoading((prev) => !prev);
  };

  // Post posts

  const postData = () => {
    if (props.message) {
      const fetchData = async () => {
        const response = await fetch("http://localhost:7777/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: props.message.text }),
        });
      };
      fetchData();
      setFlag((prev) => !prev);
    }
  };

  useEffect(postData, [props]);

  //Delete Notes

  const handleDelete = (id) => {
    setDeleteNotes((prev) => (prev = id));
    fetchRequest("http://localhost:7777/notes");
  };

  const DeleteData = () => {
    fetch(`http://localhost:7777/notes/${deleteNotes}`, {
      method: "delete",
    });
  };

  useEffect(DeleteData, [deleteNotes]);

  return (
    <div>
      Notes
      <button onClick={handleLoad}>
        <img
          src="https://img.icons8.com/flat-round/344/downloading-updates--v1.png"
          style={{
            width: "15px",
          }}
          alt=""
        />
      </button>
      <div className="container">
        {posts?.map((item) => {
          return (
            <CrudsItems key={item.id} item={item} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
}
