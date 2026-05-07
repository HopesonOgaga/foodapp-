import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./constant/CartContext.jsx";
import { AuthProvider } from "./auth/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <App></App>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
);
