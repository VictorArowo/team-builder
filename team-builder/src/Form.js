import React from 'react';

const Form = ({ onInputChange, handleSubmit, formData }) => {
  return (
    <div>
      <h2>Add a New Team Member</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={onInputChange}
          value={formData.name}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={onInputChange}
          value={formData.email}
        />
        <br />
        <label>Role</label>
        <br />
        <input
          type="text"
          name="role"
          onChange={onInputChange}
          value={formData.role}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
