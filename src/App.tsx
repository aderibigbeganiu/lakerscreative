import ConstructionIcon from "./components/ConstructionIcon";

function App() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex flex-col items-center space-y-4">
        <ConstructionIcon className="h-24 w-24 text-yellow-500 dark:text-yellow-300" />
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
          Under Construction
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md text-center">
          This page is currently under construction. We're working hard to get
          it ready for you. Stay tuned!
        </p>
      </div>
    </section>
  );
}

export default App;
