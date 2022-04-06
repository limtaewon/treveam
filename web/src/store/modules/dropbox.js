//액션타입
const FIRSTAREA = "dropbox/FIRSTAREA";
const SECONDAREA = "dropbox/SECONDAREA";
//액션
export const firstarea = (select) => {
  return {
    type: FIRSTAREA,
    payload: select,
  };
};

export const secondarea = (select) => {
  return {
    type: SECONDAREA,
    payload: select,
  };
};

//state
const area_info = {
  farea: "null",
  sarea: "null",
};

//reducer;
export default function user(state = area_info, action) {
  switch (action.type) {
    case FIRSTAREA:
      return {
        ...state,
        farea: action.payload,
      };
    case SECONDAREA:
      return {
        ...state,
        sarea: action.payload,
      };

    default:
      return state;
  }
}
