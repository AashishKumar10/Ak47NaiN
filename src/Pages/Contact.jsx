import "./Contact.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const mobile = e.target.mobile.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !mobile) {
      alert("Name aur Mobile required hai");
      return;
    }
    const whatsappNumber = "917568400241";
    const text = `New Contact Form Submission%0A
Name: ${name}%0A
Mobile: ${mobile}%0A
Email: ${email}%0A
Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section className="contact-section">

      <div className="contact-left">
        <h1>
          WE’D LOVE TO <br />
          HEAR FROM YOU <br />
          <span>FAMILY IS</span> <br />
          ABOUT STAYING <br />
          CONNECTED <br />
          REACH OUT AND <br />
          STAY <br />
          IN TOUCH
        </h1>
      </div>

      <div className="contact-middle">
        <div className="contact-info">
          <h3>CONTACT</h3>

          <p>
            <p className="ssssssss">3rd Floor, Wz139/4A,<br /> Shiv Shakti Mandir Road<br />
              Tilak Nagar,<br /> Delhi - 110018<br />
            </p>
            <strong>Mob:</strong> 7568400241
            <br />

            <p className="maii">
              <strong>Email: </strong>
              <a href="mailto:aashishnain10@gmail.com">
                aashishnain10@gmail.com
              </a>
            </p>
          </p>

          <div className="social-icons">
            <a href="https://www.instagram.com/lovely______nain/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/lovely______nain/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/aashish.nain.399/?_rdr" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/@lovelyNain10" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="NAME *" required />
          <input type="tel" name="mobile" placeholder="MOBILE *" required />
          <input type="email" name="email" placeholder="EMAIL" />
          <textarea name="message" placeholder="MESSAGE"></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
}