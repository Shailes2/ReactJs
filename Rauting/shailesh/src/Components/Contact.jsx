import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-success p-2 bg-primary text-center">
        Contact Us Page
      </h1>

      <div className="container mt-4">
        {/* Contact Info */}
        <div className="mb-4">
          <h4>Name: Tourism World</h4>
          <h5>Phone: +91 7820980061</h5>
          <h5>Address: Pune , Maharashtra, India</h5>
        </div>

        {/* Contact Form */}
        <form>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
