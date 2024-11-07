import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup_Container() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Data:", formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow"
        style={{ width: "100%", maxWidth: "1000px", padding: "1rem" }}
      >
        <div className="card-body">
          <h2 className="card-title text-left">Create your account!</h2>
          <p>Sign up and start tracking your medication with us.</p>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="Med"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Simpson"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Ex.MedAlert00@xxxx.xxx"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="number" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  name="number"
                  placeholder="Phone number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Your Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I accept all the Terms and Privacy Policy
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Create Account
            </button>

            <p className="text-center mt-3">
              Don't have an account?{" "}
              <Link to="/Login" className="text-primary">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup_Container;
