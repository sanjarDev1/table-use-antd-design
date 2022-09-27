import Count from "../components/Count";
import oldData from "../components/Data";
export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      console.log(action.payload);
      const newDatas = oldData.filter(
        (value) =>
          value.firstname
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          value.lastname.toLowerCase().includes(action.payload.toLowerCase()) ||
          value.username.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        data: newDatas,
      };

    case "CHECKED":
      const checked = oldData.filter((value) => value.active == action.payload);
      return {
        ...state,
        data: checked,
      };

      case "ADD_USER":
      const {firstname,lastname,username,active}=action.payload
        return {
          ...state,
          data:[
            ...state.data,
            {
              key:state.data.length,
              firstname,
              lastname,
              username,
              active,
              count:<Count/>
            }
          ],
          showModal:false,

        };
      
    case "ADD_USER_MODAL":
      return {
        ...state,
        showModal:true
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: false,
        select:{}
      };

    case "DELETE":
      const newData = state.data.filter((item) => item.key !== action.payload);
      return {
        ...state,
        data: newData,
      };

    case "SAVE_DATA":
      const data = state.data.map((item) =>
        item.key == action.payload.key ? { ...item, ...action.payload } : item
      );
      return {
        ...state,
        data,
        showModal: false,
        select:{}
      };

    case "GET_ID":
      return {
        ...state,
        select: action.payload,
        showModal: true,
      };

    default:
      return state;
  }
};
