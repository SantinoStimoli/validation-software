
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Results from "../pages/result";
import Video from "../pages/video";

const AppRouting = () => {

    return (
        <div>
            <ul className="flex">
                <li><NavLink to={'/sesion'}>Log In</NavLink></li>
                <li><NavLink to={'/curso'}>Presentation</NavLink></li>
                <li><NavLink to={'/inicio'}>Home</NavLink></li>
                <li><NavLink to={'/resultado'}>Results</NavLink></li>
            </ul>

            <Routes>

                <Route path={"/sesion"} element={<Login />} />
                <Route path={"/curso"} element={<Video />} />
                <Route path={"/inicio"} element={<Home />} />
                <Route path={"/resultado"} element={<Results />} />

                <Route path={"*"} element={<NotFound />} />

            </Routes>
        </div>
    );
}


export default AppRouting;