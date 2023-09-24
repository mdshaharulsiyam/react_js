import Profile from '../assets/profile.png'
export default function Header() {
    return(
        <>
       <div className="container mx-auto flex flex-wrap justify-between items-center my-7">
        <h2 className='text-[40px] font-bold '>Knowledge Cafe</h2>
        <img src={Profile} alt="profile" />
       </div>
       <hr className='h-1 container mx-auto' />
        </>
    )
}