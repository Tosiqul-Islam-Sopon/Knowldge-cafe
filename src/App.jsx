import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleBookmarks = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleReadTime = (time, title) => {
    setReadTime(readTime + time);
    const remainingBookmark = bookmarks.filter(bookmark => bookmark !== title);
    setBookmarks(remainingBookmark);
  }

  return (
    <div className='mx-20 my-5 space-y-10'>
      <Header></Header>
      <div className='lg:flex '>
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadTime = {handleReadTime}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readTime={readTime}
        ></Bookmarks>
      </div>
    </div>
  )
}

export default App
