
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Intro from "../pages/intro";
import Login from "../pages/login";
import Mail from "../pages/mail";
import NotFound from "../pages/notFound";
import Pay from "../pages/pay";
import Test from "../pages/test";
import Validation from "../pages/validation";

const AppRouting = () => {

    return (
        <Routes>

            <Route path={"/validation-software"} element={<Mail />} />
            <Route path={"/validation-software/validation"} element={<Validation />} />
            <Route path={"/validation-software/curso/introduccion"} element={<Intro />} />
            <Route path={"/validation-software/curso/test"} element={<Test />} />

            <Route path={"*"} element={<NotFound />} />

        </Routes>
    );
}


export default AppRouting;