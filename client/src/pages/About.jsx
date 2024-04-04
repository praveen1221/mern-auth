import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function About() {
  const { currentUser } = useSelector(s => s.user)

  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>About</h1>

      {
        currentUser ?
          <>

            <p className='mb-4 text-slate-700'>
              This is a full-stack web application built with the MERN (MongoDB,
              Express, React, Node.js) stack. It includes authentication features that
              allow users to sign up, log in, and log out, and provides access to
              protected routes only for authenticated users.
            </p>
            <p className='mb-4 text-slate-700'>
              The front-end of the application is built with React and uses React
              Router for client-side routing. The back-end is built with Node.js and
              Express, and uses MongoDB as the database. Authentication is implemented
              using JSON Web Tokens (JWT).
            </p>
            <p className='mb-4 text-slate-700'>
              My app focuses solely on providing a seamless and secure authentication experience for my users.
              Whether you're signing up for the first time or logging in to access your account, we prioritize simplicity,
              security, and user convenience.</p>

              <Link to='/profile' className='text-blue-500 underline'> Click here</Link> or on User to check Profile Page.

          </>
          :
          <p className='mb-4 text-slate-700'>
            Please <Link to='/profile' className='text-blue-500 underline'> Sign In</Link> to check About and Profile Page.
          </p>
      }
    </div>
  );
}