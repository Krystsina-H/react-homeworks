import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskEditor from './components/TaskEditor'

const App = () => {
  const [editingId, setEditingId] = useState(null)
  const handleCloseEditor = () => {
    setEditingId(null)
  }
  return (
    <>
      <h1>Список моих задач</h1>
      {editingId === null ? (
        <TaskForm />
      ) : (
        <TaskEditor
          key={editingId}
          taskId={editingId}
          onClose={handleCloseEditor}
        />
      )}

      <TaskList onEdit={setEditingId} isEditing={editingId !== null} />
    </>
  )
}
export default App
