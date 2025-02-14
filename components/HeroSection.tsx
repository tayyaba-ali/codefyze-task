import GradientButton from './GradientButton';
import Navbar from './Navbar';
import Image from 'next/image';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const HeroSection: React.FC = () => {
	return (
		<>
			<div className='relative overflow-hidden'>
				<Navbar />
				<div className='absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-purple-500 rounded-full blur-3xl opacity-60'></div>
			</div>
			<Carousel className='w-full'>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className='p-1'>
								<div className='flex justify-center py-5 px-5'>
									<section className='relative w-full max-w-screen-xl'>
										<div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center'>
											<div className='order-2 md:order-1'>
												<Image src='/name.png' alt='name' width={1053} height={117} />
												<p className='max-w-2xl mt-4 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed feugiat libero. Duis
													vehicula pharetra rhoncus..
												</p>
												<div className='flex'>
													<GradientButton />
													<a
														href='#'
														className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-syne text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 font-[700] font-Syne'>
														Explore more
														<svg
															className='w-5 h-5 ml-2 -mr-1'
															fill='currentColor'
															viewBox='0 0 20 20'
															xmlns='http://www.w3.org/2000/svg'>
															<path
																fillRule='evenodd'
																d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
																clipRule='evenodd'></path>
														</svg>
													</a>
												</div>
											</div>

											<div className='order-1 md:order-2 flex justify-center'>
												<Image
													src='/rocket.png'
													alt='rocket'
													width={555}
													height={555}
													className='w-full max-w-[555px] h-auto'
												/>
											</div>
										</div>
									</section>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='flex text-white  justify-center gap-4 mt-4'>
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</>
	);
};

export default HeroSection;
