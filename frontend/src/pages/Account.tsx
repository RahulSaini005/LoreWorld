
import { useState } from 'react'
import Header from '../components/Header'

export default function Account() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-100 p-6 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </h1>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-medium hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </main>
    </div>
  )
}
