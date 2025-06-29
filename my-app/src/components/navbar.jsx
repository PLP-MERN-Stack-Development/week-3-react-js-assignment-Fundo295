import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Task Manager
        </Link>
        <div className="flex gap-2">
          <Button onClick={toggleTheme} variant="secondary">
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
          <Link to="/tasks">
            <Button variant="secondary">Tasks</Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary">API Data</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar