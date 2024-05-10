import { RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { router } from "./route/AppRoute";
import { useEffect } from "react";
import {
  getThemeFromLocalStore,
  setThemeToLocalStore,
} from "./utils/LocalStore";

function App() {
  useEffect(() => {
    const theme = getThemeFromLocalStore();
    if (!theme) {
      setThemeToLocalStore("light");
    }
  });

  return <RouterProvider router={router} />;
}

export default App;
