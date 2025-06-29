import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/card'

const Home = () => {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <Card>
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to Task Manager</h1>
        <div className="flex flex-col gap-2">
          <Link to="/tasks">
            <Button className="w-full">Go to Task Manager</Button>
          </Link>
          <Link to="/api-data">
            <Button className="w-full" variant="secondary">
              View API Data
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default Home