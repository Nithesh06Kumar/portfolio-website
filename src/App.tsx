import { RouterProvider } from "react-router-dom";
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
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  });

  return <RouterProvider router={router} />;
}

export default App;
