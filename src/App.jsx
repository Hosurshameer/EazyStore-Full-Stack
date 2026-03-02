import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import EntrySplash from "./components/EntrySplash";

function App() {
  const navigation = useNavigation();
  const [showStartupSplash, setShowStartupSplash] = useState(true);
  const [startupLeaving, setStartupLeaving] = useState(false);

  useEffect(() => {
    const visibleMs = 5000;
    const fadeMs = 700;

    const t1 = setTimeout(() => setStartupLeaving(true), visibleMs);
    const t2 = setTimeout(() => setShowStartupSplash(false), visibleMs + fadeMs);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <Header />
      {showStartupSplash ? (
        <>
          <EntrySplash leaving={startupLeaving} showText={false} />
          <div className="invisible">
            <Outlet />
          </div>
        </>
      ) : navigation.state === "loading" ? (
        <EntrySplash />
      ) : (
        <Outlet />
      )}

      <Footer />
    </>
  );
}

export default App;
