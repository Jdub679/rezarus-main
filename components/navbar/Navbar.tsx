'use client';
import { useState } from 'react';
import { navLinks } from '@/constants';
import Button from '../Button/Button';
import styles from './navbar.module.css';
import Image from 'next/image';


const Navbar = () => {
  const [ active, setActive ] = useState('');
  const images = [
    '/title-img-2.webp'
  ] 

  return (
    <header className="parent">
      <nav className="flex justify-between">
        <Image 
          src={images[0]}
          alt="Rezarus logo"
          width={400}
          height={175}
          />
        <ul className="flex flex-row gap-4 justify-end items-end">
          {navLinks.map((link) => (
            <li
            key={link.id}
            >
              <Button
                className={`${active === link.title ? "active-blue" : "standard-blue"}`}
                onClick={() => setActive(link.title)}
                href={`#${link.id}`}
                >
                {link.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar