import { useEffect, useState } from "react";
import Book from "./Book";
export default function Blogs({addToReadTime,addToBockmark}) {
const [books,setBooks] = useState([])
useEffect(()=>{
    const fetchData = async ()=> {
        const res = await fetch('data.json');
        let data = await res.json()
        setBooks(data)
    }
    fetchData();
},[])
    return(
        <div className="w-[64%]">
        {
           books.map(book=> <Book key={book.id} book={book} addToReadTime={addToReadTime} addToBockmark={addToBockmark}></Book>) 
        }
        </div>
    )
}