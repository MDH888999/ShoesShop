import { useAppSelector } from '../redux/hooks';
import { RxCross1 } from 'react-icons/rx';
import CartProduct from './CartProduct';

function Cart({ setOpenCart }: any) {
    const products = useAppSelector((store) => store.cart);
    //console.log(useAppSelector((store) => store.cart));

    const getTotal = () => {
        let total = 0;
        products.forEach(
            (item) =>
                (total = total + Math.ceil(item.price * 0.9) * item.quantity)
        );
        return total;
    };
    return (
        <div className='fixed left-0 top-0 z-20 overflow-scroll bg-[#000007d] w-full min-h-screen'>
            <div className='max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6'>
                <RxCross1
                    onClick={() => setOpenCart(false)}
                    className='absolute right-0 top-0 m-6 text-2xl cursor-pointer'
                />
                <h3 className='pt-6 text-lg font-medium text-gray-600 uppercase'>
                    Your Cart
                </h3>
                <div>
                    {products?.map((product: any) => (
                        <CartProduct
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                </div>
                <div className='flex items-center justify-between font-medium text-xl py-4'>
                    <p>Total</p>
                    <p>${getTotal()}.00</p>
                </div>
                <div>
                    <button className='bg-sky-500 text-white text-center w-full rounded-md py-2 my-4 hover:bg-sky-600'>
                        View Cart
                    </button>
                    <button className='bg-sky-500 text-white text-center w-full rounded-md py-2 my-4 hover:bg-sky-600'>
                        Check Products
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
