import { AppRoutes } from "./routes";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="font-main relative w-full mx-auto">
      <div className="  min-h-dvh">
        <AppRoutes />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
