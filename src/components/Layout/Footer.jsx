import { Link } from "react-router-dom"

export const Footer = () => {
  const currentYear = new Date();
  return (
    <footer className="bg-white shadow border border-gray-200 dark:bg-gray-900 mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© {currentYear.getFullYear()} <Link to="/" className="hover:underline">Write Note™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
