import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="w-full p-4 bg-gray-100 text-gray-800">
            <ol className="flex justify-center h-8 space-x-2 text-gray-800">
                <li className="flex items-center">
                    <Link to="/" title="Back to homepage" className="flex items-center hover:underline">Home</Link>
                </li>
                <li className="flex items-center space-x-1">
                    <span className="text-gray-600">/</span>
                    <Link to="/parent" className="flex items-center px-1 capitalize hover:underline">shop</Link>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumb