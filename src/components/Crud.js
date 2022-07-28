import React, {  useState } from "react";
import CrudFetch from "./CrudFetch";
import Forms from "./Forms";


export default function Crud() {
  const [message, setMessage] = useState('');

  const handleAdd = (mess) => {
    setMessage(mess);
  };

  return (
    <div>
      <CrudFetch message={message} />
      <Forms handleAdd={handleAdd} />
    </div>
  );
}
