import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ConditionalPageRenderer, Header, Player, ProtectedRoute } from "components";
import { Explore, Feed, Home, Login, Profile, Signup, VideoDetailsPage } from "pages";
import LibraryModal from "components/modal/LibraryModal";

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
      <LibraryModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/explore" element={<Explore />} /> */}
        <Route element={<ProtectedRoute />} >
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/watch" element={<VideoDetailsPage />} >
          <Route path=":videoId" element={<Player />} />
        </Route>
        <Route path="/feed" element={<Feed />} >
          <Route path=":url" element={<ConditionalPageRenderer />} />
        </Route>
      </Routes>
    </Router>
  </>
  );
};

export default App;
