import img01 from '../assets/img01.png';
import ProductCart from './ProductCart';

function Product() {
    const Products = [
        {
            id: 0,
            img: img01,
            title: 'Pear Phone 1',
            category: 'Mobile Phone',
            price: '999.00'
        },
        {
            id: 1,
            img: img01,
            title: 'Pear Phone 2',
            category: 'Mobile Phone',
            price: '1020.00'
        },
        {
            id: 2,
            img: img01,
            title: 'Pear Phone 3',
            category: 'Mobile Phone',
            price: '2999.00'
        },
        {
            id: 3,
            img: img01,
            title: 'Pear Phone 4',
            category: 'Mobile Phone',
            price: '1999.00'
        },
        {
            id: 4,
            img: img01,
            title: 'Pear Phone 5',
            category: 'Mobile Phone',
            price: '1120.00'
        },
        {
            id: 5,
            img: img01,
            title: 'Pear Phone 6',
            category: 'Mobile Phone',
            price: '5999.00'
        },
        {
            id: 6,
            img: img01,
            title: 'Pear Phone 7',
            category: 'Mobile Phone',
            price: '1599.00'
        },
        {
            id: 7,
            img: img01,
            title: 'Pear Phone 8',
            category: 'Mobile Phone',
            price: '6999.00'
        }
    ];
    return (
        <div className='container mt-32'>
            <div className='sm:flex justify-between items-center'>
                <h2 className='font-medium text-4xl'>Products</h2>
                <div className='text-gray-500 flex text-xl gap-4 mt-4 sm:mt-0'>
                    <div className='text-black'>New</div>
                    <div>Featured</div>
                    <div>Top Sellers</div>
                </div>
            </div>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
                {Products.map((product) => (
                    <ProductCart
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        category={product.category}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Product;
