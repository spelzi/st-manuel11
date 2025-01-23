// Importing required dependencies and components
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState({
    show: false,
    title: "",
    message: "",
    type: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { from_name, from_email, message } = formData;
    const newErrors = {};

    if (!from_name.trim()) newErrors.from_name = "Name is required.";
    if (!from_email.trim()) {
      newErrors.from_email = "Email is required.";
    } else if (!validateEmail(from_email)) {
      newErrors.from_email = "Please enter a valid email address.";
    }
    if (!message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      // Send email if form is valid
      emailjs
        .sendForm(
          "service_wibvkbn",
          "template_8h3snxv",
          form.current,
          "apsFheFF8lkT6bf3C"
        )
        .then(
          () => {
            setModal({
              show: true,
              title: "Success",
              message: "Email sent successfully!",
              type: "success",
            });
            // Reset form
            setFormData({
              from_name: "",
              from_email: "",
              message: "",
            });
          },
          (error) => {
            setModal({
              show: true,
              title: "Error",
              message: "Failed to send email. Please try again later.",
              type: "danger",
            });
          }
        );
    } else {
      setErrors(formErrors);
    }
  };

  const closeModal = () => {
    setModal({ show: false, title: "", message: "", type: "" });
  };

  return (
    <Container>
      <Row>
        <Col xl={2}></Col>
        <Col xl={8}>
          {" "}
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{ Width: "100%", marginTop: "80px" }}
            className="form-head"
          >
            <div>
              <input
                type="text"
                className="form-inputs"
                placeholder="Name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
              {errors.from_name && <div>{errors.from_name}</div>}
            </div>

            <div>
              <input
                type="email"
                className="form-inputs"
                placeholder="Email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
              {errors.from_email && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {errors.from_email}
                </div>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                className="form-inputs"
                rows={7}
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {errors.message}
                </div>
              )}
            </div>

            <button type="submit" className="form-btn">
              Send
            </button>
            <Modal show={modal.show} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>{modal.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{modal.message}</Modal.Body>
              <Modal.Footer>
                <Button variant={modal.type} onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        </Col>
        <Col xl={2}></Col>
      </Row>
    </Container>
  );
};

export default Contact;
