import React, { createContext, useReducer } from "react";
import data from "./components/Data";
import Modal from "./components/Modal";
import Table from "./components/Table";
import { reducer } from "./Contex/reducer";
import Navbar from './components/Navbar'

export const MyContext = createContext();

const initialState = {
  data,
  select:{ } ,
  showModal: false,
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 mt-5">
            <Navbar />
            <Table />
            {state.showModal && <Modal />}
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default App;
