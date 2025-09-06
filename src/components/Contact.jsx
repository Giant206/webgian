import React from "react";

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-card">
        <div className="contact-info">
          <p>
            Saya terbuka untuk kerja sama dan penawaran terkait proyek, baik dalam bidang 
            <strong> development, setup hosting, maupun pengelolaan server</strong>.  
            Jangan ragu untuk menghubungi saya jika ada ide atau kolaborasi menarik.
          </p>

          <a
            href="https://wa.me/6285171648088/?text=Halo%20Gian,%20saya%20ingin%20berdiskusi%20tentang%20proyek%20atau%20kerja%20sama."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💬 Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
