import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import TaskManager from './Pages/TaskManager'
import ApiData from './Pages/ApiData'
import Home from './Pages/Home'

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api-data" element={<ApiData />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App