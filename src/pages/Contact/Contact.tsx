import { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react";
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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const validateName = (name: string) => {
    if (!name.trim()) {
      return translations[language].nameRequired;
    }
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return translations[language].emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return translations[language].invalidEmail;
    }
    return "";
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) {
      return translations[language].messageRequired;
    }
    return "";
  };

  const updateErrors = () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });
  };

  useEffect(() => {
    updateErrors();
  }, [language]);

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

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });

    if (name === "name") {
      setErrors({
        ...errors,
        name: validateName(formData.name),
      });
    } else if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(formData.email),
      });
    } else if (name === "message") {
      setErrors({
        ...errors,
        message: validateMessage(formData.message),
      });
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setIsCaptchaVerified(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      return;
    }

    if (!isCaptchaVerified) {
      alert(translations[language].completeCaptcha);
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
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">{translations[language].name}</label>
                <input
                  placeholder={translations[language].whatName}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={50}
                  required
                />
                {(touched.name || isSubmitted) && errors.name && (
                  <span className="error">{errors.name}</span>
                )}
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
                  onBlur={handleBlur}
                  maxLength={50}
                  required
                />
                {(touched.email || isSubmitted) && errors.email && (
                  <span className="error">{errors.email}</span>
                )}
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
                  onBlur={handleBlur}
                  rows={1}
                  required
                />
                {(touched.message || isSubmitted) && errors.message && (
                  <span className="error">{errors.message}</span>
                )}
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
