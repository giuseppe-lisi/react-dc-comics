import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PostFooter from "./components/PostFooter";
import PreFooter from "./components/PreFooter";

createRoot(document.getElementById("root")).render(
    <>
        <Header />
        <Main />
        <PreFooter />
        <Footer />
        <PostFooter />
    </>
);
