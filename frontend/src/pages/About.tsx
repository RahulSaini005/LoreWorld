import Header from '../components/Header'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">About LoreWorld</h1>
          
          <p className="text-lg text-gray-700">
            Welcome to <strong>LoreWorld</strong> — your ultimate destination for exploring the vast universe of books from around the globe. 
            Inspired by the rich offerings of World of Books, LoreWorld is designed to bring every genre, every classic, and every hidden gem right to your fingertips.
          </p>

          <p className="text-lg text-gray-700">
            At LoreWorld, we understand that finding the right book can be overwhelming. With thousands of titles spanning multiple categories and genres, users often struggle to discover books that match their interests. Our platform solves this by providing a structured and intuitive way to navigate through books, categories, and detailed product pages, so you can make informed choices quickly and easily.
          </p>

          <p className="text-lg text-gray-700">
            From fiction to non-fiction, from classics to contemporary releases, LoreWorld allows you to browse categories such as Crime & Mystery, Fantasy, Historical Fiction, Science Fiction, and much more. 
            Each category is carefully curated to help you discover books that you might never have stumbled upon otherwise. Our mega dropdown navigation ensures that you can access any category with a single click, providing a seamless browsing experience.
          </p>

          <p className="text-lg text-gray-700">
            Each book in LoreWorld comes with detailed information: title, author, price, publisher, publication date, ISBN, reviews, and ratings. Our platform even allows you to explore related and recommended books, so you can continuously discover new stories and authors that match your taste. The goal is to transform the experience of book exploration into an effortless and enjoyable journey.
          </p>

          <p className="text-lg text-gray-700">
            Behind the scenes, LoreWorld leverages a modern tech stack: <strong>React</strong> for a dynamic frontend, <strong>Node.js and NestJS</strong> for a robust backend, and <strong>MongoDB</strong> for fast and scalable data storage. Tailwind CSS ensures a responsive and visually appealing design, while React Router and client-side state management allow for smooth navigation and persistent browsing history.
          </p>

          <p className="text-lg text-gray-700">
            Ethical data usage is at the core of LoreWorld. We scrape data responsibly from World of Books using safe techniques, caching, and rate-limiting to ensure we respect the source site while delivering accurate and up-to-date information to our users. Every detail, from reviews to product metadata, is stored with integrity and reliability.
          </p>

          <p className="text-lg text-gray-700">
            Whether you are an avid reader, a student, a researcher, or just someone looking to explore new stories, LoreWorld is your companion for all things literary. By bringing together structured navigation, rich metadata, and a seamless user experience, our platform aims to redefine how readers discover, explore, and enjoy books online.
          </p>

          <p className="text-lg text-gray-700">
            In essence, LoreWorld is not just a website — it’s a gateway to the endless universe of literature, inspired by the vast catalog of World of Books and enhanced with modern technology for optimal discovery and engagement.
          </p>

          <p className="text-lg text-gray-700 text-center font-semibold mt-8">
            Dive into the world of books with LoreWorld — where every story awaits.
          </p>
        </div>
      </main>
    </div>
  )
}
