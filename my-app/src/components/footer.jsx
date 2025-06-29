const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-sm mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Task Manager App. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer