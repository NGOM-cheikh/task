
import React, { useState } from 'react';

const CompClient = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      alert(`Nom: ${nom}, Prénom: ${prenom}, Date de Naissance: ${dateNaissance}`);
    }
  };

  const validateFields = () => {
    if (!nom.match(/^[A-Za-z]{2,40}$/)) {
      alert('Nom invalide');
      return false;
    }
    if (!prenom.match(/^[A-Za-z]{2,30}$/)) {
      alert('Prénom invalide');
      return false;
    }
    const date = new Date(dateNaissance);
    const minDate = new Date('1950-01-01');
    if (isNaN(date.getTime()) || date < minDate) {
      alert('Date de Naissance invalide');
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom:</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </div>
      <div>
        <label>Prénom:</label>
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      </div>
      <div>
        <label>Date de Naissance:</label>
        <input type="date" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} />
      </div>
      <button type="submit">Valider</button>
    </form>
  );
}

export default CompClient;
