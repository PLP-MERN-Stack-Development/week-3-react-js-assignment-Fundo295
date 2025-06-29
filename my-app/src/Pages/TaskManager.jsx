import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Button from '../components/Button'
import Card from '../components/card'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow px-3 py-2 border rounded-md"
            placeholder="Add a new task"
          />
          <Button onClick={addTask}>Add</Button>
        </div>
      </Card>

      <div className="flex gap-2">
        <Button 
          variant={filter === 'all' ? 'primary' : 'secondary'} 
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button 
          variant={filter === 'active' ? 'primary' : 'secondary'} 
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button 
          variant={filter === 'completed' ? 'primary' : 'secondary'} 
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      {filteredTasks.length === 0 ? (
        <Card>
          <p className="text-center text-gray-500">No tasks found</p>
        </Card>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map(task => (
            <Card key={task.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5"
                  />
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                </div>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskManager