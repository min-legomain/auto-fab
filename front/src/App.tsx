import ApiButton from "./components/ApiButton";
import SyncForm from "./components/SyncForm";
import CardListTable from "./components/CardListTable";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-6 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <ApiButton />
      </div>
      <div className="w-full max-w-md">
        <SyncForm />
      </div>
      <div className="w-full max-w-3xl">
        <CardListTable />
      </div>
    </div>
  );
}

export default App;
