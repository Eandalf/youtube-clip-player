import { createRoot } from "react-dom/client";
import Router from "@app/router";

const App = () => {
  return (<Router />);
};

const main = () => {
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);
  root.render(<App />);
};

export default main;
