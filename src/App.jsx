import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './views/Home'
import MyPlants from './views/MyPlants'
import About from './views/About'
import AddPlant from './views/AddPlant'
import UpdatePlant from './views/UpdatePlant'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/my-plants",
        element: <MyPlants />
      },
      {
        path: "/add-plant",
        element: <AddPlant />
      },
      {
        path: "/update-plant/:id",
        element: <UpdatePlant />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
],
{
  basename: "/flowerplant"
}
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
