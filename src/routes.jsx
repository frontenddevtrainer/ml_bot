import HomepageScreen from "./screens/homepage/homepage.component";
import LoginScreen from "./screens/login/login.component";

export const routes = [
  {
    path: "/",
    element: <HomepageScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/chat",
    element: <div>Chat</div>,
  },
];
