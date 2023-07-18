import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });    
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default Form;
