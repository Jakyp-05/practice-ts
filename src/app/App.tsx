import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./router/router";
import { Providers } from "./providers/provider";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <MyRoutes />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
