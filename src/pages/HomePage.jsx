import { Link } from "react-router-dom";
import heroImage from "../assets/home-hero.png";

function HomePage() {
    return (
        <main>
            <section
                className="hero"
            >
                <h1>DOMINATE THE MAT</h1>
                <p>THE ULTIMATE NO-GI JIU-JITSU TRAINING ACADEMY</p>
                <Link to="/classes">VIEW SCHEDULE</Link>
            </section>

            <section className="card-grid">
                <h2>THIS WEEK'S TECHNIQUES</h2>

                <div>
                    <h3>Heel Hook</h3>
                    <p>Advanced leg lock focused on control and precision.</p>
                </div>

                <div>
                    <h3>Rear Naked Choke</h3>
                    <p>High percentage submission from back control.</p>
                </div>

                <div>
                    <h3>Triangle Choke</h3>
                    <p>Classic choke attack from guard position.</p>
                </div>

                <Link to="/techniques">Explore Techniques</Link>
            </section>

            <section className="card-grid">
                <h2>MEET OUR COACHES</h2>

                <div>
                    <h3>Coach Alex</h3>
                    <p>Black Belt</p>
                    <p>Pressure Passing Specialist</p>
                </div>

                <div>
                    <h3>Coach Minji</h3>
                    <p>Purple Belt</p>
                    <p>Guard Retention Specialist</p>
                </div>

                <Link to="/coaches">View Coaches</Link>
            </section>
        </main>
    );
}

export default HomePage;