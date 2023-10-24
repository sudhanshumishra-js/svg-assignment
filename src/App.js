import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthContextProvider from "./context/AuthContext";
import GameContextProvider from "./context/GameContext";
import RouterConfig from "./routes/RouteConfig";

function App() {
  return (
    <>
      <AuthContextProvider>
        <GameContextProvider>
          <BrowserRouter>
            <Header />
            <RouterConfig />
          </BrowserRouter>
        </GameContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
