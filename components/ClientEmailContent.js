// Notification clien
import React from 'react';

const ClientEmailContent = ({ objet, message }) => {
  return (
    <div>
      <h1>Merci de nous avoir contactés</h1>
      <p>Nous avons bien reçu votre message et nous vous en remercions.</p>
      <p>Objet : {objet}</p>
      <p>Message : {message}</p>
      <p>Nous reviendrons vers vous dans les plus brefs délais.</p>
    </div>
  );
};

export default ClientEmailContent;
