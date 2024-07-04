import Header from "../components/Header";
import Hero from "../components/Hero";

const Layout = () => {
    return (
        // align elements in a column using flexbox
        // it makes sure the app takes up the whole screen
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Hero/>
        </div>
    );
};
export default Layout;