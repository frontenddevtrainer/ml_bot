const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 rounded-md shadow-md mb-8">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">ChatBot</h1>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800">
        +
      </button>
    </header>
  );
};

export default Header
