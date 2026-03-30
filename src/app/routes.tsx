import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Products } from "./components/pages/Products";
import { About } from "./components/pages/About";
import { Vision } from "./components/pages/Vision";
import { Resources } from "./components/pages/Resources";
import { Contact } from "./components/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "about", Component: About },
      { path: "vision", Component: Vision },
      { path: "resources", Component: Resources },
      { path: "contact", Component: Contact },
    ],
  },
]);
