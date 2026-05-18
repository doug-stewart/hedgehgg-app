import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Services } from "./components/services/Services";
import { Shows } from "./components/shows/Shows";
import { Bookmarks } from "./features/bookmarks/components/bookmarks/Bookmarks";
import { Search } from "./features/search/components/search/Search";
import { Weather } from "./features/weather/components/weather/Weather";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Homepa.gg</h1>
      <Weather />
      <Search />
      <Services />
      <Shows />
      <Bookmarks />
    </QueryClientProvider>
  );
}

export default App;
