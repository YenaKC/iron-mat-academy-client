function ContactPage() {
    return (
        <main>
            <section>
                <h1>CONTACT US</h1>
                <p>Get in touch with Iron Mat Academy.</p>
            </section>

            <section>
                <h2>CONTACT INFORMATION</h2>

                <p>📍 Carrer Guitard, 48, Barcelona</p>
                <p>📧 info@ironmatacademy.com</p>
                <p>📞 +34 600 123 456</p>
            </section>

            <section>
                <h2>SEND US A MESSAGE</h2>

                <form>
                    <input
                        type="text"
                        placeholder="Your Name"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                    />
                    <textarea 
                        placeholder="Your Message"                    
                    ></textarea>
                    <button type="submit">
                        Send Message
                    </button>
                </form>
            </section>
        </main>
    );
}

export default ContactPage;