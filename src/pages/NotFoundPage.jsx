import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <main>
            <section className="not.found">
                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    The page you are looking for does not exists.
                </p>

                <Link to="/">
                    Back Home
                </Link>
            </section>
        </main>
    );
}

export default NotFoundPage;