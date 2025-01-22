import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link className="hover:text-gray-900" to="/">Home</Link>
        <Link className="hover:text-gray-900" to="/about">About</Link>
        <Link className="hover:text-gray-900" to="/services">Services</Link>
        <Link className="hover:text-gray-900" to="/media">Media</Link>
        <Link className="hover:text-gray-900" to="/gallery">Gallery</Link>
        <Link className="hover:text-gray-900" to="/contact">Contact</Link>
      </nav>
      <div className="flex justify-center space-x-5">
        <Link to="/facebook">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
        </Link>
        <Link to="/linkedin">
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
        </Link>
        <Link to="/instagram">
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
        </Link>
        <Link to="/messenger">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
        </Link>
        <Link to="/twitter">
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
        </Link>
      </div>

      <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reserved.</p>
    </footer>
  )
}

export default Footer