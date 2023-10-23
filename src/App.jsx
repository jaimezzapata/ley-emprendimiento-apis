import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDos from "./components/layouts/ToDos";
import Usuarios from "./components/layouts/Usuarios";

let router = createBrowserRouter([
  {
    path: "/to-dos",
    element: <ToDos />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  }
]);

function App() {
  return (
    <section>
      <RouterProvider router={router} /> 
    </section>
  );
}

export default App;
