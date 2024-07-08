import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const navIcons = [
    { src: "/assets/icons/search.svg", alt: "search"},
    { src: "/assets/icons/black-heart.svg", alt: "heart"},
    { src: "/assets/icons/user.svg", alt: "user"},
]

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href={"/"} className='flex items-center gap-1'>
                <Image
                    src={"/assets/icons/discount-2.svg"}
                    width={25}
                    height={20}
                    alt='logo'
                />
                <p className='nav-logo'>
                    Price<span className='text-primary'>Watch</span>
                </p>
            </Link>
            <div className='flex items-center gap-5'>
                {navIcons.map((icon, idx) => (
                    <Image
                        key={idx}
                        src={icon.src}
                        alt={icon.alt}
                        width={28}
                        height={28}
                        className='object-contain'
                    />
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar