import {Link , Outlet} from "react-router-dom";
import "./RootLayout.css"

const RootLayout = ()=>{
    return(
        <div className="RootLayout">
            <header>
                <Link to="/">
                    <img src="/logo.png" alt="" />
                    <span>Echo AI</span>
                </Link>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default RootLayout ;