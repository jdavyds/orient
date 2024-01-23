import { useState } from "react";
import { Btn } from "../../utils/Button";
import { Link } from "react-router-dom";

export default function Form() {
  const [state, setState] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    message: "",
    date: "",
    destination: "",
    airport: "",
    carrion: "",
    standard: "",
    oversized: "",
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
        date: state.date,
        destination: state.destination,
        airport: state.airport,
        carrion: state.carrion,
        standard: state.standard,
        oversized: state.oversized,
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
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <h3 className="text-2xl md:text-[48px] text-head mx-auto">
        Secure Your Travel Protection in Advance!
      </h3>
      <p className="mx-auto md:w-2/3 md:lg text-center">
        We are always committed to serving you. We value you and we are always
        ready to give you the best. Providing excellent service is our goal.{" "}
        <br />
        <b className="inline">NOTE:</b> Please note that is important to check
        the{" "}
        <Link to="/pricing" className="text-primary font-bold inline">
          {" "}
          pricing page
        </Link>{" "}
        before filling this form
      </p>
      <section className="flex flex-col gap-10 md:px-20">
        {sent && (
          <div className="flex flex-col gap-8 text-center items-center mt-10">
            <h3 className="text-2xl md:text-[40px] font-[600] capitalize">
              Congratulations!
            </h3>
            <p className="md:text-[22px] md:w-1/2 w-full">
              Congratulations and thank you for choosing Orient Services to
              safeguard your travel! Your successful pre-booking ensures that
              your travel security needs are in expert hands. {`We're`} thrilled
              to be a part of your journey and are committed to providing you
              with the highest standards of protection and service excellence. A
              confirmation mail will be sent to you with all the details you
              need. Should you have any additional requests or inquiries before
              your departure, please {`don't`} hesitate to reach out to us at
              info@orientservices.ca
            </p>
            <Btn name="Go Back Home" link="/" />
          </div>
        )}
        {!sent && (
          <div className="w-full flex flex-col gap-5">
            <form
              className="w-full flex flex-col  md:grid grid-cols-2 gap-10"
              onSubmit={handleSubmit}
            >
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
                <span className="flex items-center gap-1">Departure Date</span>
                <input
                  type="date"
                  placeholder="Select Date"
                  className="h-12 px-3 border z-10 w-full outline-none rounded"
                  value={state.date}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      date: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-1 w-full">
                <span className="flex items-center gap-1">
                  What country/city are you traveling to?
                </span>
                <input
                  type="text"
                  placeholder="Enter Destination"
                  className="h-12 px-3 border z-10 w-full outline-none rounded"
                  value={state.destination}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      destination: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-1 w-full">
                <span className="flex items-center gap-1">
                  Preferred airport
                </span>
                <input
                  type="text"
                  placeholder="Enter Airport"
                  className="h-12 px-3 border z-10 w-full outline-none rounded"
                  value={state.airport}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      airport: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-1 w-full">
                <span className="flex items-center gap-1">
                  How many carrion bags do you have?
                </span>
                <select
                  className="h-12 px-3 border z-10 w-full outline-none rounded"
                  value={state.carrion}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      carrion: e.target.value,
                    }))
                  }
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 w-full">
                <span className="flex items-center gap-1">
                  How many standard bags do you have?
                </span>
                <select
                  className="h-12 px-3 border z-10 w-full outline-none rounded"
                  value={state.standard}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      standard: e.target.value,
                    }))
                  }
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 w-full">
                <span className="flex items-center gap-1">
                  How many oversized bags do you have?
                </span>
                <select
                  className="h-12 px-3 border z-10 w-full outline-none rounded"
                  value={state.oversized}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      oversized: e.target.value,
                    }))
                  }
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 w-full col-span-2">
                <span className="flex items-center gap-1">
                  Additional Comment
                </span>
                <textarea
                  placeholder="If the contents of the bag is fragile. Kindly indicate as well"
                  className="h-40 px-3 border z-10 w-full py-5 outline-none rounded"
                  value={state.message}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      message: e.target.value,
                    }))
                  }
                />
              </label>
            </form>
            <nav className="flex flex-col gap-5 w-full">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                <span>
                  I agree to the{" "}
                  <Link
                    to="/terms-and-condition"
                    className="inline font-semibold"
                  >
                    {" "}
                    Terms & Conditions
                  </Link>{" "}
                  of orient services{" "}
                </span>
              </label>
              <button
                type="submit"
                className="font-[600]  lato bg-primary text-white  h-10 min-w-fit  md:w-1/2 rounded px-5 mx-auto"
              >
                PRE-BOOK SERVICE
              </button>
            </nav>
          </div>
        )}
      </section>
    </main>
  );
}
