import { useState, useRef, ChangeEvent, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.scss";
import useTitleUpdate from "../../hooks/useTitleUpdate";
import { translations } from "../../translations/contact/translations";
import { useLanguage } from "../../hooks/useLanguage";
import { useOutletContext } from "react-router-dom";
import { useVisibleSections } from "../../hooks/useVisibleSections";
import { AnimatedSection } from "../../components/AnimatedSection/AnimatedSection";
import { CloseIcon } from "../../assets/svg/CloseIcon";

interface ContactProps {
  isLoadingComplete: boolean;
}

export const Contact = () => {
  const { isLoadingComplete } = useOutletContext<ContactProps>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const messageTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { language } = useLanguage();
  const visibleSections = useVisibleSections(isLoadingComplete);

  const adjustTextareaHeight = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "message" && messageTextareaRef.current) {
      adjustTextareaHeight(messageTextareaRef.current);
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setIsCaptchaVerified(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      alert(translations[language].completeCaptcha); // Tradução para o alerta do reCAPTCHA
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mpwpwlla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsCaptchaVerified(false);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        alert(translations[language].errorSendingMessage);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert(translations[language].errorSendingMessage);
    }
  };

  useTitleUpdate(translations[language].title);

  return (
    <div className={`contact-container ${!isLoadingComplete ? "hidden" : ""}`}>
      <AnimatedSection id="content" visibleSections={visibleSections}>
        <div className="content">
          <div className="left-content">
            <div className="title">
              <span>{translations[language].contact}</span>
              <h1>{translations[language].letsWork}</h1>
            </div>
            <p>{translations[language].gotProject}</p>
          </div>

          <div className="right-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{translations[language].name}</label>
                <input
                  placeholder={translations[language].whatName}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={50}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{translations[language].email}</label>
                <input
                  placeholder={translations[language].whatEmail}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={50}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  {translations[language].message}
                </label>
                <textarea
                  ref={messageTextareaRef}
                  placeholder={translations[language].whatMessage}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={1}
                  required
                />
              </div>
              <div className="recaptcha-wrapper">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfHqPYqAAAAAOdazYg65LqwdlSWXK4iilaw4ekZ"
                  onChange={handleCaptchaChange}
                />
              </div>
              <button type="submit" disabled={!isCaptchaVerified}>
                {translations[language].sendMessage}
              </button>
            </form>
          </div>

          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <div
                  className="close-popup"
                  onClick={() => setShowPopup(false)}
                >
                  <span>{translations[language].close}</span> <CloseIcon />
                </div>
                <p>{translations[language].messageSent}</p>
              </div>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
};
