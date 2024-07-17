import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "product/:id", element: <ProductDetail /> },
];

function App() {
  const routes = useRoutes(routeConfig);

  return (
    <main>
      <Header />
      {routes}
      <Footer />
    </main>
  );
}

export default App;
