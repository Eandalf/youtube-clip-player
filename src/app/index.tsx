import { createRoot } from 'react-dom/client';

const App = () => {
    return (<h1>Youtube Clip Player</h1>);
};

const main = () => {
    const domNode = document.getElementById('root');
    const root = createRoot(domNode);
    root.render(<App />);
};

export default main;
