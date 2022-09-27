import React, { useContext } from "react";
import { MyContext } from "../App";

const Navbar = () => {

  const { dispatch } = useContext(MyContext);



  return (
    <div className="container">
      <div className="row justify-content-between mb-3">
        <div className="col-4">
          <div className="form-group d-flex align-items-center">
            <input
              onChange={(e)=>dispatch({type:'SEARCH', payload:e.target.value})}
              name="firstname"
              type="text"
              placeholder="Search ..."
              className="form-control rounded-left"
            />
            <input
              className=" form-check-input m-3"
              style={{ height: "25px", width: "35px" }}
              type="checkbox"
              onChange={(e) => dispatch({type:'CHECKED',payload:e.target.checked})}
            />
            <label>Active</label>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <button className="btn btn-success" onClick={()=>dispatch({type:'ADD_USER_MODAL'})}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
