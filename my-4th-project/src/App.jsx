import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'

function App() {
const [readtime, setreadtime] = useState(0)
const [bookmarks, setbookmarks] = useState([])
function addToReadTime(time) {
  setreadtime(readtime + time)
}
function addToBockmark(book) {
  // console.log(book)
  const newBookmarks = [...bookmarks,book]
  const alreadyuHave = bookmarks.find(books => books.id === book.id);
  alreadyuHave?setbookmarks(bookmarks):setbookmarks(newBookmarks);
}
function removeToBockmark(book) {
  const newBookmarks = bookmarks.filter(books => books.id !== book.id);
 setbookmarks(newBookmarks);
}
  return (
    <>
     <Header></Header>
     <div className='flex flex-wrap justify-between items-start container mx-auto'>
      <Blogs addToReadTime={addToReadTime} addToBockmark={addToBockmark}></Blogs>
      <Bookmarks readtime={readtime} bookmarks={bookmarks} removeToBockmark={removeToBockmark}></Bookmarks>
     </div>
    </>
  )
}

export default App
