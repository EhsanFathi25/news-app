import styled from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className={styled.footer}>
            <div className="container">
                <div className={styled.footerLayout}>
                    
                    <div className={styled.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.847144212017!2d51.38901967576391!3d35.68919772806686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e017f9b9d9e3f%3A0x9b2f6a2b0b6e0c3e!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1696012345678!5m2!1sen!2s"
                            width="100%"
                            height="250"
                            style={{ border: 0, borderRadius: "10px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                   
                    <div className={styled.infoWrapper}>

                        <form className={styled.contactForm} onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="نام شما" required />
                            <input type="email" placeholder="ایمیل شما" required />
                            <textarea placeholder="پیام شما" rows="4" required></textarea>
                            <button type="submit">ارسال پیام</button>
                        </form>
                        <p>© تمامی حقوق محفوظ است - خبرنامه </p>
                        <div className={styled.socials}>
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="تلگرام">
                                <FontAwesomeIcon icon={faTelegram} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="اینستاگرام">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="mailto:info@example.com" aria-label="ایمیل">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;