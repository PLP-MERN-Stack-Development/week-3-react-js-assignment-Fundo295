import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto text-center py-12">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  )
}