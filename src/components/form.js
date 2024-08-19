"use client";
import { useCallback, useState } from "react";
const Form = (props) => {
  const { createContent } = props;
  const [newContent, setNewContent] = useState("");
  const handleClick = useCallback(() => {
    createContent(newContent);
    setNewContent("");
  }, [newContent]);

  const handleChange = (e) => {
    setNewContent(e?.target?.value);
  };
  return (
    <div>
      <input
        type="text"
        value={newContent}
        onChange={handleChange}
        className="text-black p-3 rounded"
      />
      <br />
      <button
        onClick={handleClick}
        className="bg-orange-500 text-white p-3 mt-2"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
