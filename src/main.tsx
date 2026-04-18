import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import router from "./router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider storageKey="Asamblea de dios">
          <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
