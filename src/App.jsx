import "./App.css";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import PopularProducts from "./sections/PopularProducts";
import Subscribe from "./sections/Subscribe";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import SpecialOffers from "./sections/SpecialOffers";
import CustomerReviews from "./sections/CustomerReviews";
import SuperQuality from "./sections/SuperQuality";

function App() {
    return (
        <main className="relative">
            <Nav />

            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <PopularProducts />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding padding-x py-10">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffers />
            </section>
            <section className="padding bg-pale-blue">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-[32px] py-16 w-full">
                <Subscribe />
            </section>
            <section className="padding-x bg-black padding-t pb-8 ">
                <Footer />
            </section>
        </main>
    );
}

export default App;
