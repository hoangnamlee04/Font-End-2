import { Link, Route, Routes, useRoutes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LayoutAdmin from "./components/layouts/layoutAdmin";
import List from "./pages/List";
import useProducts from "./hooks/useProduct";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const routes = useRoutes([]);
  const { products, handleDeleteProduct, handleAddProduct, handleEditProduct } =
    useProducts();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Thi WEB209
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ gap: 3, fontSize: 20 }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product/add">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product/list">
                  List Product
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger">Logout</button>
        </div>
      </nav>
      <ToastContainer />
      <div className="container">{routes}</div>
      <main className="mt-20 bg-white color-text">
        <div className="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
          <div className="content grow">
            <Routes>
              <Route path="/" element={<LayoutAdmin />}>
                <Route
                  index
                  element={
                    <List products={products} onDel={handleDeleteProduct} />
                  }
                />
                <Route
                  path="product/add"
                  element={<Add onAdd={handleAddProduct} />}
                />
                <Route
                  path="admin/edit/:id"
                  element={<Edit onEdit={handleEditProduct} />}
                />
              </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
