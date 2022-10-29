
import { Route, Routes } from "react-router-dom";
import Fines from "../pages/fines";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Register from "../pages/register";
import Results from "../pages/result";
import Video from "../pages/video";

const AppRouting = () => {

    return (
        <Routes>

            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/presentation"} element={<Video />} />
            <Route path={"/fines"} element={<Fines />} />
            <Route path={"/fines/results"} element={<Results />} />

            <Route path={"*"} element={<NotFound />} />

        </Routes>
    );
}


export default AppRouting;