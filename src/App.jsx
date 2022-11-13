import { BlogProvider } from "./contexts/Blog";
import { Header } from "./containers/Header";

export default function App() {
  return (
    <BlogProvider>
      <Header />
    </BlogProvider>
  );
}
