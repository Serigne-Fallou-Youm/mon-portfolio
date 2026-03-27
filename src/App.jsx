import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import APropos from "./Pages/APropos";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Layout from "./Composants/Layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Accueil /> }, 
        { path: "apropos", element: <APropos /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;