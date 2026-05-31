import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  const theme = {
    backgroundColor: dark ? "#0d0d0d" : "#ffffff",
    color: dark ? "#e6e6e6" : "#222222",
    transition: "0.3s ease-in-out",
  };

  const accent = dark ? "#4da6ff" : "#0066cc";

  return (
    <div style={{ ...theme, minHeight: "100vh", padding: "40px 20px" }}>
      
      {/* TOGGLE BUTTON */}
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "10px 18px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            backgroundColor: accent,
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", lineHeight: 1.7 }}>

        {/* HERO */}
        <section style={{ textAlign: "center", marginBottom: "70px" }}>
          <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
            Precision‑Analytics
          </h1>
          <p style={{ fontSize: "22px", color: dark ? "#cccccc" : "#444" }}>
            Enterprise Data Architecture • Cloud Engineering • AI‑Driven Analytics
          </p>

          <p style={{ marginTop: "20px", color: dark ? "#999" : "#666" }}>
            Founded by Abhishek Kumar — Enterprise Data Architect (15+ years)
          </p>

          <p style={{ marginTop: "10px", color: dark ? "#999" : "#666" }}>
            Erlangen, Germany • +49 151 290 73 265 • abhishek_ku@yahoo.com •{" "}
            <a
              href="https://www.linkedin.com/in/abhishekku/"
              target="_blank"
              style={{ color: accent }}
            >
              LinkedIn
            </a>
          </p>
        </section>

        {/* MISSION */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "30px", color: accent }}>Our Mission</h2>
          <p>
            Precision‑Analytics helps enterprises build modern, scalable, and
            AI‑ready data platforms. We specialize in designing cloud‑native
            architectures, Lakehouse ecosystems, and real‑time analytics solutions
            that empower organizations to make fast, data‑driven decisions.
          </p>
          <p>
            With deep expertise across Azure, AWS, GCP, Databricks, Snowflake, and
            enterprise governance frameworks, we deliver architectures that are
            secure, compliant, and future‑proof.
          </p>
        </section>

        {/* SERVICES */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "30px", color: accent }}>What We Do</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
              marginTop: "25px",
            }}
          >
            <div>
              <h3>Enterprise Data Architecture</h3>
              <p>Data Mesh, Data Fabric, Lakehouse, DWH modernization.</p>
            </div>

            <div>
              <h3>Cloud & Platform Engineering</h3>
              <p>Azure, AWS, GCP secure and scalable ecosystems.</p>
            </div>

            <div>
              <h3>AI & ML Engineering</h3>
              <p>MLflow, Feature Stores, Vector DBs, RAG pipelines.</p>
            </div>

            <div>
              <h3>Data Governance & Security</h3>
              <p>Metadata, lineage, MDM, RBAC/ABAC, GDPR controls.</p>
            </div>

            <div>
              <h3>Real‑Time & Streaming Systems</h3>
              <p>Kafka, Event Hubs, CDC, event‑driven architectures.</p>
            </div>

            <div>
              <h3>Consulting & Architecture Leadership</h3>
              <p>Strategy, roadmaps, modernization programs.</p>
            </div>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "30px", color: accent }}>Featured Work</h2>

          <div style={{ marginTop: "25px" }}>
            <h3>Exyte GmbH — Enterprise Data Platform Modernization</h3>
            <p>
              Designed a Databricks + Azure Delta Lakehouse aligned with Data Mesh
              principles, enabling domain‑driven analytics and unified governance.
            </p>
          </div>

          <div style={{ marginTop: "25px" }}>
            <h3>Adidas AG — Cloud‑Native Analytics Transformation</h3>
            <p>
              Modernized BI ecosystem, engineered a 16TB Delta Lake, and built
              real‑time CDC pipelines powering mission‑critical operations.
            </p>
          </div>

          <div style={{ marginTop: "25px" }}>
            <h3>Abl Solutions — Real‑Time IoT & Streaming Platform</h3>
            <p>
              Built a high‑throughput GCP‑based platform handling 10,000+ devices
              with real‑time tracking and analytics.
            </p>
          </div>

          <div style={{ marginTop: "25px" }}>
            <h3>EA, Virgin Media, BT — Enterprise Data Engineering</h3>
            <p>
              Delivered large‑scale pipelines, telemetry ingestion, and enterprise
              DWH solutions across global teams.
            </p>
          </div>
        </section>

        {/* FOUNDER */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "30px", color: accent }}>About the Founder</h2>
          <p>
            Abhishek Kumar is an Enterprise Data Architect with 15+ years of
            experience across Germany, India, UK, and Finland. He has led
            large‑scale data transformations, designed modern cloud platforms, and
            enabled AI‑driven analytics for global enterprises.
          </p>
        </section>

        {/* CONTACT */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "30px", color: accent }}>Contact Us</h2>
          <p>
            Precision‑Analytics is available for consulting engagements, enterprise
            architecture leadership, and strategic data platform initiatives.
          </p>
          <p>
            📧 <strong>abhishek_ku@yahoo.com</strong>
            <br />
            📞 <strong>+49 151 290 73 265</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
