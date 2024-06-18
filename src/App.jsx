import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Details } from './pages/Details/Details';
import { ThemeProvider } from './contexts/theme-context';


const router = createBrowserRouter([
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/:id",
      element: <Details />
    }
])

export default function App() {
    return(
      <ThemeProvider>
        <RouterProvider router={router} /> 
      </ThemeProvider>
        
    )
}