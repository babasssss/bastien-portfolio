// Notification personnel
import React from 'react'

const NotificationEmailContent = ({ nom, email, objet, message }) => {
  return (
    <div>
      <h1>Nouveau contact depuis le formulaire de contact</h1>
      <p>Nom : {nom}</p>
      <p>Email : {email}</p>
      <p>Objet : {objet}</p>
      <p>Message : {message}</p>
    </div>
  )
}

export default NotificationEmailContent
