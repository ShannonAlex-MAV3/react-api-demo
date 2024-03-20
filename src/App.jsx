import { useState } from 'react'
import './App.css'
import PostsViewAndSearch from './components/posts/PostsViewAndSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PostsViewAndSearch />
    </>
  )
}

export default App
