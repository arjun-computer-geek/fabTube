import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Player } from "components";
import { Home, Login, Signup, VideoDetailsPage } from "pages";

const App = () => {
  return (<>
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
    />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/watch" element={<VideoDetailsPage />} >
          <Route path=":videoId" element={<Player />} />
        </Route>
      </Routes>
    </Router>
  </>
  );
};

export default App;
