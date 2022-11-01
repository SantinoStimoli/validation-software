
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

            <Route path={"/validation-software/sesion/login"} element={<Login />} />
            <Route path={"/validation-software/sesion/validation"} element={<Validation />} />
            <Route path={"/validation-software/inicio"} element={<Home />} />
            <Route path={"/validation-software/curso/introduccion"} element={<Intro />} />
            <Route path={"/validation-software/curso/test"} element={<Test />} />

            <Route path={"*"} element={<NotFound />} />

        </Routes>
    );
}


export default AppRouting;