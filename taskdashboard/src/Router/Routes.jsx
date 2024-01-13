import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Home/Home";


const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default Routes;