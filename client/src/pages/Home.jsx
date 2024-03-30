import React from 'react';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to My Secure Authentication platform built with the MERN stack!
      </h1>
      <p className='mb-4 text-slate-700'>
        My app focuses solely on providing a seamless and secure authentication experience for my users.
        Whether you're signing up for the first time or logging in to access your account, we prioritize simplicity,
        security, and user convenience.</p>

      <p className='mb-4 text-slate-700'>Key features of my authentication app include:</p>
      <ul className='text-slate-700 list-disc' style={{ paddingLeft: "20px" }}>
        <li>Effortless registration process</li>
        <li>Secure login with password encryption</li>
        <li>User-friendly interface for easy navigation</li>
        <li>Responsive design for optimal use on all devices</li>
      </ul>
    </div>
  );
}