import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherSprite from "./assets/images/weather-sprite-animated.svg?react";
import { Hotkeys } from "./components/hotkeys/Hotkeys";
import { Services } from "./components/services/Services";
import { Shows } from "./components/shows/Shows";
import { useSessions } from "./features/auth/hooks/useSession";
import { Bookmarks } from "./features/bookmarks/components/bookmarks/Bookmarks";
import { Search } from "./features/search/components/search/Search";
import { Weather } from "./features/weather/components/weather/Weather";

const queryClient = new QueryClient();

function App() {
  const { session, login, signup, logout } = useSessions();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>Homepa.gg</h1>
        {session?.user ? (
          <>
            <p>{session.user.id}</p>
            <button onClick={logout} type="button">
              Logout
            </button>
          </>
        ) : (
          <>
            <p>Not logged in</p>
            <button onClick={() => signup("hi@dou.gg")} type="button">
              Sign Up
            </button>
            <button onClick={login} type="button">
              Login
            </button>
          </>
        )}
        <Weather />
        <Search />
        <Services />
        <Shows />
        <Bookmarks />
        <Hotkeys />
      </QueryClientProvider>
      <WeatherSprite />
    </>
  );
}

export default App;
