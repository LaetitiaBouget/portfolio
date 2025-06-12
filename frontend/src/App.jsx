import { RouterProvider } from 'react-router';
import router from './router';
import './styles/index.scss';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
