import { useState, useEffect } from 'react'
import { fetchPosts } from '../api/jsonPlaceholder'
import Button from '../components/Button'
import Card from '../components/card'

const ApiData = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const loadPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchPosts(page, 10, search)
      if (page === 1) {
        setPosts(data)
      } else {
        setPosts(prev => [...prev, ...data])
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [page, search])

  const handleSearch = (e) => {
    e.preventDefault()
    setPage(1)
  }

  return (
    <div className="space-y-4">
      <Card>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-3 py-2 border rounded-md"
            placeholder="Search posts..."
          />
          <Button type="submit">Search</Button>
        </form>
      </Card>

      {loading && page === 1 ? (
        <Card>
          <p className="text-center">Loading...</p>
        </Card>
      ) : error ? (
        <Card>
          <p className="text-center text-red-500">{error}</p>
        </Card>
      ) : posts.length === 0 ? (
        <Card>
          <p className="text-center text-gray-500">No posts found</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map(post => (
            <Card key={post.id}>
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
            </Card>
          ))}
        </div>
      )}

      {!loading && posts.length > 0 && (
        <div className="flex justify-center">
          <Button 
            onClick={() => setPage(prev => prev + 1)}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default ApiData
