import { useContext } from "react";
import { MyContext } from "../App";
import { ReactComponent as YourSvg } from "../images/delete.svg";
import { ReactComponent as YourSvg2 } from "../images/pen.svg";

const Rendering =  (item, record) => {
  const { dispatch } = useContext(MyContext);
  return (
    <div>
      <YourSvg2
        onClick={() => dispatch({ type: "GET_ID", payload: item })}
        className="btn btn-light border mx-2"
        style={{ width: "50px" }}
      />
      <YourSvg
        className="btn btn-light border mx-2"
        style={{ width: "50px" }}
        onClick={() => dispatch({ type: "DELETE", payload: item.key })}
      />
    </div>
  );
};


 export const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Firts Name",
    dataIndex: "firstname",
    key: "firstname",
    // render: (text) => <a>{text}</a>,
  },

  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "User Name",
    dataIndex: "username",
    key: "username",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count",
  },
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
    render: (text) => (
      <input
        className="form-check-input"
        type="checkbox"
        checked={text}
        onChange={()=>void{}}
      />
    ),
  },
  {
    title: "Action",
    key: "action",
    render: Rendering,
  },
];
