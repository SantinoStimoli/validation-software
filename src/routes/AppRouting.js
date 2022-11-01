
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Intro from "../pages/intro";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Test from "../pages/test";
import Validation from "../pages/validation";

const AppRouting = () => {

    return (
        <Routes>

            <Route path={"/sesion/login"} element={<Login />} />
            <Route path={"/sesion/validation"} element={<Validation />} />
            <Route path={"/inicio"} element={<Home />} />
            <Route path={"/curso/introduccion"} element={<Intro />} />
            <Route path={"/curso/test"} element={<Test />} />

            <Route path={"*"} element={<NotFound />} />

        </Routes>
    );
}


export default AppRouting;