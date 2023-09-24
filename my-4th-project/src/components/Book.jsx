import { BsFillBookmarkHeartFill } from 'react-icons/bs';
export default function Book({book,addToReadTime,addToBockmark}) {
    const {id,title,description,banner_image,author,reading_time,date,hash}=book;
    const {author_name,author_image}=author;
    
    return (
        <>
        <img className="w-full my-6 rounded-lg" src={banner_image} alt="baner image" />
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap justify-start items-center">
                <img className="w-16" src={author_image} alt="" />
                <span className="ml-5"><p className="text-2xl font-bold">{author_name}</p>
                <p className="text-base font-semibold">{date}</p>
                </span>
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button onClick={()=>addToReadTime(reading_time)} className='bg-none py-1 px-2 ml-3'><BsFillBookmarkHeartFill></BsFillBookmarkHeartFill></button>
            </div>
        </div>
        <h2 className="text-[40px] font-bold my-6">{title}</h2>
        <p className="text-[14px] my-6">{description}</p>
        <span className='text-lg ml-2'>{hash}</span>
        <button onClick={()=>{addToBockmark(book)}} className='block mt-6'>mark as read</button>
        </>
    )
}