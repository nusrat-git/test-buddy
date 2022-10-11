import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Analytics from './components/Analytics/Analytics';
import Blogs from './components/Blogs/Blogs';
import Subjects from './components/Subjects/Subjects';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Subjects></Subjects>
        },
        {
          path: '/analytics',
          element: <Analytics></Analytics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
