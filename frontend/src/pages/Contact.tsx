import Header from '../components/Header'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Contact Us</h1>
          
          <p className="text-gray-700 mb-6 text-center">
            Have questions, suggestions, or feedback? Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
