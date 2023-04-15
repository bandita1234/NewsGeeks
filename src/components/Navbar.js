import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const [val, setVal] = useState("");

  const navigate = useNavigate();

  const handleSearch = () =>{
    navigate(`/search?q=${val}`);
  }

  const handleChange = (e) =>{
    setVal(e.target.value);
    console.log(val);
  }

  return (
    <div className="navbar">
      <div className="topics">
        <div className="logo">
          <h3>NewsGeeks</h3>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/news/business">Business</Link>
        </div>
        <div>
          <Link to="/news/entertainment">Entertainment</Link>
        </div>
        <div>
          <Link to="/news/health">Health</Link>
        </div>
        <div>
          <Link to="/news/science">Science</Link>
        </div>
        <div>
          <Link to="/news/sports">Sports</Link>
        </div>
        <div>
          <Link to="/news/technology">Technology</Link>
        </div>
      </div>
      <div className="searchField">
        <div>
          <input type="search" value={val} onChange={(e)=>handleChange(e)} name="search" id="" placeholder="Search..." />
        </div>
        {/*<Link to={`/search?q=${val}`} >Search</Link>*/}
        <button type="submit" onClick={handleSearch}>Search</button>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
