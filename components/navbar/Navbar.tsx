'use client';
import { useState } from 'react';
import { navLinks } from '@/constants';
import Button from '../Button/Button';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  const [ active, setActive ] = useState('');
  const images = [
    '/title-img-2.webp'
  ] 

  return (
    <header className={`${styles.header} parent`}>
      <nav className={`${styles.nav}`}>
        <Link
          href={'/'}
        >
          <Image 
            src={images[0]}
            alt="Rezarus logo"
            width={400}
            height={175}
            />
        </Link>
        <ul className={`${styles.navList}`}>
          {navLinks.map((link) => (
            <li
            key={link.id}
            >
              <Button
                className={`${active === link.title ? "active-blue" : "standard-blue"}`}
                onClick={() => setActive(link.title)}
                href={`${link.id}`}
                >
                {link.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <span className={styles.headerBorder}></span>
    </header>
  )
}

export default Navbar