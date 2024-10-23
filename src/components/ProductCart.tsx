import React from 'react';
import {
    AiFillStar,
    AiOutlineStar,
    AiOutlineShoppingCart
} from 'react-icons/ai';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/slice/cartSlice';
import toast from 'react-hot-toast';

interface propsType {
    id: number;
    title: string;
    img: string;
    category: string;
    price: string;
}

function ProductCart({ id, title, img, category, price }: propsType) {
    const dispatch = useAppDispatch();
    const addProductToCart = () => {
        const payload = {
            id,
            img,
            title,
            price: parseFloat(price),
            quantity: 1
        };
        dispatch(addToCart(payload));
        toast.success('Add to cart succfully.');
    };
    return (
        <div className='border border-gray-200'>
            <div className='text-center border-b border-gray-200'>
                <img src={img} alt='imagesOne' className='inline-block' />
            </div>
            <div className='px-4 py-4'>
                <div className='flex justify-between items-center gap-x-2'>
                    <p className='text-gray-500 text-sm font-medium'>
                        {category}
                    </p>
                    <h2 className='font-medium'>{title}</h2>
                </div>
                <div className='mt-3 flex justify-between items-center text-[#ffb21b] w-[85%]'>
                    <div className='flex items-center justify-center gap-x-2'>
                        <div className='flex'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className='text-gray-500 text-sm'>(3Review)</p>
                        <div className='font-medium text-sky-500 text-xl'>
                            ${price}
                        </div>
                    </div>
                </div>
                <div
                    onClick={addProductToCart}
                    className='flex justify-center items-center gap-x-3 w-full rounded-lg bg-sky-500 text-white mt-2 px-4 py-2 cursor-pointer hover:bg-sky-600'
                >
                    <AiOutlineShoppingCart className='text-4xl' /> Add To Cart
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
