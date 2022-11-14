import { BlogProvider } from "./contexts/Blog";
import { Header, Feed } from "./containers";

export default function App() {
  return (
    <BlogProvider>
      <Header />
      <Feed />
    </BlogProvider>
  );
}
