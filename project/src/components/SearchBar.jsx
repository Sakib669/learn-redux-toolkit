import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    console.log(text);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex p-10 gap-6 w-full"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search anything"
          className="input flex-1 outline-none input-primary rounded text-2xl"
          required
        />
        <button type="submit" className="btn btn-info active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
