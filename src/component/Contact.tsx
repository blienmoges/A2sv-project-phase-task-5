import { useForm } from "react-hook-form";
import "./contact.css";
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div className="contact-container">
      <div className="content-column">
        <h1>Your feedback helps us improve</h1>
        <p className="intro-text">
          We are here to help you and we'd love to connect with you.
        </p>
        <p className="response-time">We'll get back in 24h.</p>

        <div className="mission-box">
          <h3>Contribute to our mission</h3>
          <p>
            Curationist connects people to cultural knowledge from all over the
            world.
          </p>
          <button className="donate-button">Donate & Support</button>
        </div>
      </div>

      <div className="form-column">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <input
              id="name"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className={errors.name ? "error" : ""}
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <textarea
              id="message"
              rows={5}
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
              className={errors.message ? "error" : ""}
            />
            {errors.message && (
              <span className="error-message">{errors.message.message}</span>
            )}
          </div>

          <div className="captcha-row">
            <input type="checkbox" id="captcha" required />
            <label htmlFor="captcha">I'm not a robot</label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
