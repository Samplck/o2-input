import 'styles/index.scss';
import ReactDOM from 'react-dom/client';
import HomePage from 'components/pages/Home';

const App = () => {
  return (
    <HomePage />
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);