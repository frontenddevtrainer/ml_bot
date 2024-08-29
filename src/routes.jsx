import LoginScreen from "./screens/login/login.component";

export const routes = [
  {
    path: "/",
    element: <div className="p-10">Homepage</div>,
  },
  {
    path: "/login",
    element: <LoginScreen/>,
  },
  {
    path: "/chat",
    element: <div>Chat</div>,
  },
];
