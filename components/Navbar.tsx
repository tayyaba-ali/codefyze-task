
import React from 'react';
import GradientButton from './GradientButton';
import Image from 'next/image';

const Navbar: React.FC = () => {
	return (
		<div className='flex  mt-[0.5rem] md:mt-[2rem] justify-center'>
			<nav className='md:bg-[linear-gradient(90deg,rgba(126,61,255,0.128)_0%,rgba(255,255,255,0.0896)_51%,rgba(126,61,255,0.128)_100%)] w-[1200px] flex items-center justify-between px-6 md:px-8 py-4 text-white rounded-[9px]'>
				<div className='text-lg font-bold flex items-center space-x-2'>
					<Image src='/logo.png' width={100} height={100} alt='logo' />
				</div>
				<ul className='hidden md:flex space-x-8 items-center text-white'>
					<li className='cursor-pointer hover:text-purple-400'>Home</li>
					<li className='cursor-pointer hover:text-purple-400'>About</li>
					<li className='cursor-pointer hover:text-purple-400'>Pages</li>
					<li className='cursor-pointer hover:text-purple-400'>Contact</li>
					<GradientButton />
				</ul>
				<Image src='/bar.png' width={24} height={24} className='md:hidden' alt='bar' />
			</nav>
		</div>
	);
};

export default Navbar;
