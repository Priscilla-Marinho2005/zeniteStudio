import Nav from "./UX/Nav";
import Footer from "./UX/Footer";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="overflow-x-hidden">
            <Nav />

            <main className="mx-auto max-w-340">{children}</main>

            <Footer />
        </div>
    );
}
