import { Table } from "antd";
import React, { useContext } from "react";
import { columns } from "./Columns";
import { MyContext } from "../App.js";

const Tables = () => {
  const { state } = useContext(MyContext);

  return <Table bordered={true} columns={columns} dataSource={state.data} />;
};
export default Tables;
