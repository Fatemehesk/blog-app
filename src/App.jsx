import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <main>
          <Outlet />
          <h3>home</h3>
        </main>
      </div>
    </>
  );
}

export default App;
