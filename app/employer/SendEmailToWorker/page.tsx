"use client";
// pages/sendMessage.tsx
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const SendMessageToWorker = () => {
  useEffect(() => {
    emailjs.init('27zRtipJKLDd1UhSr'); // Replace with your actual public key
  }, []);

  const [recipientEmail, setRecipientEmail] = useState('');
  const [fromName, setFromName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_hpzpzi5', 'template_rtttoqc', e.currentTarget)
      .then((result) => {
        console.log('Email successfully sent!');
        setSuccess(true);
        setRecipientEmail('');
        setFromName('');
        setMessage('');
        setError('');
      }, (error) => {
        console.error('Failed to send email:', error);
        setError('Failed to send the message. Please try again later.');
        setSuccess(false);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Siųsti el. paštą darbuotojui</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-gray-700 text-sm font-bold mb-2">
            Jūsų vardas
          </label>
          <input type="text" id="from_name" name="from_name" value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="recipient_email" className="block text-gray-700 text-sm font-bold mb-2">
            Gavėjo el. paštas
          </label>
          <input type="email" id="recipient_email" name="recipient_email" value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Žinutė
          </label>
          <textarea id="message" name="message" value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Siųsti
          </button>
        </div>
      </form>
      {success && <div className="text-green-500 text-center">Message sent successfully!</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}
    </div>
  );
}

export default SendMessageToWorker;

