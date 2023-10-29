import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    dob: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      userId: 'yourUserId', 
      age: formData.age,
      gender: formData.gender,
      dob: formData.dob,
      mobile: formData.mobile,
    };

    axios
      .post('https://mern-regi-app.onrender.com/homeData', dataToSend) 
      .then((result) => {
      })
      .catch((err) => {
        console.error(err);
      });

  };

  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(#00d5ff, #0095ff, rgba(93,0,255,.555))',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: 'black' }}>Login Success Page</h1>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </form>
      </div>
      <Link to="/login" className="btn btn-light my-5">
        Logout
      </Link>
    </div>
  );
}

export default Home;
