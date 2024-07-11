import { useRoutes } from "react-router-dom";

import ProductDetail from "./pages/ProductDetail";
import Homepage from "./pages/HomePage";
import Register from "./pages/Register";

const routeConfig = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "product/:id", element: <ProductDetail /> },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
