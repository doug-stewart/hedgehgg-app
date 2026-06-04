import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import WeatherSprite from "./assets/images/weather-sprite-animated.svg?react";
import { AuthLayout } from "./features/auth/components/auth-layout/AuthLayout";
import { User } from "./features/auth/components/user/User";
import { Home } from "./routes/Home";
import { Nest } from "./routes/Nest";
import { Profile } from "./routes/Profile";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <User />
          <Routes>
            <Route element={<Home />} index />
            <Route element={<AuthLayout />}>
              <Route element={<Nest />} path="/nest" />
              <Route element={<Profile />} path="/profile" />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <WeatherSprite />
    </>
  );
}

export default App;
