import { lazy, Suspense } from "react";
import { BrowserRouter, Routes as RoutesApp, Route } from "react-router-dom";
import { Loading } from "./components/Loading";

const Home = lazy(()=> import("./pages/Home"));
const Contacts = lazy(()=> import("./pages/Contacts"));

const Routes = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<Loading/>}>
            <RoutesApp>
                <Route path="/" element={<Home />} />
                <Route path="contacts" element={<Contacts/>} />
            </RoutesApp>
        </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
