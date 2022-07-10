import About from "../components/about";
import Categories from "../components/categories";
import Popular from "../components/popular";
import New from "../components/new";
import TariffPlan from "../components/plan";
import Footer from "../components/footer";

export default function Main() {
    return (
        <>
            <About />
            <Categories />
            <Popular />
            <New />
            <TariffPlan />
            <Footer />
        </>
    )
}