import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.jsx";
import { ThemeProvider } from "./hooks/useTheme";
import { ChatProvider } from "./hooks/useChat";
import { TranslateProvider } from "./hooks/useTranslate.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ChatProvider>
        <TranslateProvider>
          <ReduxProvider store={store}>
            <RouterProvider router={router}>
              <App />
              {/* children */}
            </RouterProvider>
          </ReduxProvider>
        </TranslateProvider>
      </ChatProvider>
    </ThemeProvider>
  </StrictMode>
);
