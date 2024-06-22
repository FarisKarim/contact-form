"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    queryType: false,
    message: false,
    consent: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      // Dynamically updating uses brackets... because id is a variable with the actual property name.
      [id]: type === 'checkbox' ? checked : value
    });
    setErrors({
      ...errors,
      [id]: false
    });
  };

  const handleQuery = (selection) => {
    setFormData({
      ...formData,
      // queryType is not a variable, it is literally a known key of formData... so no brackets are needed.
      queryType: selection,
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      queryType: false,
    };
    if (formData.firstName.trim() === "") {
      newErrors.firstName = true;
      valid = false;
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = true;
      valid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = true;
      valid = false;
    }
    if (formData.queryType.trim() === "") {
      newErrors.queryType = true;
      valid = false;
    }
    if (formData.message.trim() === "") {
      newErrors.message = true;
      valid = false;
    }

    if (!formData.consent) {
      newErrors.consent = true;
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted");
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center pt-4 pb-4 xs:pt-0 xs:pb-0 xs:h-screen">
        <form
          onSubmit={handleSubmit}
          className="sm:mt-[5vh] lg:mt-[10vh] lg:[mb-10vh] sm:mb-[5vh] w-[90vw] sm:w-full max-w-lg bg-white shadow-md rounded-xl pt-6 px-5 pb-4 sm:pt-6 sm:px-8 sm:pb-8"
        >
          <span className="text-2xl">Contact Us</span>

          <div className="flex flex-col sm:flex-row mt-5 h-15 justify-between gap-2">
            <div className="flex flex-col w-full sm:w-1/2">
              <label
                className="text-gray-500 text-xs font-semibold mb-1"
                htmlFor="username"
              >
                First Name *
              </label>
              <input
                className={`border hover:border-green-600 rounded-lg text-sm py-2 px-3 mb-2 text-gray-600 ${
                  errors.firstName ? "border-red-500" : "border-gray-400"
                }`}
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
              />
              <div className="h-3">
                {errors.firstName && (
                  <p className="text-red-500 text-xs">This field is required</p>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label
                className="text-gray-500 text-xs font-semibold mb-1"
                htmlFor="username"
              >
                Last Name *
              </label>
              <input
                className={`border rounded-lg hover:border-green-600 text-sm py-2 mb-2 px-3 text-gray-600 ${
                  errors.lastName ? "border-red-500" : "border-gray-400"
                }`}
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
              />
              <div className="h-3">
                {errors.lastName && (
                  <p className="text-red-500 text-xs">This field is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-5">
            <label
              className="text-gray-500 text-xs font-semibold mb-1"
              htmlFor="username"
            >
              Email Address *
            </label>
            <input
              className={`border rounded-lg hover:border-green-600 text-sm py-2 mb-2 px-3 text-gray-600 ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
              id="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="h-3">
              {errors.email && (
                <p className="text-red-500 text-xs">
                  Please enter a valid email address
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full mt-5">
            <label
              className="text-gray-500 text-xs font-semibold mb-1"
              htmlFor="username"
            >
              Query Type *
            </label>
            <div className="flex flex-col sm:flex-row gap-2 h-11 mb-2">
              <div
                className={`border w-full sm:w-1/2 flex items-center gap-2 border-gray-400 rounded-lg px-5 py-2 sm:py-0 hover:border-green-600 text-gray-600 ${
                  formData.queryType === "General Enquiry"
                    ? "bg-green-100 border border-green-600"
                    : "border border-gray-400"
                }`}
                onClick={() => handleQuery("General Enquiry")}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    formData.queryType === "General Enquiry"
                      ? "bg-green-600 border border-green-600"
                      : "border border-gray-400"
                  }`}
                />
                <div className="text-sm text-gray-600">General Enquiry</div>
              </div>

              <div
                className={`border w-full sm:w-1/2 flex items-center gap-2 border-gray-400 rounded-lg px-5 py-2 sm:py-0 hover:border-green-600 text-gray-600 ${
                  formData.queryType === "Support Request"
                    ? "bg-green-100 border border-green-600"
                    : "border border-gray-400"
                }`}
                onClick={() => handleQuery("Support Request")}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    formData.queryType === "Support Request"
                      ? "bg-green-600 border border-green-600"
                      : "border border-gray-400"
                  }`}
                />
                <div className="text-sm text-gray-600">Support Request</div>
              </div>
            </div>
            <div className="h-3">
              {errors.queryType && (
                <p className="text-red-500 text-xs">
                  Please enter a valid query type
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full mt-5">
            <label
              className="text-gray-500 mt-6 xs:mt-0 text-xs font-semibold mb-1"
              htmlFor="username"
            >
              Message *
            </label>
            <input
              className={`border hover:border-green-600 mb-2 text-xs text-wrap overflow-auto border-gray-400 rounded-lg py-2 px-3 h-[20vh] sm:h-[10vh] text-gray-600 ${
                errors.message ? "border-red-500" : ""
              }`}
              id="message"
              type="text"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="h-3">
              {errors.message && (
                <p className="text-red-500 text-xs">This field is required</p>
              )}
            </div>
          </div>
          <div className="flex mb-2 mt-5">
            <input id="consent" value={formData.consent} onChange={handleChange} className="accent-green-600" type="checkbox" />
            <span className="text-sm ml-4 text-gray-500">
              I consent to being contacted by the team *
            </span>
          </div>
          <div className="h-3">
            {errors.consent && (
              <p className="text-red-500 text-xs">To submit this form, please consent to being contacted</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-8 border h-11 rounded-lg bg-green-600 text-white "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
