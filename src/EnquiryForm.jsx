import React from "react";
import axios from "axios";
function EnquiryForm() {
  const [enquiryForm, setEnquiryForm] = React.useState({
    name: "",
    emailAddress: "",
    category: "Service Request",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/enquiry`,
        enquiryForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      alert("Enquiry submitted successfully.");
      setEnquiryForm({
        name: "",
        emailAddress: "",
        category: "Service Request",
        message: "",
      });
    } catch (err) {
      console.error(err);
      const apiMessage = err?.response?.data?.message;

      if (Array.isArray(apiMessage) && apiMessage.length > 0) {
        const readableMessages = apiMessage
          .map((issue) => {
            const field = issue?.path?.[0] || "field";
            const message = issue?.message || "Invalid value";
            return `${field}: ${message}`;
          })
          .join("\n");

        alert(readableMessages);
        return;
      }

      alert("Unable to submit the form. Please try again later.");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-700">
      <form
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleFormSubmit}
        action=""
      >
        <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block  text-sm font-medium mb-2 ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
            required
            minLength={2}
            maxLength={50}
            value={enquiryForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="emailAddress"
            className="block  text-sm font-medium mb-2 "
          >
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email address"
            required
            value={enquiryForm.emailAddress}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block  text-sm font-medium mb-2 "
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="block w-full p-2 border border-gray-300 rounded"
            required
            value={enquiryForm.category}
            onChange={handleChange}
          >
            <option value="Service Request">Service Request</option>
            <option value="Feedback">Feedback</option>
            <option value="Complaint">Complaint</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block  text-sm font-medium mb-2 ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your message"
            value={enquiryForm.message}
            onChange={handleChange}
            required
            rows={4}
            minLength={2}
            maxLength={200}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit now
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;
