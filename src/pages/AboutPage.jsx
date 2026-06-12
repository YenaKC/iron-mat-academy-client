import aboutHero from "../assets/about-hero.png";

function AboutPage() {
    return (
        <main>
            <section>
                <h1>ABOUT US</h1>
                <p>Forging character and technique through discipline.</p>
            </section>

            <section className="about-hero">

                <img 
                    src={aboutHero} 
                    alt="Iron Mat Academy Training Facility" 
                    className="about-hero-image"
                />

                <div className="mission-card">
                    <h2>MISSION STATEMENT</h2>
                    <p>
                        At Iron Mat Academy, we believe that Jiu-Jitsu is more than just a sport.
                        Our mission is to forge resilient individuals through disciplined training,
                        technical growth, and a respectful community.
                    </p>
                    <p>
                        We focus on No-Gi grappling, functional movement, and consistent progress
                        for students of all levels.
                    </p>
                </div>
            </section>

            <section>
                <h2>OUR FACILITIES</h2>

                <div className="facility-list">
                    <div className="facility-item">🥋 Premium Mats</div>
                    <div className="facility-item">❄️ Climate Control</div>
                    <div className="facility-item">🔒 Full Locker Room</div>
                    <div className="facility-item">🚿 Shower Facilities</div>
                    <div className="facility-item">🎒 Gear Store</div>
                    <div className="facility-item">🪑 Waiting Area</div>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;