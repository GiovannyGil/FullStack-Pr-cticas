import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RegisterPage from './pages/registerPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
            <h1 className="text-4xl font-bold">APP TAKS</h1>
            <Routes>
              {/* to define the routes to app task with react-router-dom */}
              <Route path="/" element={<h1>Home Page</h1>} /> {/** Route Home */}
              <Route path="/login" element={<LoginPage />} /> {/** Route Login */}
              <Route path="/register" element={<RegisterPage />} /> {/** Route Register */}
              <Route path="/tasks" element={<h1>Tasks Page</h1>} /> {/** Route Tasks */}
              <Route path="/add-task" element={<h1>Task Page</h1>} /> {/** Route Tasks */}
              <Route path="/tasks/:id" element={<h1>update Task</h1>} /> {/** Route Update Task */}
              <Route path="/profiel" element={<h1>Profile</h1>} /> {/** Route Profile */}
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App