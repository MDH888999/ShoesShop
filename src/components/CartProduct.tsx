import { useAppDispatch } from '../redux/hooks';
import { removeProduct } from '../redux/slice/cartSlice';
import { RxCross1 } from 'react-icons/rx';
interface propsType {
    id: number;
    img: string;
    title: string;
    price: number;
    quantity: number;
}

function CartProduct({ id, img, title, price, quantity }: propsType) {
    const dispatch = useAppDispatch();
    const newPrice = Math.ceil(price * 0.9);
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img src={img} alt='images' className='h-[80px]' />
                <div className='space-y-2'>
                    <h2 className='font-medium'>{title}</h2>
                    <p className='text-gray-600 text-sm'>
                        {quantity} x {newPrice}
                    </p>
                </div>
            </div>
            <RxCross1
                onClick={() => dispatch(removeProduct(id))}
                className='cursor-pointer'
            />
        </div>
    );
}

export default CartProduct;
