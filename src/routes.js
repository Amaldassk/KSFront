import ProductDashboard from './components/products/ProductDashboard';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home'
import Products from './pages/Products';
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'

export const privateRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path:"/profile",
        element:<Profile/>
    },
    {
        path:"/profile/products",
        element:<ProductDashboard/>
    },
    {
        path:"/products",
        element:<Products/>
    },
    {
        path:"/contact",
        element:<ContactUs/>
    }
];

export const publicRoutes = [
    {
        path:'/signup',
        element:<SignUp/>
    }
];