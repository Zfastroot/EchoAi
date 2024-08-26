import {Outlet} from "react-router-dom"
import "./DashboardLayout.css"

const DashboardLayout = ()=>{
    return(
        <div className="DashboardLayout">
            <div className="menu">Menu</div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;