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
            Founded by Abhishek Kumar — Enterprise Data Architect (19+ years)
          </p>

          <p style={{ marginTop: "10px", color: dark ? "#999" : "#666" }}>
            Erlangen, Germany • +49 151 290 73 265 • abhishek.kumar@outlook.de •{" "}
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
          <h2 style={{ fontSize: "30px", color: accent }}>Companies I’ve Worked With</h2>

          {/* LOGO GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "30px",
              marginTop: "30px",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {/* Exyte */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn.phenompeople.com/CareerConnectResources/EGQEGGGLOBAL/images/210709_LOGO_Exyte_rgb_png1-1727264883385.png"
                alt="Exyte Logo"
                style={{ height: "50px", marginBottom: "10px" }}
              />
              <p style={{ fontSize: "14px", opacity: 0.8 }}>
                Exyte GmbH  
              </p>
            </div>

            {/* Adidas */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://thfvnext.bing.com/th/id/OIP.HqgH-vlDy6nzZ0lADncGTgHaEK?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Adidas Logo"
                style={{ height: "50px", marginBottom: "10px" }}
              />
              <p style={{ fontSize: "14px", opacity: 0.8 }}>
                Adidas AG
              </p>
            </div>

            {/* Abl Solutions */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://thfvnext.bing.com/th/id/OIP.FJmlEHg1W6Ho_VOrWwI82gAAAA?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Abl Solutions Logo"
                style={{ height: "50px", marginBottom: "10px" }}
              />
              <p style={{ fontSize: "14px", opacity: 0.8 }}>
                Abl Solutions
              </p>
            </div>

            {/* EA */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.bing.com/th/id/OIP.gJ0aixbSRH8MGWDGG3rxuQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="EA Logo"
                style={{ height: "50px", marginBottom: "10px" }}
              />
              <p style={{ fontSize: "14px", opacity: 0.8 }}>
                Electronic Arts
              </p>
            </div>

            {/* Virgin Media */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://logosmarken.com/wp-content/uploads/2021/11/Virgin-Media-Logo-2012-2013.png"
                alt="Virgin Media Logo"
                style={{ height: "50px", marginBottom: "10px" }}
              />
              <p style={{ fontSize: "14px", opacity: 0.8 }}>
                Virgin Media
              </p>
            </div>

            {/* BT */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://images.seeklogo.com/logo-png/2/1/bt-group-logo-png_seeklogo-23100.png"
                alt="BT Logo"
                style={{ height: "50px", marginBottom: "10px" }}
              />
              <p style={{ fontSize: "14px", opacity: 0.8 }}>
                BT Group
              </p>
            </div>

          {/* Outokumpu */}
          <div style={{ textAlign: "center" }}>
            <img
              src="https://www.underconsideration.com/brandnew/archives/outokumpu_logo_detail.png"
              alt="Outokumpu Logo"
              style={{ height: "50px", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "14px", opacity: 0.8 }}>Outokumpu</p>
          </div>


          {/* Generali Insurance */}
          <div style={{ textAlign: "center" }}>
            <img
              src="https://thfvnext.bing.com/th/id/OIP.Zi-ThGo0rz238PsIljZEtgHaDm?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Generali Insurance Logo"
              style={{ height: "50px", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "14px", opacity: 0.8 }}>Generali Insurance</p>
          </div>


          {/* Citi */}
          <div style={{ textAlign: "center" }}>
            <img
              src="https://logos-world.net/wp-content/uploads/2022/03/Citibank-Emblem.png"
              alt="Citi Logo"
              style={{ height: "50px", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "14px", opacity: 0.8 }}>Citi</p>
          </div>

          </div>

          


        </section>


        {/* FOUNDER */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "30px", color: accent }}>About the Founder</h2>
          <p>
            Abhishek Kumar is an Enterprise Data Architect with 19+ years of
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
        
          <p style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            📧 <strong>abhishek.kumar@outlook.de</strong>

            📞 <strong>+49 151 290 73 265</strong>

            <span style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                style={{ height: "18px" }}
              />
              <a
                href="https://wa.me/4915129073265"
                target="_blank"
                style={{ color: accent, textDecoration: "none", fontWeight: "bold" }}
              >
                WhatsApp
              </a>
            </span>
          </p>
        


        </section>
      </div>
    </div>
  );
}
