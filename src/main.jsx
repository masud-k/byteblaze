
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Bookmarks from './pages/Bookmarks.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: '/bookmarks',
        element: <Bookmarks/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
