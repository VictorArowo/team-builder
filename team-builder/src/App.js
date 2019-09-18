import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';
import Form from './Form';

const initialTeamMembers = [
  {
    id: uuid(),
    name: 'Victor',
    email: 'victor@gmail.com',
    role: 'Backend Engineer'
  },
  {
    id: uuid(),
    name: 'Richany',
    email: 'richany@gmail.com',
    role: 'Frontend Engineer'
  },
  {
    id: uuid(),
    name: 'Isaac',
    email: 'isaac@gmail.com',
    role: 'Full Stack Developer'
  },
  {
    id: uuid(),
    name: 'John',
    email: 'jon@gmail.com',
    role: 'Python Translator'
  }
];

const initialFormData = {
  id: '',
  name: '',
  email: '',
  role: ''
};

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);

  const onInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isEditing) {
      let current = teamMembers.find(a => a.id === formData.id);
      current.name = formData.name;
      current.email = formData.email;
      current.role = formData.role;
    } else {
      setTeamMembers([...teamMembers, { ...formData, id: uuid() }]);
    }
    setFormData(initialFormData);
    setIsEditing(false);
  };

  const edit = member => {
    setFormData({
      id: member.id,
      name: member.name,
      email: member.email,
      role: member.role
    });
    setIsEditing(true);
  };

  return (
    <div className="App">
      <h1>Team Members Editor</h1>

      {teamMembers.map(member => (
        <div key={member.id}>
          <span>{`${member.name} - ${member.email}- ${member.role}`}</span>
          <button onClick={() => edit(member)}>Edit Team Member</button>
        </div>
      ))}

      <Form
        onInputChange={onInputChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
}

export default App;
