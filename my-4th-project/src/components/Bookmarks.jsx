export default function Bookmarks({readtime,bookmarks,removeToBockmark}) {
    return(
        <>
       <div className="mt-5">
       <h2 className="text-2xl font-bold text-[#6047EC] bg-[#EFEDFD] py-5 px-12 rounded-lg">Spent time on read :{readtime} min</h2>
       <div className="bg-[#F3F3F3] mt-6 rounded-lg p-8">
        <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
        {
            bookmarks.map(books=> <div><h2 className="py-4 font-semibold text-lg">{books.title}</h2><button onClick={()=>{removeToBockmark(books)}}>remove</button></div>)
        }
       </div>
       </div>
        </>
    )
}