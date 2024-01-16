import { AppRoutes } from "./routes";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="font-main">
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
