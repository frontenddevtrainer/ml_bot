import MainLayout from "./components/main-layout/main-layout.component";
import ChatPage from "./screens/chatpage/chatpage.component";
import HomepageScreen from "./screens/homepage/homepage.component";
import LoginScreen from "./screens/login/login.component";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomepageScreen />,
      },
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "chat/:id",
        element: <ChatPage />,
      },
    ],
  },
];
