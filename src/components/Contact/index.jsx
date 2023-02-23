import emailjs from "@emailjs/browser";

import "./Contact.css";
import studywithme from "../../assets/image/studywithme.png";
import { ThemeContext } from "../../App";
import { useContext, useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      to_name: name,
      from_name: email,
      message: message,
      type: type,
    };
    emailjs
      .send("service_o30t79m", "template_pxv9azf", data, "EaorJxHa-TRN96FI7")
      .then(
        (result) => {
          alert("send successfully");
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { theme } = useContext(ThemeContext);
  return (
    <div className="container my-5" id="contact">
      <div className="row mt-5">
        <div className="col-sm-6">
          <img src={studywithme} className="w-100"></img>
        </div>
        <div className="col-sm-6">
          <div
            className="card border-0 shadow"
            style={
              theme === "light"
                ? { backgroundColor: "#fff" }
                : { backgroundColor: "#222" }
            }
          >
            <h3 className="card-title text-center">Contact Form</h3>
            <div className="card-body">
              <form onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="form-label">Họ và tên</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your gmail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Sub type</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Full-time</option>
                    <option>Working Student</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Your message</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    id="comment"
                    name="text"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  />
                </div>
                <div>
                  <button className="btn btn-primary w-100" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
