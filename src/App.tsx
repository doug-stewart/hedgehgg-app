import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Providers from "@/components/providers/Providers";

const Home = lazy(() => import("./routes/Home"));
const Nest = lazy(() => import("./routes/Nest"));

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route element={<Home />} index />
            <Route element={<Nest />} path="/nest" />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
