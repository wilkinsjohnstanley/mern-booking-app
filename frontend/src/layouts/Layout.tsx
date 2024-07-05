import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        // align elements in a column using flexbox
        // it makes sure the app takes up the whole screen
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    );
};
export default Layout;

