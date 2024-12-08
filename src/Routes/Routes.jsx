import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AllCampaign from "../Pages/AllCampaign";
import MyDonations from "../Pages/MyDonations";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyCampaign from "../Pages/MyCampaign";
import Login from "../assets/Components/LogInFrom/Login";
import Register from "../assets/Components/LogInFrom/Register";
import Error from "../Pages/Error";
import AboutUs from "../assets/Components/AboutUs/AboutUs";
import PraviteRoutes from "../PreviteRoutes/PraviteRoutes";
import DetailsPage from "../assets/Components/DetailsPage/DetailsPage";
import Update from "../assets/Components/Update/Update";
import DetailsHome from "../assets/Components/DetailsHome/DetailsHome";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/addCampaing'),
            },
            {
                path: '/AllCampaing',
                element: <AllCampaign></AllCampaign>,
                loader: () => fetch('http://localhost:5000/addCampaing'),
            },
           {
            path: '/AddNewCamping',
            element: <PraviteRoutes><AddNewCampaign></AddNewCampaign></PraviteRoutes>,
           },
           {
            path: '/MyCampaing',
            element: <PraviteRoutes><MyCampaign></MyCampaign></PraviteRoutes>,
            loader: () => fetch('http://localhost:5000/addCampaing'),
            
           },
            {
                path: '/MyDonation',
                element: <PraviteRoutes><MyDonations></MyDonations></PraviteRoutes>,
                loader: () => fetch('http://localhost:5000/addCampaing'),
            },
            {
                path: '/Login',
                element: <Login></Login>,
            },
            {
                path: '/Register',
                element: <Register></Register>,
            },
            {
                path: '/AboutUs',
                element: <AboutUs></AboutUs>,
            },
            {
                path: '/Details/:id',
                element: <PraviteRoutes><DetailsPage></DetailsPage></PraviteRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/addCampaing/${params.id}`),
            },
            {
                path: '/DetailsHome/:id',
                element: <PraviteRoutes><DetailsHome></DetailsHome></PraviteRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/addCampaing/${params.id}`),
            },
            {
                path: '/Update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/addCampaing/${params.id}`),
            },
           
        ]
       
    }
])

export default routes;