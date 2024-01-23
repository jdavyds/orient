import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Btn } from "../../utils/Button";

export default function Form() {
  const [state, setState] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/info@orientservices.ca", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: state.first + " " + state.last,
        email: state.email,
        phone: state.phone,
        message: state.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSent(true);
        setState({
          first: "",
          last: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <section className="flex flex-col gap-10 py-10 md:py-20 px-5 md:px-20">
      {sent && (
        <div className="flex flex-col gap-8 text-center items-center mt-10">
          <h3 className="text-2xl md:text-[40px] font-[600] capitalize">
            THANK YOU FOR CONTACTING US
          </h3>
          <p className="md:text-[22px] md:w-1/2 w-full">
            Thank you for reaching out to Orient Services! We appreciate you
            taking the time to connect with us. Your inquiry is valuable to us,
            and {`we'll`} be reviewing your message shortly. Our dedicated team
            is committed to providing prompt and personalized assistance. Rest
            assured, {`we'll`} do our utmost to address your query or request
            with the highest priority.
          </p>
          <Btn name="Go Back Home" link="/" />
        </div>
      )}
      {!sent && (
        <div className="w-full flex flex-col md:grid grid-cols-2 gap-10 md:gap-20">
          <div className="hidden md:flex flex-col gap-5">
            <h3 className="text-lg md:text-3xl">HELLO!</h3>
            <p className="md:text-lg">
              We are always committed to serving you. We value you and we are
              always ready to give you the best. Providing excellent service is
              our goal.
            </p>
            <p className="text-2xl md:text-[34px]">OR</p>
            <div className="flex flex-col gap-3">
              <h3 className="font-[600] md:font-[700] text-lg text-head">
                Locations
              </h3>
              <p>Ontario,Canada</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-[600] md:font-[700] text-lg text-head">
                Opening Hours
              </h3>
              <p>Monday - Sunday</p>
              <p>4:00 am - 7 pm</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-[600] md:font-[700] text-lg text-head">
                CONNECT WITH US
              </h3>
              <nav className="flex gap-2 items-center text-xl">
                <a
                  href="http://facebook.com/orientservices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/orientservices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="http://twitter.com/orientservices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="http://youtube.com/orientservices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </nav>
              <span className="flex gap-2 items-center">
                info@orientservices.ca
              </span>
              <h3 className="font-[600] md:font-[700] text-lg text-head">
                Customer Support
              </h3>
              <span className="flex gap-2 items-center">+234 9065448855</span>
              <span className="flex gap-2 items-center">+234 809 595 6720</span>
            </div>
          </div>
          <div className="w-full">
            <form
              className="w-full flex flex-col  gap-10 "
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col md:grid grid-cols-2 gap-5 items-center">
                <label className="flex flex-col gap-1 w-full">
                  <span className="flex items-center gap-1">First Name</span>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="h-12 px-3 border z-10 w-full outline-none rounded"
                    value={state.first}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        first: e.target.value,
                      }))
                    }
                  />
                </label>
                <label className="flex flex-col gap-1 w-full">
                  <span className="flex items-center gap-1">Last Name</span>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="h-12 px-3 border z-10 w-full outline-none rounded"
                    value={state.last}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        last: e.target.value,
                      }))
                    }
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1 w-full">
                <span className="flex items-center gap-1">Email</span>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="h-12 px-3 border z-10 w-full outline-none rounded"
                  value={state.email}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-1 w-full">
                <span className="flex items-center gap-1">Phone</span>
                <input
                  type="tel"
                  placeholder="Enter Phone"
                  className="h-12 px-3 border z-10 w-full outline-none rounded"
                  value={state.phone}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      phone: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-1 w-full">
                <span className="flex items-center gap-1">
                  Reason For Contacting Us
                </span>
                <select className="h-12 px-3 border z-10 w-full outline-none rounded">
                  <option disabled selected>
                    Select Reason
                  </option>
                  <option>General Inquiry</option>
                  <option>Request a Quote</option>
                  <option>Request a Service</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 w-full">
                <span className="flex items-center gap-1">Message</span>
                <textarea
                  placeholder="Enter Message"
                  className="h-32 px-3 border z-10 w-full py-5 outline-none rounded"
                  value={state.message}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      message: e.target.value,
                    }))
                  }
                />
              </label>
              <nav className="flex items-center justify-center gap-5 w-full">
                <button
                  type="submit"
                  className="font-[600]  lato bg-primary text-white  h-10 min-w-fit  md:w-1/2 rounded px-5"
                >
                  SEND MESSAGE
                </button>
              </nav>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
