import "./App.css";

import { useImmerReducer } from "use-immer";

import StateContext from "./contexts/StateContext/StateContext";
import DispatchContext from "./contexts/DispatchContext/DispatchContext";
import Routers from "./configues/Routers";
function App() {
  const initialState = {
    flashMessage: [],
    user: {
      userName: "Guest",
      avatar:
        "https://cdn0.iconfinder.com/data/icons/man-user-human-avatar-person-profile-business/100/01B-1User-512.png",
    },
    isLogin: false,
  };
  const ourReducer = (draft, action) => {
    switch (action.type) {
      case "flashMessage":
        draft.flashMessage.push(action.value);
        break;
      case "login":
        draft.isLogin = true;
        draft.user = action.value;
        break;
    }
  };
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <div className="App">
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Routers />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
