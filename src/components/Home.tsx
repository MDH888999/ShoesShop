import img01 from '../assets/img01.png';
import banner1 from '../assets/banner.jpg';

function Home() {
    return (
        <div className='bg-[#e3edf6] banner pt-4'>
            <div className='grid md:grid-cols-2 w-full py-8 px-40 z-10'>
                <div className='flex items-center justify-center'>
                    <div className='max-w-[450px] space-y-4 bg-white p-4 rounded-lg shadow'>
                        <h2 className='text-headingFirst font-bold text-3xl md:text-4xl'>
                            The best mobile phone collection 2024
                        </h2>
                        <h3 className='text-2xl font-semibold'>
                            Christmas special offer
                            <span className='text-red-600 font-secondary font-medium'>
                                -10% discounts.
                            </span>
                        </h3>
                        <a
                            href='#'
                            className='inline-block bg-sky-500 text-white rounded-md px-6 py-3 hover:bg-sky-600 transition-all duration-200'
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className='ml-auto'>
                    <img src={banner1} alt='imgBanner' className='ml-auto' />
                </div>
            </div>
        </div>
    );
}

export default Home;
