import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Nav from "./routes/NavBar/nav";
import Checkout from "./routes/checkout/checkout";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Nav />}>
        <Route
          index
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="shop/*"
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route path="auth" element={<Authentication />} />
        <Route
          path="checkout"
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
