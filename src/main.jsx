import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/FooterContent";

createRoot(document.getElementById("root")).render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
);
