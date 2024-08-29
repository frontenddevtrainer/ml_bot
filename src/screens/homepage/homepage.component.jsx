import ChatGrid from "../../components/chat-grid/chat-grid.component";
import Header from "../../components/header/header.component";

const HomepageScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <ChatGrid />
    </div>
  );
};

export default HomepageScreen;
