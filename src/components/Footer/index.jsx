import React from 'react'
import gitLogo from '../../assets/img/github-logo.png';
import linkedInLogo from '../../assets/img/linkedin-logo.png'
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <div className='py-3 border-t-2 border-gray-100'>
       
        <div className='flex flex-wrap justify-center'>
            <Link to='https://github.com/krithika94' target='_blank'> <img className = 'h-auto max-w-[50%]' src={gitLogo} alt='Github Logo'/></Link>
            <Link to='https://www.linkedin.com/in/krithikaeshwari/' target='_blank'> <img className = 'h-auto max-w-[50%]' src={linkedInLogo} alt='LinkedIn Logo'/></Link>
            
        </div>
        <p className='flex py-2 flex-wrap justify-center text-indigo-900 '>Designed and developed by Krithika Eshwari Murugan</p>
    </div>
  )
}

