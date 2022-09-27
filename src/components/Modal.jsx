import { Modal } from "antd";
import React, { useContext, useState } from "react";
import { MyContext } from "../App";

const ModalVisble = () => {
  const { dispatch, state } = useContext(MyContext);
  const [first, setfirst] = useState(state.select);

  const handleChange = (e) => {
    const newData = {
      ...first,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    setfirst(newData);
  };
  return (
    <>
      <Modal
        title="Table Modal"
        open={state.showModal}
        onOk={() =>
          dispatch({
            type: state.select.key ? "SAVE_DATA" : "ADD_USER",
            payload: first,
          })
        }
        onCancel={() => dispatch({ type: "SHOW_MODAL", payload: false })}
      >
        <form className="d-grid gap-3">
          <div className="form-group">
            <label>First Name</label>
            <input
              value={first.firstname}
              onChange={handleChange}
              name="firstname"
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={handleChange}
              name="lastname"
              value={first.lastname}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>User Name</label>
            <input
              onChange={handleChange}
              name="username"
              value={first.username}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-check">
            <input
              onClick={handleChange}
              name="active"
              checked={first.active}
              type="checkbox"
              className="form-check-input p-2 "
            />
            <label className="form-check-label mx-2">Active</label>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalVisble;
