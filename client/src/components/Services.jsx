import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container services-grid">
        <div className="services-intro">
          <p className="eyebrow-path">/services</p>
          <h2 className="section-heading">Two things, done properly.</h2>
        </div>

        <div className="services-list">
          <div className="service">
            <h3 className="service-name">Business websites</h3>
            <p className="service-desc">
              A full site for a business that needs a proper home online — clear
              information, easy navigation, and a design that matches how you actually
              want to be seen.
            </p>
          </div>
          <div className="service">
            <h3 className="service-name">Landing pages</h3>
            <p className="service-desc">
              A focused, single page built around one offer, product, or campaign —
              designed to load fast and lead to one clear action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
