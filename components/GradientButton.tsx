import React from 'react';

const GradientButton: React.FC<{}> = () => {
	return (
		<>
			<button className='font-syne flex-1  sm:flex-0 text-white backdrop-blur-[28px] px-2 py-2  w-[200px]  md:w-[155.67260] md:h-[57.99602127075195px] text-center  rounded-[5px] border border-gray-600 shadow-lg bg-gradient-to-r from-[#7E3DFF] to-[#AE01C9] hover:opacity-90'>
				Download App
			</button>
		</>
	);
};

export default GradientButton;
