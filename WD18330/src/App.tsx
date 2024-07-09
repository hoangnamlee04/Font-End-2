import { useRoutes } from "react-router-dom";

import ProductDetail from "./pages/ProductDetail";
import Homepage from "./pages/HomePage";

const routeConfig = [
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "product/:id", element: <ProductDetail /> },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
