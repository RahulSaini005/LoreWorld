import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

export default function Header() {
  const [open, setOpen] = useState(false) // Dropdown toggle

  const toggleDropdown = () => setOpen(prev => !prev)

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Header Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">World of Books</Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 relative">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Categories
            </button>

            {open && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg border rounded-md p-4 max-h-96 overflow-y-auto z-50">
                <h3 className="font-bold mb-2">By Category</h3>
                <ul className="space-y-1">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <Link
                        to={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}/products`}
                        className="block px-2 py-1 rounded hover:bg-blue-100"
                        onClick={() => setOpen(false)} // dropdown close on click
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/account" className="text-gray-700 hover:text-blue-600">Account</Link>
        </nav>
      </div>
    </header>
  )
}
