import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import SMediaService from '../views/sMediaService';
import SignUp from '../views/registration/signup/signup';
import Login from '../views/registration/login/Login';  
import ForgotPassword from '../views/registration/forgot-password/ForgotPassword';
import CropDiagnosisHome from "../views/CropDiagnosis";

const routes = [
    {
        components: <Home/>,
        to: '/'
    },
    {
        components: <Service />,
        to: '/services'
    },
    {
        components: <ContactUs />,
        to: '/contactUs'
    },
    {
        components: <IndividualService />,
        to: '/individualService'
    },
    {
        components: <AboutUs />,
        to: '/aboutUs'
    },
    {
        components: <ProjectDetails />,
        to: '/projectDetails'
    },
    {
        components: <SMediaService />,
        to: '/sMediaService'
    },
    {
        components: <SignUp />,  
        to: '/signUp'  
    },
    {
        components: <Login />,  
        to: '/login'  
    },
    {
        components: <ForgotPassword />,  
        to: '/forgot-password'  
    },
    {
        components: <CropDiagnosisHome />,  // Reference the new CropDiagnosisHome view
        to: '/crop-diagnosis'               // Define its route
      },
];

export default routes;
