import "./Contact.css";
import studywithme from "../../assets/image/studywithme.png";
import { ThemeContext } from "../../App";
import { useContext } from "react";

function Contact() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
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
              <form>
                <div className="mb-3">
                  <label className="form-label">Họ và tên</label>
                  <input
                    className="form-control"
                    placeholder="Enter name"
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    placeholder="Enter name"
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Sub type</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
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
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button className="btn btn-primary w-100">Send </button>
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
