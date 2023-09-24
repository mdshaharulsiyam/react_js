import React, { useEffect, useState } from 'react'
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [social, setsocial] = useState([]);
    useEffect(() => {
        const fetchsocialData = async () => {
            const res = await fetch('SocialMedia.json');
            let data = await res.json()
            setsocial(data)
        }
        fetchsocialData()
    }, [])
    return (
        <div className='bg-[#224F34] py-7 box-border'>
            <footer className="footer p-10 container mx-auto text-white">
                <aside>
                    <h2 className='text-5xl'>Fashion house</h2>
                    <p className='text-lg'>Social Media</p>
                    <div className='flex flex-wrap gap-2'>
                        {
                            social.map(link => <SocialLinks key={link.id} links={link}></SocialLinks>)
                        }
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">SHOP</header>
                    <Link className='text-white' to={'/Shop/Products'}>Products</Link>
                    <Link className='text-white' to={'/Shop/Overview'}>Overview</Link>
                    <Link className='text-white' to={'/Shop/Pricing'}>Pricing</Link>
                    <Link className='text-white' to={'/Shop/Releases'}>Releases</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className='text-white' to={'/Contact/Aboutus'}>About us</Link>
                    <Link className='text-white' to={'/Contact'}>Contact</Link>
                    <Link className='text-white' to={'/Contact/News'}>News</Link>
                    <Link className='text-white' to={'/Contact/Support'}>Support</Link>
                </nav>
                <form>
                    <header className="footer-title">Stay up to date</header>
                    <fieldset className="form-control w-80">
                        <div className="relative">
                            <input type="email" placeholder="username@site.com" className="input text-black w-full pr-16" />
                            <button className="btn bg-[#A3F3BE] absolute top-0 right-0 rounded-l-none">submit</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <div className='md:flex items-center gap-[2%] container mx-auto'>
                <hr className='h-1 w-[70%]' />
                <div className='flex flex-wrap justify-start gap-3'>
                    <Link className='text-white' to={'/Terms'}>Terms</Link>
                    <Link className='text-white' to={'/Privacy'}>Privacy</Link>
                    <Link className='text-white' to={'/Cookies'}>Cookies</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
