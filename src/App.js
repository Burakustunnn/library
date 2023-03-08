import AppRouter from './router/AppRouter';
import { ThemeProvider } from "styled-components"
import { renk} from "./styles/rnk.js"

function App() {
  return (
    <ThemeProvider renkler={renk}>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
