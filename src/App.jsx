import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "./utilities/users-service";
// pages
import AuthPage from "./pages/AuthPage/AuthPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage"; 
// import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
// components
import NavBar from "./components/NavBar/NavBar";
import styles from './App.module.css';
import SearchPage from "./pages/SearchPage/SearchPage";
import EditPatch from "./components/EditPatch/EditPatch";

function App() {
  // array destructuring
  const [user, setUser] = useState(getUser());
  const [collectionId, setCollectionId] = useState(null);
  const [openedURL, setOpenedURL] = useState(null);
  const [openedTitle, setOpenedTitle] = useState(null);

  return (
    <main className={styles.App}>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/patches/new" element={<SearchPage userId={user._id} />} />

            <Route path="/patches" element={<CollectionsPage userId={user._id} />} />

            <Route
  path="/edit/:patchId"
  element={({ match }) => (
    <EditPatch
      patchId={match.params.patchId}
      collectionId={collectionId}
      openedURL={openedURL}
      openedTitle={openedTitle}
      setOpenedURL={setOpenedURL}
      setOpenedTitle={setOpenedTitle}
    />
  )}
/>
 

            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}

            <Route path="/*" element={<Navigate to="/patches/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
