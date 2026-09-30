import Layout from "../components/Layout";
import Hero from "../components/index/Hero";
import WhatWeDo from "../components/index/WhatWeDo";
import About from "../components/index/Abount";

export default function Index() {
    return (
        <div>
            <Layout>
                <Hero />
                <WhatWeDo />
                <About />
            </Layout>
        </div>
    );
}
