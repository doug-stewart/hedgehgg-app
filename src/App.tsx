import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthLayout } from "./features/auth/components/auth-layout/AuthLayout";
import { UserHeader } from "./features/auth/components/user-header/UserHeader";
import { Home } from "./routes/Home";
import { Nest } from "./routes/Nest";
import { Profile } from "./routes/Profile";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserHeader />
        <Routes>
          <Route element={<Home />} index />
          <Route element={<AuthLayout />}>
            <Route element={<Nest />} path="/nest" />
            <Route element={<Profile />} path="/profile" />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
