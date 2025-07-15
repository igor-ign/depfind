import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";

// biome-ignore lint: ignoring the line below because it came with the default vite template
createRoot(document.getElementById("root")!).render(<App />);
