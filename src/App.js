import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import NotFound from "./pages/NotFound/NotFound";
import StateContext from "./contexts/StateContext/StateContext";
import DispatchContext from "./contexts/DispatchContext/DispatchContext";
import FlashMessage from "./components/FlashMessage/FlashMessage";

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
    const [state, dispatch] = useImmerReducer(ourReducer, initialState);

    return (
      <div className="App">
        <StateContext.Provider value={state}>
          <DispatchContext.Provider value={dispatch}>
            <Router>
              <Header />
              <FlashMessage messages={state.flashMessage} />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/Contactus" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>
          </DispatchContext.Provider>
        </StateContext.Provider>
      </div>
    );
  };
}

export default App;
