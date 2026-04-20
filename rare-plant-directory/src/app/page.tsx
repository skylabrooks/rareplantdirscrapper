export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Discover the World&apos;s Premium Botanical Events</h1>
        <p>
          Join a community of serious collectors. Find localized rare plant expos, 
          preview vendor inventory before the doors open, and buy with confidence.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Find an Event Near Me</button>
          <button className="btn-secondary">Browse Verified Vendors</button>
        </div>
      </section>

      <section className="section" id="events">
        <h2 className="section-title">Upcoming Expos & Swaps</h2>
        <div className="grid">
          {/* Mock Event 1 */}
          <div className="card">
            <div className="card-image-placeholder">
              <span>Event Image</span>
              <div className="badge">VIP SELLING FAST</div>
            </div>
            <div className="card-content">
              <div className="card-date">May 15-16, 2026</div>
              <h3 className="card-title">PlantCon Houston 2026</h3>
              <div className="card-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                NRG Arena, Houston, TX
              </div>
              <p style={{ opacity: 0.8, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                The largest plant hobbyist convention in the world. Over 200 premium vendors.
              </p>
              <button className="btn-secondary" style={{ width: "100%" }}>View 42 Vendor Previews</button>
            </div>
          </div>

          {/* Mock Event 2 */}
          <div className="card">
            <div className="card-image-placeholder" style={{ backgroundColor: "#D4AF37", color: "#fff" }}>
              <span>Event Image</span>
            </div>
            <div className="card-content">
              <div className="card-date">June 08, 2026</div>
              <h3 className="card-title">The Texas Aroid Show</h3>
              <div className="card-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Berry Center, Cypress, TX
              </div>
              <p style={{ opacity: 0.8, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Hyper-focused on rare aroids. Meet specialized regional nurseries and expert breeders.
              </p>
              <button className="btn-secondary" style={{ width: "100%" }}>View 15 Vendor Previews</button>
            </div>
          </div>

          {/* Mock Event 3 */}
          <div className="card">
            <div className="card-image-placeholder" style={{ backgroundColor: "#E07A5F", color: "#fff" }}>
              <span>Event Image</span>
            </div>
            <div className="card-content">
              <div className="card-date">July 22, 2026</div>
              <h3 className="card-title">Botanicals and Brews</h3>
              <div className="card-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Mayflower Brewing Co, MA
              </div>
              <p style={{ opacity: 0.8, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                A casual lifestyle market featuring uncommon plant sellers and local craft beer.
              </p>
              <button className="btn-secondary" style={{ width: "100%" }}>View 8 Vendor Previews</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
