import React from 'react'
import { Link } from 'react-router-dom';

const SocialLinks = ({links}) => {
    const {id,name,logo_url,link} = links;
  return <Link to={link}><img src={logo_url} alt="" /></Link>
}

export default SocialLinks
