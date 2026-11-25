export default function ContactSection() {
  return (
    <div className="field-guide field-details">
      <section id="contact" className="detail-section" aria-labelledby="contact-heading">
        <div className="detail-heading">
          <p className="field-kicker">09 / Contact</p>
          <h2 id="contact-heading">Let&apos;s <em>talk.</em></h2>
          <p>Open to full-time roles, freelance work, and collaborations.</p>
        </div>
        <div className="detail-list contact-list">
          <a href="mailto:anubhavtandon6424@gmail.com"><span><small>Email</small><strong>anubhavtandon6424@gmail.com</strong></span><span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/anubhav-tandon-9b8737245/" target="_blank" rel="noopener noreferrer"><span><small>Connect</small><strong>LinkedIn</strong></span><span aria-hidden="true">↗</span></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anubhavtandon6424@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noopener noreferrer"><span><small>Write a message</small><strong>Open Gmail</strong></span><span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  );
}
