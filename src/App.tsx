import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./routes/Home";
import { Nest } from "./routes/Nest";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} index />
          <Route element={<Nest />} path="/nest" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
