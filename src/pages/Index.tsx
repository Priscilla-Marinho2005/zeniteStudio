import Layout from "../components/Layout";
import Hero from "../components/index/Hero";
import WhatWeDo from "../components/index/WhatWeDo";
import About from "../components/index/Abount";
import ZenithPillars from "../components/index/ZenithPillars";
import Testimonials from "../components/index/Testimonials";
import CTA from "../components/index/CTA";

export default function Index() {
    return (
        <div>
            <Layout>
                <Hero />
                <WhatWeDo />
                <About />
                <ZenithPillars />
                <Testimonials />
                <CTA />
            </Layout>
        </div>
    );
}
