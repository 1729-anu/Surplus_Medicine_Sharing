import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [form, setForm] = useState({ name: '', quantity: '', location: '', contact: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/medicines')
      .then(res => res.json())
      .then(data => setMedicines(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/medicines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(() => window.location.reload());
  };

  return (
    <div className="App">
      <h1>Surplus Medicine Sharing</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Quantity" onChange={e => setForm({ ...form, quantity: e.target.value })} />
        <input placeholder="Location" onChange={e => setForm({ ...form, location: e.target.value })} />
        <input placeholder="Contact" onChange={e => setForm({ ...form, contact: e.target.value })} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {medicines.map((med, index) => (
          <li key={index}>{med.name} - {med.quantity} - {med.location} - {med.contact}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
